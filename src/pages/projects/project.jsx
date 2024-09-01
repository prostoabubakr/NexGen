import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './projects.css';
import dastras from '../../assets/images/photo_2024-08-27_11-36-35-removebg-preview.png';
import fikir from '../../assets/images/Screenshot 2024-08-27 093804.png';
import { Button } from '@mui/material';

function Project() {
 

  const handleViewProject = (title) => {
    console.log(`Button clicked for: ${title}`);
    const urls = {
      Samsung: 'https://www.samsung.com',
      Dastras: 'https://www.dastras.com',
      'Fikir Ağacı': 'https://www.fikiragaci.com',
    };

    const url = urls[title] || '#';
    if (url !== '#') {
      window.open(url, '_blank');
    } else {
      console.error(`URL not found for ${title}`);
    }
  };

  return (
    <>
    <div className="swiper-container">
    <Swiper
      direction={'vertical'}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
      >
      <SwiperSlide className="swiper-slide">
      <div className="container1" style={{ backgroundColor: 'lightBlue' }}>
            <main className="main-content">
              <div className="text-section">
                <h1 className="title">Samsung</h1>
                <ul className="description">
                  <li>UI/UX Design</li>
                  <li>Cross Platform Mobile Application</li>
                </ul>
                <button
                  className="project-btn"
                  onClick={() => handleViewProject('Samsung')}
                  
                >
                  View Project
                </button>
              </div>

              <div className="image-section">
                <img
                  src="https://www.lowyat.net/wp-content/uploads/2023/03/Samsung-Link-To-Windows-How-To-Phone-Galaxy-A34-Galaxy-A54-8.jpg"
                  alt="Background"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
                  }}
                  />
                <img
                  src="https://images.samsung.com/is/image/samsung/assets/us/apps/samsung-internet/internet_section_01_kv_mo_202209.jpg?$720_N_JPG$"
                  alt="Mobile"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '5%',
                    width: '200px',
                    height: 'auto',
                    borderRadius: '20px',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
                  }}
                  />
              </div>
            </main>

         
          </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
      <div className="container1">
            <main className="main-content">
              <div className="text-section">
                <h1 className="title">Dastras</h1>
                <ul className="description">
                  <li>UI/UX Design</li>
                  <li>Cross Platform Mobile Application</li>
                </ul>
                <button
                  className="project-btn"
                  onClick={() => handleViewProject('Dastras')}
                  
                  >
                  View Project
                </button>
              </div>

              <div className="image-section">
                <img src={dastras} style={{ width: '900px' }} alt="Dastras" className="phone-left" />
              </div>
            </main>

           
          </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
         <div className="container2">
            <main className="main-content">
              <div className="text-section">
                <h1 className="title">Fikir Ağacı</h1>
                <ul className="description">
                  <li>UI/UX Design</li>
                  <li>Cross Platform Mobile Application</li>
                </ul>
                <button
                  className="project-btn"
                  onClick={() => handleViewProject('Fikir Ağacı')}
                  
                  >
                  View Project
                </button>
              </div>

              <div className="image-section">
                <img src={fikir} style={{ width: '900px' }} alt="Fikir Ağacı" className="phone-left" />
              </div>
            </main>

          
          </div>
      </SwiperSlide>
      
    </Swiper>
  </div>
                  </>
  );
}

export default Project;
