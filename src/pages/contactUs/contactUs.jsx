import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaSun, FaMoon } from 'react-icons/fa';
import "./contactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [message, setMessage] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { fullName, email, phoneNumber, message } = formData;

    if (!fullName || !email || !phoneNumber || !message) {
      setMessage('Please fill in all the inputs.');
    } else {
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
      setMessage('Your message has been submitted successfully!');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''} style={{paddingBottom:"50px"}}>
      <button
        className={`toggle ${darkMode ? 'toggle-dark' : ''}`}
        onClick={toggleDarkMode}
        style={{
          border: "none",
          backgroundColor: "transparent",
          position: "absolute",
          right:'180px',
          top: '15px',
          zIndex: "40"
        }}
      >
        {darkMode ? <FaMoon style={{ zoom: '1.6', marginTop: '5px' }} /> : <FaSun style={{ zoom: '1.6', marginTop: '5px' }} />}
      </button>

      <div className='hed' style={{ width: "100%", paddingTop: "50px", paddingBottom: "20px" }}>
        <div style={{ width: '91%', margin: "auto", borderBottom: '2px solid black' }}>
          <h1 className='con' data-aos="zoom-in" data-aos-delay="300" >Contact Us </h1>
          <p data-aos="zoom-in" data-aos-delay="300" style={{ fontSize: "25px" }}>Have ideas for your business? Let’s build something awesome together.</p>
        </div>
        <div style={{ display: 'flex', width: '91%', margin: 'auto', marginTop: "30px" }}>
          <h1 data-aos="zoom-in" data-aos-delay="300" style={{ borderRight: "2px solid black", paddingRight: "20px" }}>Home</h1>
          <h1 data-aos="zoom-in" data-aos-delay="300" style={{ marginLeft: '20px' }}>Contact Us</h1>
        </div>
      </div>

      <div className='mes' style={{ display: 'flex', width: "91%", margin: 'auto', marginTop: "40px" }}>
        <div style={{ width: "60%" }}>
          <h1 data-aos="zoom-in" data-aos-delay="300" style={{ fontSize: "55px", fontWeight: "600" }}>Send Us A Message</h1>
          <h2 data-aos="zoom-in" data-aos-delay="300" style={{ fontWeight: "500" }}>Then let us know about it and we can see what we can do to help</h2>
          <input
            data-aos="zoom-in"
            data-aos-delay="300"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            style={{ width: "80%", paddingLeft: "30px", paddingRight: "30px", border: "1px solid gray", borderRadius: '50px', height: "56px", marginTop: "50px", fontSize: "20px" }}
            placeholder='Full Name'
          />
          <input
            data-aos="zoom-in"
            data-aos-delay="300"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ width: "80%", paddingLeft: "30px", paddingRight: "30px", border: "1px solid gray", borderRadius: "50px", height: '56px', marginTop: "20px", fontSize: "20px" }}
            placeholder='Email Address'
          />
          <input
            data-aos="zoom-in"
            data-aos-delay="300"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            style={{ width: "80%", paddingLeft: "30px", paddingRight: "30px", border: "1px solid gray", borderRadius: "50px", height: '56px', marginTop: "20px", fontSize: "20px" }}
            placeholder='Phone Number'
          />
          <input
            data-aos="zoom-in"
            data-aos-delay="300"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={{ width: "80%", paddingLeft: "30px", paddingRight: "30px", border: "1px solid gray", borderRadius: "50px", height: '106px', marginTop: "20px", fontSize: "20px" }}
            placeholder='Message'
          />
          <button
            data-aos="zoom-in"
            data-aos-delay="300"
            style={{ height: '56px', width: "180px", borderRadius: "50px", border: "1px solid gray", backgroundColor: "black", color: "white", fontSize: '20px', marginTop: "30px" }}
            onClick={handleSubmit}
          >
            Send Message
          </button>
          {message && (
            <p style={{ marginTop: "20px", color: message.includes('successfully') ? "green" : "red", fontSize: "18px" }}>
              {message}
            </p>
          )}
        </div>

        <div className='ourNum' style={{ width: "60%", backgroundColor: "black", padding: "50px", color: "white" }}>
          <h1 data-aos="zoom-in" data-aos-delay="300">Contact Info</h1>
          <h2 data-aos="zoom-in" data-aos-delay="300">Tel: +992 884 23 8383</h2>
          <h2 data-aos="zoom-in" data-aos-delay="300">Tel: +992 009 55 59 59</h2>
          <h2 data-aos="zoom-in" data-aos-delay="300">Email: contact@NexGen.tj</h2>
          <div style={{ display: 'flex', gap: "20px", marginTop: '20px', borderBottom: '2px solid gray', paddingBottom: "20px" }}>
            <a href="https://www.instagram.com/umedzzodaaa/?next=%2F" style={{ color: "white" }}>
              <div data-aos="zoom-in" data-aos-delay="300" style={{ padding: "10px", border: "2px solid white", width: "40px", borderRadius: "50px", height: '40px' }}>
                <InstagramIcon style={{ fontSize: '40px' }} />
              </div>
            </a>
            <a href="https://t.me/vip_hhtms" style={{ color: "white" }}>
              <div data-aos="zoom-in" data-aos-delay="300" style={{ padding: "10px", border: "2px solid white", width: "40px", borderRadius: "50px", height: '40px' }}>
                <TelegramIcon style={{ fontSize: '40px' }} />
              </div>
            </a>
            <a href="https://github.com/prostoabubakr" style={{ color: "white" }}>
              <div data-aos="zoom-in" data-aos-delay="300" style={{ padding: "10px", border: "2px solid white", width: "40px", borderRadius: "50px", height: '40px' }}>
                <GitHubIcon style={{ fontSize: '40px' }} />
              </div>
            </a>
          </div>
          <div style={{ paddingTop: "20px", paddingBottom: "20px", borderBottom: "2px solid gray" }}>
            <h1 data-aos="zoom-in" data-aos-delay="300">Tajikistan</h1>
            <h2 data-aos="zoom-in" data-aos-delay="300">Profsoyuz, Dushanbe</h2>
          </div>
          <div style={{ paddingTop: '20px' }}>
            <h1 data-aos="zoom-in" data-aos-delay="300">Turkey</h1>
            <h2 data-aos="zoom-in" data-aos-delay="300">İzmir - Çalıkuşu 3205 Karabağlar</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
