import React from "react";
import styles from './BGRemover.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Photo from '../../utils/images/api.png';
import UploadImg from '../../utils/images/upload.svg';

export default function BGRemover() {
    return (
        <>
            <Navbar />
            <div className={styles.main}>
                <div className={styles.left}>
                    <p className={styles.heading}>Remove image background</p>
                    <p className={styles.secondary_text}>100% automatic and free</p>
                    <img src={Photo} alt="API Logo" />
                </div>
                <div className={styles.right}>
                    <div className={styles.upload_container}>
                        <div className={styles.img_border}>
                            <img src={UploadImg} />
                        </div>
                        <p className={styles.img_description}>File should be jpg, png and less than 5mb</p>
                        <button className={styles.button} >Upload Image -&gt;</button>
                        <p className={styles.img_description}>Or drop a file</p>
                    </div>
                </div>
            </div>
        </>
    )
}