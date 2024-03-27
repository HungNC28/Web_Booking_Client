import "./Login.css";
import Navbar from "../../components/navbar/Navbar";
import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../utils/const";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitHandle = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${BASE_URL}/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.status === 401) {
                alert("Password or username is not correct");
            }
            if (response.status === 200) {
                alert("Logged in successfully");
                const user = await response.json();
                localStorage.setItem("currentUser", JSON.stringify(user));
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="loginContainer">
            <div className="headerLogin">
                <Navbar />
            </div>
            <div className="loginCard">
                <h1>Login</h1>
                <Form method="post">
                    <input
                        className="loginInput"
                        placeholder="Username"
                        type="text"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="loginInput"
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        onClick={submitHandle}
                        className="loginBtn"
                        type="submit"
                    >
                        Login
                    </button>
                </Form>
            </div>
        </div>
    );
};

export default Login;
