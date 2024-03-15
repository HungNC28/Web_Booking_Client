import Navbar from "../../components/navbar/Navbar";
import "./SignUp.css";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const SubmitHandle = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
      fullName: fullName,
      phoneNumber: phoneNumber,
      email: email,
    };
    fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((data) => {
        if (data.status === 200) {
          alert("Create user successfully");
          navigate("/login");
        }
        if (data.status === 401) {
          alert("Username already exists");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="containerSignUp">
      <div className="headerSignUp">
        <Navbar />
      </div>
      <div className="cardSignUp">
        <h1>SignUp</h1>
        <Form className="formSignUp" action="/sign-up" method="post">
          <input
            className="inputSignUp"
            placeholder="Username"
            type="text"
            name="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="inputSignUp"
            placeholder="Password"
            type="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="inputSignUp"
            placeholder="Full name"
            type="text"
            name="fullName"
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="inputSignUp"
            placeholder="Phone Number"
            type="text"
            name="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            className="inputSignUp"
            placeholder="Email"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={SubmitHandle} className="btnSignUp" type="submit">
            Create account
          </button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
