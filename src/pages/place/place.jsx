import React, { useEffect, useState } from 'react'
import Ymap from '../../components/yandexMap/yandexMap'
import { useNavigate } from 'react-router-dom';
import "./place.css"
function Place() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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
    <div>
   
      <h1 style={{fontSize:"70px",textAlign:'center'}}>Our Location !</h1>
        <Ymap/>
    </div>
  )
}

export default Place