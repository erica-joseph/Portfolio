import React, { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import desktop_image from './assets/Desktop_Image.png';
import desktop_folder from './assets/Desktop_Folder.png';
import desktop_doc from './assets/Desktop_Doc.png';

import menu_background from './assets/Menu.png';

import toolbar_image from './assets/Toolbar.png';

import window_inner from './assets/Inner_Window.png';
import window_outer from './assets/Outer_Window.png';

import './Style/App.css'



import {About, Resume, Interests, Skills, Projects} from "./Windows";
import Window from './Window'; 

const GRID_VW = 20; // each grid cell is 5vw wide
const GRID_VH = 20; // each grid cell is 5vh tall
let idCounter = 0; 

const timestamp = new Date();

function App() {



  {/* map of desktop icons*/}
  const icons = [
    {img: desktop_doc, name: "About"},
    {img: desktop_doc, name: "Resume"},
    {img: desktop_folder, name: "Projects"},
    {img: desktop_image, name: "Interests"},
    {img: desktop_folder, name: "Skills"}
  ];

  {/*Windows*/}
{/*  const openWindows = ["About", "Resume", "Projects", "Interests", "Skills"];*/}

 {/* const openWindows = ["About", "Resume"];*/}


  const windows = {
    About: <About />,
    Projects: <Projects />,
    Interests: <Interests />,
    Skills: <Skills />,
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
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const displayMenu = () =>{

  }

  const [isVisible, setIsVisible] = useState(false);

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
                <img className="desktop_icon_svg" src={icon.img} />
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
        
        
          {isVisible && (
          <div className="menu" style={{backgroundImage: `url(${menu_background})`}}>
          <div className="menu_title">Contact Me!</div>
          <a href="https://www.linkedin.com/in/erica-joseph-93b3501b1/" target = "_blank"><div className="menu_button">LinkedIn</div></a>
          <a href="https://github.com/erica-joseph" target = "_blank"><div className="menu_button">Github</div></a>
          <a href="mailto:ericagjoseph@outlook.com" target = "_blank"><div className="menu_button">e-mail</div></a>
           </div>
          )}
       

          <div className="toolbar_base" style={{backgroundImage: `url(${toolbar_image})`}}>
            <div className="toolbar_logo" onClick={() => setIsVisible(prev => !prev)}>
              
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
            {time.toLocaleTimeString()} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
