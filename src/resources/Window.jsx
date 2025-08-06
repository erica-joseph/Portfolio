// Window.jsx
import React from 'react';


import {About, Resume, Interests, Skills, Projects} from "./Windows";

export default function Window({ id, type, onClose }) {
    
  const content = {
    About: <About />,
    Projects: <Projects />,
    Interests: <Interests />,
    Skills: <Skills />,
    Resume: <Resume />
  }[type];

  const windows = {
    About: <About />,
    Projects: <Projects />,
    Interests: <Interests />,
    Skills: <Skills />,
    Resume: <Resume />
  };
  

  return (
        <div className="outer_window">
          <div className="control_bar">
            <div className="name_window">
              {type}
            </div>
            <div className="exit_window">
              <button className="exit" onClick={onClose}>X </button>
            </div>
          </div>
          <div className="inner_window">
              <div className="content" >
                {content}
              </div>
          </div>
        </div>
  );
}
