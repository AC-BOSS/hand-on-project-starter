import React from "react";
import logo from '../../utils/images/logo.svg';
import styles from './Navbar.module.css';

export default function Navbar(){
    return (
        <div className={styles.navbar}>
            <img src={logo} />
        </div>
    )
}