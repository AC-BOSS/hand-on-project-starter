const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

router.post("/register", async (req, res) => {
    const { email, password: plainTextPassword } = req.body;
    console.log(email, plainTextPassword);

    const password = await bcrypt.hash(plainTextPassword, 10);

    try {
        const res = await User.create({
            email,
            password,
        });
        console.log("User created:", res);
    } catch (error) {
        if (error.code === 11000) {
            return res.json({ status: "error", error: "Email already exists" });
        }
        return res.json({ status: "error", error: error });
    }
    res.json({ status: "OK" });
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).lean();

    if (!user) {
        return res.json({
            status: "error",
            error: "Invalid username/password",
        });
    }

    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign(
            {
                id: user._id,
                email: email,
            },
            process.env.JWT_SECRET,
        );
        console.log("User logged in");
        return res.json({ status: "OK", token: token });
    }
    res.json({
        status: "error",
        error: "Invalid username/password",
    });
});

module.exports = router;
