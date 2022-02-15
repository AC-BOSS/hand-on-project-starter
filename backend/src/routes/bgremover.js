const router = require("express").Router();

const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const upload = multer();

router.post("/removebg", upload.single("file"), (req, res) => {
    // res.download("./no-bg.png", "no-bg.png", (err) => {
    //     if (err) console.error(err);
    //     else console.log("Success");
    // });
    // const options = {
    //     headers: {
    //         "Content-Type": "image/png",
    //         "Content-Disposition": "attachment",
    //     },
    // };
    // res.sendFile(path.join(__dirname + "/../../no-bg.png"), options, (err) => {
    //     if (err) console.error(err);
    //     else console.log("Success");
    // });
    // console.log(req.file.buffer);
    // // console.log(img);

    const formData = new FormData();
    formData.append("size", "auto");
    formData.append("image_file", req.file.buffer);
    // console.log(formData);

    axios({
        method: "post",
        url: "https://api.remove.bg/v1.0/removebg",
        data: formData,
        responseType: "arraybuffer",
        headers: {
            ...formData.getHeaders(),
            "X-Api-Key": process.env.API_KEY,
        },
        encoding: null,
    })
        .then((response) => {
            if (response.status != 200) {
                console.error("Error:", response.status, response.statusText);
                return res.status(response.status).send(response.statusText);
            }
            fs.writeFileSync("no-bg.png", response.data);
            res.download("./no-bg.png", "no-bg.png", (err) => {
                if (err) console.error(err);
                else console.log("Success");
            });
        })
        .catch((error) => {
            console.error("Request failed:", error);
            return res.status(500).send(error);
        });
});

module.exports = router;
