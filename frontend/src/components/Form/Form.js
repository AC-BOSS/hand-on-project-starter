import React, {useState} from "react";
import styles from './Form.module.css';

// require("dotenv").config();
const axios = require("axios");

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

    const handleRegister = async (e) => {
        e.preventDefault();

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, JSON.stringify(userData), {headers:{'content-type':'application/json'}}).then((res) => {
            if(res.data.status === "OK"){
                console.log("User registered");
            } else {
                console.error("Error:", res.data.error);
            }
        }).catch((error)=>{
            console.error(error.message);
        });
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, JSON.stringify(userData), {headers:{'content-type':'application/json'}}).then((res) => {
            if(res.data.status === "OK"){
                console.log("Got the token:", res.data.token);
                localStorage.setItem('token', res.data.token);
            } else {
                console.error("Error:", res.data.error)
            }
        }).catch((error)=>{
            console.error(error.message);
        });
    }

    return(
        <div className={styles.formContainer}>
            <form>
                <p className={styles.text}>Login to your account</p>
                <input type="email" value={userData.email} onChange={handleChange} name="email" placeholder="Email address" className={styles.input} />
                <input type="password" value={userData.password} onChange={handleChange} name="password" placeholder="Password" className={styles.input} />
                <input type="submit" value="Signup" className={styles.button} onClick={handleRegister}/>
                <input type="submit" value="Login" className={styles.button} onClick={handleLogin}/>
            </form>
        </div>
    )
}
