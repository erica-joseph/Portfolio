import React, { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import desktop_image from './assets/Desktop_Image.png';
import desktop_folder from './assets/Desktop_Folder.png';
import desktop_doc from './assets/Desktop_Doc.png';

import projects_icon from './assets/Projects_File.png';

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
              
              <svg className="logo_image" xmlns="http://www.w3.org/2000/svg" id="a" data-name="Layer 1" viewBox="0 0 165.997537 213.288789">
            <path d="M74.267557,85.825333l-.940002.940002-.360046-.369995c.429993-.190002.869995-.380005,1.300049-.570007Z" fill="#fff"></path>
            <path d="M84.457559,75.63533c19.859985-8.47998,37.969971-20.789978,53.669983-35.700012,4.549988-4.279968,8.869995-8.809998,13.099976-13.440002-3.940002,4.869995-8,9.660034-12.309998,14.22998-12.969971,13.790039-27.709961,25.880005-44.299988,35.210022-6.530029,3.72998-13.429993,6.869995-20.349976,9.890015-.430054.190002-.870056.380005-1.300049.570007-4.219971,1.829956-8.429993,3.630005-12.549988,5.51001-10.98999,5.009949-20.98999,11.579956-28.349976,21.129944,0,0-.02002-.019958-.070007-.059998-2.190002,3.240051-4,6.75-5.330017,10.570007-6.369995,18.309998-3.059998,40.200012,10.960022,54.23999,22.149963,22.970032,61.149963,19.390015,79.339966-6.849976,5.990051-8.429993,9.990051-18.710022,10.360046-29.26001,0,0-.25,0,0,0s0,0,0,0c1.099976,50.590027-58.559998,76.130005-95.26001,41.820007-24.400024-22.349976-25.940002-62.969971.829956-84.179993,4.310059-3.530029,9.100037-6.419983,14.150024-8.76001l8.202885-4.198049c-11.273063-3.614593-21.020093-12.235896-25.892888-23.211925-7.890015-17.350037-2.679993-37.75,10.919983-50.630005C64.777506-10.704697,105.237528-.244675,114.17753,32.585342c1.039978,4.119995.890015,8.349976.799988,12.529968,0,0,.25,0,0,0s0,0,0,0c-.450012-8.109985-3.649963-15.98999-8.380005-22.529968C85.547525-6.024704,39.597513,4.375321,36.127542,40.575333c-.354248,15.520935,7.901855,29.413818,20.756653,35.123688,12.783417,5.678146,24.998077.991226,27.573364-.06369Z" fill="#fff"></path>
            <path d="M153.247537,51.705338c2.432312-2.222626,4.878784-4.493195,7.337189-6.812469,1.831696-1.728027,3.635895-3.450867,5.412811-5.167572,0,0-.001197.001707-.003574.005094-12.2557,17.461392-18.921119,38.251951-19.027103,59.584817-.021952,4.418475-.069873,8.830289-.149315,13.230096-.480042,13.730042.539978,32.280029-2.650024,45.75-1.25,5.77002-3.320007,11.600037-6.22998,16.780029l-1.419983,2.609985-1.640015,2.47998c-21.730042,33.140015-69.590027,43.25-103,21.910034-36.150024-22.200012-42.410034-72-14.380005-103.350037,5.200012-5.75,18.770004-13.653305,18.770004-13.653305C-.372473,114.321991-.992453,167.485306,35.587503,196.765335c20.690002,16.589966,49.300049,17.899963,71.480042,3.349976,15.049988-9.700012,25.669983-25.880005,28.570007-43.5,1.820007-10.099976,1.209961-22.299988.959961-32.779968-.165718-8.083752-.275113-16.237215-.317081-24.399292-.05217-10.146178-10.97926-16.499838-19.802894-11.490734l-.00002.000011c-9.799988,4.719971-33.51001,12.710022-35.01001,13.210022-12.919983,4.279968-25.199951,10.429993-34.539978,20.589966,8.190002-11.210022,20.330017-19.059998,32.830017-24.75.563446-.256485,1.20575-.564545,2.5-1.159973,13.263092-4.670364,29.916168-12.12973,47.182617-24.295166,9.416077-6.634293,17.303558-13.462631,23.807373-19.834839" fill="#fff"></path>
          </svg>
          
            </div>
            <div className="toolbar_tabs">
              {openTabs.map(({ id, type }) => (
              <div className="toolbar_tab" key={id}>
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
