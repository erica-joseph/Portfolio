import React, { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {About, Resume, Interests, Contacts, Projects} from "./resources/Windows";
import Window from './resources/Window'; 

const GRID_VW = 20; // each grid cell is 5vw wide
const GRID_VH = 20; // each grid cell is 5vh tall
let idCounter = 0; 

function App() {
  {/* map of desktop icons*/}
  const icons = [
    {img: "img.png", name: "About"},
    {img: "img.png", name: "Resume"},
    {img: "img.png", name: "Projects"},
    {img: "img.png", name: "Interests"},
    {img: "img.png", name: "Contacts"}
  ];


  {/*Windows*/}
{/*  const openWindows = ["About", "Resume", "Projects", "Interests", "Contacts"];*/}

 {/* const openWindows = ["About", "Resume"];*/}


  const windows = {
    About: <About />,
    Projects: <Projects />,
    Interests: <Interests />,
    Contacts: <Contacts />,
    Resume: <Resume />
  };

  const [openWindows, setOpenWindows] = useState([]);

  const [openTabs, setOpenTabs] = useState([]);
  
  

  const openNewWindow = (type) => {
    setOpenWindows([...openWindows, { id: idCounter++, type }]);
    setOpenTabs([...openTabs, { id: idCounter++, type }]);
  };

  const closeWindow = (idToRemove) => {
    setOpenWindows(openWindows.filter(win => win.id !== idToRemove));
    setOpenTabs(openWindows.filter(tab => tab.id !== idToRemove));
  };

  const openWindow = (type) => {
    setOpenWindows([...openWindows, type]);
  };

  const handleOpen = (name) => {
    setOpenWindows(prev => [...prev, name]);
  };


  {/*Buttons*/}
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
            <div className="desktop_icon" key={index} onClick={() => openNewWindow(icon.name)}>
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


        {openWindows.map(({ id, type }) => (
          <Window key={id} id={id} type={type} onClose={() => closeWindow(id)} />
        ))}


        </div>

        {/* second layer of popups */}
        <div className="popupTwo">
          <h1>POPUP TWO</h1>
        </div>

        {/* the toolbar */}
        <div className="toolbar">
          <div className="toolbar_base">
            <div className="toolbar_logo">
              logo
            </div>
            <div className="toolbar_tabs">
              {openTabs.map(({ id, type }) => (
              <div className="toolbar_tab">
              {type}
              </div>
              ))}
            </div>
            <div className="toolbar_time">
              time
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
