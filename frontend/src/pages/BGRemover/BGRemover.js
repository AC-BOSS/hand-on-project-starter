import React, { useState } from "react";
import styles from './BGRemover.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Photo from '../../utils/images/api.png';
import UploadImg from '../../utils/images/upload.svg';

import {useDropzone} from 'react-dropzone';

export default function BGRemover() {
    const [files, setFiles] = useState([]);
    const [errors, setErrors] = useState("");
    const {getRootProps, getInputProps, open} = useDropzone({
        noClick: true,
        noKeyboard: true,
        maxFiles:1,
        accept: 'image/jpg, image/png',
        maxSize: 3000000,
        onDrop: (acceptedFiles, rejectedFiles) => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
            setErrors("");
            rejectedFiles.forEach((file) => {
                file.errors.forEach((err) => {
                    if (err.code === "file-too-large") {
                        setErrors(`Error: ${err.message}`);
                    }
        
                    if (err.code === "file-invalid-type") {
                        setErrors(`Error: ${err.message}`);
                    }
                });
            });
        }
    });

    const images = files.map((file) => (
        <div key={file.name}>
            <img src={file.preview} style={{width: "200px"}} alt="preview" />
        </div>
    ))
    return (
        <>
            <Navbar />
            <div className={styles.main}>
                <div className={styles.left}>
                    <p className={styles.heading}>Remove image background</p>
                    <p className={styles.secondary_text}>100% automatic and free</p>
                    <img src={Photo} alt="API Logo" />
                </div>
                <div {...getRootProps()} className={styles.right}>
                    <input {...getInputProps()} />
                    <div className={styles.upload_container}>
                        
                        {images.length>0 ? <div>{images}</div> : <div className={styles.img_border}><img src={UploadImg} /></div>}
                        <p className={styles.img_error}>
                            {errors}
                        </p>
                        <p className={styles.img_description}>File should be jpg, png and less than 5mb</p>
                        <button className={styles.button} onClick={open}>Upload Image -&gt;</button>
                        <p className={styles.img_description}>Or drop a file</p>
                    </div>
                </div>
            </div>
        </>
    )
}