import React from 'react';
import styles from './Dashboard.module.css';
import welcomeLogo from '../../utils/images/welcome.svg';
import Form from '../../components/Form/Form';

export default function Dashboard(){
    return (
        <div className={styles.dashboard}>
            <div className={styles.left} >
                <img src={welcomeLogo} className={styles.welcomeLogo} />
                <p className={styles.welcome}>
                    Welcome to your Dashboard
                </p>
                <p className={styles.welcomeText}>
                    Your uploaded APIs will be displayed here once you login to your account
                </p>
            </div>
            <div className={styles.right} ><Form /></div>
        </div>
    )
}