import React from 'react'
import styles from "./Card.module.css";
import Photo from "../../utils/images/api.png";

function Card() {
    return (
        <div className={styles.card}>
            <img src={Photo} className={styles.image} alt="pic"/> 
            <h1 className={styles.title}>Background Remove</h1> 
            <p className={styles.description}>The vxcxbxfbfbfdh bfdhfgdhjngjnfhnf htfhtf ghfgththf hgtfhgdth gdhthhhhbddh vxgddhd nhsnhsh sgdgdh snsjs nsndnjdnjs njsns ndes cription of API in quick brief and will truncate it here</p>         
        </div>
    )
}

export default Card