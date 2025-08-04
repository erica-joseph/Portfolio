import React, { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {About, Resume} from "./resources/Windows";

const GRID_VW = 20; // each grid cell is 5vw wide
const GRID_VH = 20; // each grid cell is 5vh tall

function App() {
  {/* map of desktop icons*/}
  const icons = [
    {img: "img.png", name: "About"},
    {img: "img.png", name: "Resume"},
    {img: "img.png", name: "Projects"},
    {img: "img.png", name: "Interests"},
    {img: "img.png", name: "Contacts"}
  ];

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="page">
      <div className="ui-container">
        {/* stacked screens */}
        {/* background */}
        <div className="background">
          <h1>BACKGROUND</h1>
        </div>
        
        {/* desktop icons */}
        <div className="icons">
        {icons.map((icon, index) => (
            <div className="desktop_icon" key={index} >
              <div className="icon">
                <img src={icon.img}></img>
              </div>
              <div className="name">
                {icon.name}
              </div>            
            </div>
        ))}
        </div>

        {/* first layer of popups */}
        <div className="popupOne">
        {/* popup windows*/}
        <button className="buttons" id="new_window" onClick={handleClick}>Hey</button>
        <div className="outer_window">
          <div className="control_bar">
          <div className="name_window">
            Hello!
          </div>
          <div className="exit_window">
            X
          </div>
          </div>
          <div className="inner_window">
            <div className="content">
              <About/>
            </div>
          </div>
        </div>
              
        </div>

        {/* second layer of popups */}
        <div className="popupTwo">
          <h1>POPUP TWO</h1>
        </div>

        {/* the toolbar */}
        <div className="toolbar">
          <h1>TOOLBAR</h1>
        </div>
      </div>
    </div>
  );
}

export default App
