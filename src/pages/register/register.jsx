import { Field, Form, Formik } from 'formik';
import "./register.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import manWithRobot from "../../assets/video/manWithRobot.mp4";
import womanWithRobot from "../../assets/video/womanWithRobot.mp4";
import animation from "../../assets/video/Видео без названия — сделано в Clipchamp (1).mp4";
import animation2 from "../../assets/video/18069235-uhd_3840_2160_24fps.mp4";
import logo from "../../assets/images/Screenshot_2024-08-19_133415-removebg-preview.png";

function Register() {
  const navigate = useNavigate();

  // Array of video sources
  const videos = [manWithRobot, womanWithRobot, animation, animation2];
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  return (
    <div className="register-wrapper">
      <video src={randomVideo} autoPlay loop muted className="background-video"></video>
      <img src={logo} alt="Logo" className="logo-image" />
      <div className="register-container">
        <h1 className="login-title">Sign Up</h1>
        <Formik
          initialValues={{
            userName: '',
            phoneNumber: '',
            email: '',
            password:'',
            confirmPassword:''
          }}
          onSubmit={async (values) => {
            try {
              let {data} = await axios.post("http://135.181.152:8072/Account/register", values);
              if (data.statusCode === 200) navigate("/");
            } catch (error) {
              console.log(error);
              alert("Ном ё парол нодурустай братишка");
            }
          }}
        >
          <Form className="login-form">
            <div className="form-group">
              <label htmlFor="userName">First Name</label>
              <Field id="userName" name="userName" placeholder="Nick name" className="form-field" />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field id="phoneNumber" name="phoneNumber" placeholder="Phone number" className="form-field" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="email@gmail.com"
                type="email"
                className="form-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field id="password" name="password" placeholder="password" className="form-field" />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Config Password</label>
              <Field id="confirmPassword" name="confirmPassword" placeholder="password" className="form-field" />
            </div>

            <button type="submit" className="submit-button">Submit</button>
            <h3 onClick={() => {navigate("/")}} style={{color:"aliceblue"}}>Did you already have an account?</h3>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Register;
