// Window.jsx
import React from 'react';

import window_inner from './assets/Inner_Window.png';
import window_outer from './assets/Outer_Window.png';

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
        <div className="outer_window" style={{backgroundImage: `url(${window_outer})`}}>
          <div className="control_bar">
            <div className="name_window">
              {type}
            </div>
            <div className="exit_window">
              <div className="exit" onClick={onClose}>
                X
              </div>
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
