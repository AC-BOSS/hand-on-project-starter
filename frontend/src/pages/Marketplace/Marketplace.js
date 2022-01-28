import React from 'react';
import styles from './Marketplace.module.css';
// import Logo from "../../utils/images/logo.svg";
import Photo from "../../utils/images/api.png";
import Card from "../../components/Card/Card";
import Navbar from '../../components/Navbar/Navbar';

export default function Marketplace() {
    return (
        <>
            <Navbar />
            <div className={styles.dashboard}>
                {/* <div className={styles.header}>
                    <img src={Logo} alt="logo" className={styles.logo} />
                    <button className={styles.logbutton}>Login/Signup</button>
                </div> */}
                <div className={styles.body}>
                    <div className={styles.topcard}>
                        <img src={Photo} alt="logo" className={styles.topcardphoto} />
                        <div className={styles.semicircle}>
                        
                        </div>
                        <h1 className={styles.toptext}>BACKGROUND IMAGE REMOVER</h1>
                        <h1 className={styles.bottomtext}>100% automatic and free</h1>
                        <buttom className={styles.viewButton}>View App</buttom>
                    </div>
                    <h2 className={styles.allAPI}>All APIs</h2>
                    <div className={styles.cards}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    
                    </div>
                </div>
            </div>
        </>
    )
}