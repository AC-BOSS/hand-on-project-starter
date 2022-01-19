import React, {useState} from "react";
import styles from './Form.module.css';

export default function Form(){
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const field = e.target.name;
        const val = e.target.value;

        setUserData({... userData, [field]:val});
    }

    return(
        <div className={styles.formContainer}>
            <form>
                <p className={styles.text}>Login to your account</p>
                    <input type="email" value={userData.email} onChange={handleChange} name="email" placeholder="Email address" className={styles.input} />
                    <input type="password" value={userData.password} onChange={handleChange} name="password" placeholder="Password" className={styles.input} />
                    <input type="submit" value="Login/Signup" className={styles.button}/>
            </form>
        </div>
    )
}
