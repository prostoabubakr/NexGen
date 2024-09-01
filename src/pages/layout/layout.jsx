import React, { useEffect, useState } from 'react';
import logo from "../../assets/images/Screenshot_2024-08-19_133415-removebg-preview.png";
import './Layout.css'; // Updated CSS file
import { useNavigate } from 'react-router-dom';
import { destroyToken } from '../../utils/token';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import AOS from "aos";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "aos/dist/aos.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  
  return (

      <header style={{ paddingBottom:'20px', position: 'relative', backgroundColor:"rgba(134, 134, 134, 1)",width:"100%",height:'55px'}}>
        
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <KeyboardArrowUpIcon style={{fontSize:"50px"}}/>
  </button>

        <img className='logot' src={logo} alt="Logo"  />
        <div className="menu-toggle" onClick={toggleMenu} >
          <span className={`menu-icon ${isOpen ? "open" : ""}`}></span>
        </div>
        <nav className={`nav ${isOpen ? "nav--open" : ""}`}>
          <ul>
            <li><a href="/home" style={{ fontSize: "50px" }}>Home</a></li>
            <li><a href="/project" style={{ fontSize: "50px" }}>Our Projects</a></li>
            <li><a href="/contactUs" style={{ fontSize: "50px" }}>Contact Us</a></li>
            <li><a href="/place" style={{ fontSize: "50px" }}>Our Place</a></li>
            <li><a href="/calculator" style={{ fontSize: "50px" }}>Calculator</a></li>

          </ul>
        </nav>
         
        <button
          onClick={() => {
            destroyToken();
            navigate("/");
          }}
          style={{
            backgroundColor: "white",
            color: "black",
            border: "none",
            width: "100px",
            height: "46px",
            position: "absolute",
           right:'50px',
            top: 20,
            borderRadius: "5px"
          }}
        >
          Log Out
        </button>
      </header>      
  );
};

const Footer = () => {
  let navigate = useNavigate()
  return(
    <footer  style={{ backgroundColor: '#111927', color: '#fff' ,display:"flex",}}>
    <div  style={{display:"flex",flexDirection:"column",width:"35%",}}>
      <img src={logo} alt="" style={{width:"300px"}}/>
      <div style={{marginLeft:"50px",position:'relative',bottom:'20px',left:'5px'}}>
      <a href="https://www.instagram.com/umedzzodaaa/?next=%2F" style={{color:"white"}}>
      <InstagramIcon style={{fontSize:"40px"}}/>
      </a>
      <FacebookIcon style={{fontSize:"40px",marginLeft:'10px'}}/>
      <a href="https://github.com/prostoabubakr" style={{color:'white'}}>
      <GitHubIcon style={{fontSize:"40px",marginLeft:'10px'}}/>
      </a>
      <a href="https://t.me/vip_hhtms" style={{color:'white'}}>
      <TelegramIcon style={{fontSize:'40px',marginLeft:"10px"}}/>
      </a>
      </div>
    </div>
    <div style={{marginTop:'50px'}}>
      <h1>About Us:</h1>
      <p>Company founded - February 8, 2017. <br />
Back then we developed only websites. <br />
Today we provide full range of <br />
 development services. And promote our <br />
  own projects.</p>
    </div>
    <div style={{marginTop:'50px',marginLeft:'60px'}}>
      <h1>WE are here:</h1>
      <p>Tajikistan, Dushanbe, <br />
Pavsayouz <br />
Landmark: behaind Prakuratura</p>
<button onClick={() => {navigate("/place");}} style={{height:"36px",border:'none',borderRadius:'10px',marginTop:"20px"}} >Go to the map</button>
    </div>
    <div style={{marginTop:'50px',marginLeft:'30px'}}>
      <h1>
        Thank you <br />
         for choosing our company !
      </h1>
    </div>
  </footer>
)
};

// Correct export
const Layout = ({ children }) => (
  <div style={{}}>
    <Header />
      {children}
    <Footer />
  </div>
);

export default Layout;
