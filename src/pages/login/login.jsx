import { Field, Form, Formik } from "formik";
import "./login.css";
import React from "react";
import axios from "axios";
import { saveToken } from "../../utils/token";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Screenshot_2024-08-19_133415-removebg-preview.png"
import manWithRobot from "../../assets/video/manWithRobot.mp4";
import womanWithRobot from "../../assets/video/womanWithRobot.mp4";
import animation from "../../assets/video/Видео без названия — сделано в Clipchamp (1).mp4";
import animation2 from "../../assets/video/18069235-uhd_3840_2160_24fps.mp4";
function Login() {
  const navigate = useNavigate();
  const videos = [manWithRobot, womanWithRobot, animation, animation2];

  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  return (
    <div className="login-background">
      <video  src={randomVideo} autoPlay loop muted style={{position:"absolute",zIndex:"-1",top:"0px",width:"100%",left:"0px",  height: "100%",objectFit: "cover"}}></video>
      <img src={logo} alt="" style={{width:"300px",height:"200px",position:"absolute",zIndex:"10",left:-25,padding:'0px',top:-50,}}/>

      <div className="login-container">
        <h1 className="login-title">Sign In</h1>
      
        <Formik
          initialValues={{
            userName: "",
            password: "",
          }}
          onSubmit={async (values) => {
            try {
              const response = await axios.post(
                `http://135.181.152.249:8072/Account/login`,
                values
              );

              if (response.status === 200) { 
                saveToken(response.data.token); 
                navigate('/home');
              } else {
                console.error('Login failed with status:', response.status);
              }
            } catch (error) {
              console.error('Error during login:', error);
            }
          }}
        >
          <Form className="login-form">
            <div className="form-group">
              <label htmlFor="userName">First Name</label>
              <Field
                id="userName"
                name="userName"
                placeholder="Example: Jane"
                className="form-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                id="password"
                name="password"
                type="password" 
                placeholder="Example: 12345678"
                className="form-field"
              />
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
            <h3
              onClick={() => {
                navigate("/register");
              }}
              style={{ color: "aliceblue", cursor: "pointer" }} 
            >
              You don't have an account?
            </h3>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
