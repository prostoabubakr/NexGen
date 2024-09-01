import React, { useEffect, useState } from 'react';
import manWithRobot from "../../assets/video/manWithRobot.mp4";
import womanWithRobot from "../../assets/video/womanWithRobot.mp4";
import animation from "../../assets/video/Видео без названия — сделано в Clipchamp (1).mp4";
import animation2 from "../../assets/video/18069235-uhd_3840_2160_24fps.mp4";
import softClub from "../../assets/images/thumb-320x240-b880e2dd734d8742feeea269ffd51da6__1_-removebg-preview.png"
import rio from "../../assets/images/rio_tj_logo-removebg-preview.png"
import "./home.css";
import comp from "../../assets/images/webapp_ravon.png"
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Carousel from '../../components/carousel/carousel';
import Ymap from '../../components/yandexMap/yandexMap';
import LanguageToggle from '../../languageToggle';
import { Switch } from '@mui/material';
import { FaSun, FaMoon } from 'react-icons/fa';


function Home() {
  let navigate = useNavigate()
  const videos = [womanWithRobot, manWithRobot, animation2, animation];
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  const testimonials = [
    {
      name: 'John Doe',
      text: 'The professionalism and quality of service are unmatched. They brought our vision to life with incredible skill!',
      company: 'Tech Solutions',
    },
    {
      name: 'Jane Smith',
      text: 'I am amazed by how they managed the project. The results were better than expected, and everything was on time!',
      company: 'Creative Minds',
    },
    {
      name: 'Michael Lee',
      text: 'Their design and development team are fantastic. Our website now stands out from the competition!',
      company: 'Innovate Corp.',
    },
  ];
   const testimonials2 = [
    {
      quote: "This service is outstanding! They helped us build a beautiful website that increased our sales dramatically.",
      author: "John Doe",
      position: "CEO, ExampleCorp"
    },
    {
      quote: "Highly recommend! The team is extremely professional and delivers top-notch work.",
      author: "Jane Smith",
      position: "Marketing Director, StartupCo"
    },
    {
      quote: "The level of detail and dedication is impressive. We couldn't be happier with the results.",
      author: "Mike Johnson",
      position: "Founder, TechSolutions"
    }
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleButtonClick = () => {
    alert('Button Clicked!');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
 

    const infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach((box) => {
      observer.observe(box);
    });

    return () => {
      infoBoxes.forEach((box) => {
        observer.unobserve(box);
      });
    };
  }, []);
  const [darkMode, setDarkMode] = useState(false);

 const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  

  return (
    <>
   
     <button className={`toggle ${darkMode ? 'toggle-dark' : ''}`} onClick={toggleDarkMode} style={{border:"none",backgroundColor:"transparent",position:"absolute",left:"1270px",top:'15px',zIndex:"40"}}>
                              {darkMode ? <FaMoon style={{zoom: '1.6', marginTop: '5px'}}/> : <FaSun style={{zoom: '1.6', marginTop: '5px',}}/>}
           </button>
      <div>
        <video 
          src={randomVideo} 
          autoPlay 
          loop 
          muted 
          style={{ 
            position: "absolute", 
            zIndex: "-1", 
            top: "-100px", 
            width: "100%", 
            height: "1097px", 
            left: "0px" 
          }}
        ></video>
        <h1 data-aos="zoom-in" data-aos-delay="300" className="main-title">Simplifying <br /> Digitalization</h1>
        <h2 data-aos="zoom-in" data-aos-delay="600" className="sub-title">Creative studio at the intersection of <br />
          art, design and technology aimed to <br />
          simplify your digital experience.</h2>
      </div>

            <div className={`home-containr ${darkMode ? 'dark-mode' : ''}`}>
      <div className="info-section">
    <div className="info-box left-box">
        <div className="small-circle"></div>
        <img src="https://rio.tj/client/assets/images/serv-icon1.png" style={{width:"60px",paddingBottom:"20px"}} alt="" />
        <h3>Consulting & Research</h3>
        <p>Our Consulting & Research service <br />
           provides market analysis, insights, and <br />
           recommendations for informed <br />
           decisions.</p>
    </div>
    <div className="info-box middle-box">
        <div className="small-circle"></div>
        <img src="https://rio.tj/client/assets/images/serv-icon2.png" alt=""  style={{width:"60px",paddingBottom:"20px"}}/>
        <h3>Software Design</h3>
        <p>Turning requirements into user-friendly <br />
           software interfaces that streamline <br />
           tasks, boost productivity, and adhere <br />
           to industry best practices.</p>
    </div>
    <div className="info-box right-box">
        <div className="small-circle"></div>
        <img src="https://rio.tj/client/assets/images/serv-icon3.png" alt=""  style={{width:"60px",paddingBottom:"20px"}}/>
        <h3>Hardware Design</h3>
        <p>Innovating, optimizing, and crafting <br />
           cutting-edge hardware designs that <br />
           push technological boundaries and <br />
           bring ideas to life.</p>
    </div>
</div>


      <section className="projects-section">
        <div style={{display:"flex"}}>

      <div className="projects-header" style={{paddingRight:"35px"}} data-aos="zoom-in">
        <h2 className="projects-title" style={{lineHeight:"60px",fontSize:"70px",textAlign:"end",marginTop:"50px"}}>Our <br />
         projects</h2>
        <p className="projects-description" style={{textAlign:"end",marginTop:"40px"}}>
          Projects we implemented <br />
          Developed from scratch, <br />
          Working on, Improving <br />
          And will be doing better day by day
        </p>
      </div>
     <div  style={{width:"2px",height:"400px",backgroundColor:"black",marginRight:"30px",position:"relative",bottom:"70px"}} data-aos="zoom-in"></div>
     <div className='cardinFo' data-aos="zoom-in" style={{width:"235px",height:"400px",borderRadius:"25px",paddingLeft:"20px",paddingRight:"20px"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"40%",borderBottom:"1px solid gray"}}>
      <img src={softClub} alt="" style={{width:"120px",}}/>
      </div>
      <h1 style={{marginTop:"30px",fontSize:"30px"}} className='in'>Soft Club</h1>
      <p className='in'>
      SoftClub.tj is an IT <br /> academy offering
       quick, intensive <br />
        programming
       courses to turn beginners 
        into professionals.</p>
     </div>
     <div data-aos="zoom-in" style={{width:"2px",height:"400px",backgroundColor:"black",marginRight:"30px",marginLeft:"30px",position:"relative",top:"180px"}}></div>

     <div className='cardinFo' data-aos="zoom-in" style={{width:"235px",height:"400px",borderRadius:"25px",paddingLeft:"20px",paddingRight:"20px"}}>
      <div data-aos="zoom-in" style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"40%",borderBottom:"1px solid gray"}}>
      <img src={rio} alt="" style={{width:"100px",}}/>
      </div>
      <h1 style={{marginTop:"30px",fontSize:"30px"}} className='in'>Rio</h1>
      <p className='in'>
      RIO.tj is a creative studio <br />
      that specializes in digitalizing <br />
       businesses through design, <br />
       software, and hardware solutions
       </p>
       <div  style={{display:"flex",gap:"10px",marginTop:"10px"}}>
       <h4 onClick={()=>{navigate("/project")}}>Read more</h4>
    <svg data-bottom-top="transform: scaleX(.5);" data-center-bottom="transform: scaleX(1);" fill="#333" viewBox="0 0 87.52 7.33" xmlns="https://www.w3.org/2000/svg" class="skrollable skrollable-after" style={{width:"100px"}}>
    <path d="M83.2.49l.37-.37a.4.4,0,0,1,.57,0L87.4,3.38a.4.4,0,0,1,0,.57L84.14,7.21a.4.4,0,0,1-.57,0l-.37-.37a.39.39,0,0,1,0-.57l2-1.93H.4a.4.4,0,0,1-.4-.4V3.4A.4.4,0,0,1,.4,3H85.23l-2-1.92A.4.4,0,0,1,83.2.49Z"></path>
    </svg>
       </div>
     </div>
        </div>
      <div className="projects-content" style={{marginTop:"80px"}}>
        <div className="project-feature" style={{textAlign:"start",display:"flex"}}>
          <div>
         <img src={comp} alt="" data-aos="zoom-in" style={{position:"relative",zIndex:"20",bottom:"180px"}} />
          </div>
          <div style={{position:"relative",right:"200px",top:"60px", zIndex: '50'}}>
          <h2 data-aos="zoom-in" className="project-title" style={{fontSize:"65px"}}>Web development</h2>
          <p data-aos="zoom-in" className="project-desc" style={{fontWeight:"200"}}>
            We professionally develop web pages - from landing pages to high scale <br /> online shops that will become leaders in their segments.
          </p>
          <div data-aos="zoom-in" style={{display:"flex"}}>
          <p data-aos="zoom-in" onClick={()=>navigate("/project")} className="portfolio-link" style={{marginRight:"20px",zIndex:"40"}}>Portfolio</p>
          <svg data-bottom-top="transform: scaleX(.5);" data-center-bottom="transform: scaleX(1);" fill="#fff" viewBox="0 0 87.52 7.33" xmlns="https://www.w3.org/2000/svg" class="skrollable skrollable-between" style={{width:"140px"}} >
          <path d="M83.2.49l.37-.37a.4.4,0,0,1,.57,0L87.4,3.38a.4.4,0,0,1,0,.57L84.14,7.21a.4.4,0,0,1-.57,0l-.37-.37a.39.39,0,0,1,0-.57l2-1.93H.4a.4.4,0,0,1-.4-.4V3.4A.4.4,0,0,1,.4,3H85.23l-2-1.92A.4.4,0,0,1,83.2.49Z"></path>
          </svg>
          </div>
          <h1 style={{opacity:"0.2",fontSize:"200px",zIndex:"1",position:"relative",bottom:"200px",left:"380px",fontWeight:"400"}}>01</h1>
          </div>
         
        </div>

        <div data-aos="zoom-in" style={{width:"60%",margin:"auto",marginTop:'100px'}}>
        <h1 data-aos="zoom-in" style={{opacity:"0.1",fontSize:"200px",zIndex:"1",position:"absolute",top:'-30px',left:"300px",fontWeight:"400",}}>02</h1>
     
          <div v className="project-card" style={{textAlign:"end",borderRight:"2px solid black",marginBottom:"40px"}}>
            <h3 className='support' >App Development</h3>
            <p className='desp'>Developing modern mobile apps for Android and iOS <br />
             systems with a simple, convenient, and attractive interface.</p>
          </div>
        <h1 data-aos="zoom-in" style={{opacity:"0.1",fontSize:"250px",zIndex:"1",position:"absolute",top:"180px",left:"400px",fontWeight:"400"}}>03</h1>

          <div data-aos="zoom-in" className="project-card" style={{textAlign:"start",marginBottom:"40px",borderLeft:'2px solid black'}}>
            <h3 className='support'>Technical Support</h3>
            <p className='desp'>We update text and graphic content on web site, promptly correct <br />
             mistakes, maintain and optimize web site in search engines (SEO).</p>
          </div>
        <h1 data-aos="zoom-in" style={{opacity:"0.1",fontSize:"200px",zIndex:"1",position:"absolute",top:"490px",right:"340px",fontWeight:"400"}}>04</h1>

          <div data-aos="zoom-in" className="project-card" style={{textAlign:"end",borderRight:"2px solid black",marginBottom:'40px'}}>
            <h3 className='support'>Automation</h3>
            <p className='desp'>Introducing software and applications for easy and convenient way of <br />
             process management alongside professional IT solutions.</p>
          </div>
        <h1 data-aos="zoom-in" style={{opacity:"0.1",fontSize:"250px",zIndex:"1",position:"absolute",left:"500px",top:"690px",fontWeight:"400"}}>05</h1>
          <div data-aos="zoom-in" className="project-card" style={{textAlign:"start",borderLeft:"2px solid black"}}>
            <h3 className='support'>Design and Marketing</h3>
            <p className='desp'>Mockups and concepts for offline and online advertising, handouts, <br /> identity development, content-marketing and SMM-consulting.</p>
          </div>
        </div>
      
        </div>
      
        <div className="project-feature2" style={{textAlign:"start",display:"flex",marginTop:"80px",justifyContent:"center"}}>
          <div data-aos="zoom-in">

         <h1 data-aos="zoom-in" style={{textAlign:"center",fontSize:"60px"}}>Development process according to world <br />
          standards.</h1>
       <p data-aos="zoom-in"style={{textAlign:"center"}}>We would love to see as well your company on this worthy list. Quality and timeliness shouldn't even worry you. <br />
       Everything will be amazing!</p>
       <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={()=>{navigate("/contactUs")}}
        style={{backgroundColor:"white",color:"gray",height:"66px",width:"200px",borderRadius:"50px",position:"relative" ,left:"450px",top:"20px"}}
        data-aos="zoom-in"
      >
        Request a call
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div>

        <MenuItem onClick={handleClose}>Profile</MenuItem>
        </div>
        
      </Menu>
          </div>
        </div>
    </section>
    
   <Carousel/>
   <div className="testimonials-section" style={{ marginTop: '100px' }} data-aos="fade-up">
   <h2 style={{ textAlign: 'center', fontSize: '50px', marginBottom: '50px' }}>What our clients say</h2>
   <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <p className="testimonial-text">"{testimonial.text}"</p>
          <h3 className="testimonial-name">{testimonial.name}</h3>
          <h4 className="testimonial-company">{testimonial.company}</h4>
        </div>
      ))}
    </div>
    </div>

  
  <div className="after-carousel-container" style={{marginTop:'50px'}}>
      <div className="after-carousel-bg"></div>
      <div className="after-carousel-content">
        <h2 className="after-carousel-title">Bringing Your Ideas to Life</h2>
        <p className="after-carousel-desc">
          Whether you need a stunning website, a powerful mobile app, or seamless automation, 
          our team of experts is ready to help you achieve your goals. Let's create something extraordinary together.
        </p>
        <Button
          variant="contained"
          className="after-carousel-btn"
          onClick={() => window.location.href = '/contactUs'}
        >
          Start Your Project
        </Button>
      </div>
    </div>
    </div>
    
    </>
  );
}

export default Home;