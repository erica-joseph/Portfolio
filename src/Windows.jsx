import React, { useState, useEffect, useRef } from 'react';

import projects_icon from './assets/Projects_File.png';

import dandi_1 from './assets/Images/Dandi_01.gif';
import dandi_2 from './assets/Images/Dandi_02.png';
import dandi_3 from './assets/Images/Dandi_03.png';
import inari_1 from './assets/Images/Inari_01.png';
import inari_2 from './assets/Images/Inari_02.png';
import inari_3 from './assets/Images/Inari_03.png';
import pal_1 from './assets/Images/Pal_01.png';
import pal_2 from './assets/Images/Pal_02.png';
import pal_3 from './assets/Images/Pal_03.png';
import pal_4 from './assets/Images/Pal_04.png';
import pal_5 from './assets/Images/Pal_05.png';

import TypewriterTitle from './Typewriter';

export function About() {
  return(
    <>
    <div className="titleAbout"> 
    <TypewriterTitle text="About Me" speed={80} />
    </div>
    <div className="bodyAbout"> 
<p>My name is Erica Joseph, and I'm a Computer Engineering graduate from the University of Central Florida (May 2025,  BS.)</p>
<p>I began my journey at UCF in Fall 2019, originally in Photonics. But after exploring Electrical Engineering and Computer Science, I found my passion in Computer Engineering. Early coursework in C programming taught me foundational concepts in software architecture, dynamic data handling, and good coding practices - skills that naturally led me into embedded systems. Programming microcontrollers like the MSP-EXP430G2ET and exploring complex systems deepened my interest in low-level computing.</p>
<p>Courses like Digital Systems and Computer Architecture expanded my understanding of logic design and the layers of abstraction beneath modern computing. Learning Verilog, exploring MIPS architecture, and analyzing memory management all helped demystify the "black box" of computers. Toward the end of my program, I took courses in AI and Machine Learning, including Algorithms for ML, where I studied CNNs and the math behind modern AI models.</p>
<p>Outside the classroom, I had the opportunity to intern at Siemens Energy as part of a multidisciplinary team spanning Data Science and Electrical Engineering. There, I worked on high-impact projects like modernizing legacy systems written in Visual Basic - skills I had fortunately gained in college. I also contributed to a data sourcing initiative using ethical web scraping and database comparison to support internal analytics.</p>
<p>This internship sharpened both my technical and interpersonal skills. I learned the value of communication, collaboration, and trust in professional settings - lessons I carry with me as I look ahead.</p>
<p>I'm now eager to launch my career with a company that values integrity and innovation. I'm especially passionate about Embedded Systems, Computer Architecture, and Software Development, and I look forward to bringing my experience and enthusiasm to the next chapter.</p>
<p>Thank you for your time,</p>
<p>Erica Joseph</p>
    </div>
    </>
  )
}

export function Resume() {
  return(
    <>
    <div className="resume">
    
    <TypewriterTitle text="Erica Joseph" speed={80} />	         							      
    <p stle = {{textAlign: 'right'}}>Orlando, Florida </p>
    | 
    <a href = "https://www.linkedin.com/in/erica-joseph-93b3501b1" target = "_blank" style = {{color: "black", textAlign: 'right' }}> LinkedIn </a>
    |
    <a href="https://github.com/erica-joseph" target = "_blank" style = {{color: "black"}}> Github </a>
    |
    <a href="mailto:ericagjoseph@outlook.com" target = "_blank" style = {{color: "black"}}> e-mail</a>
     

    <hr></hr>

    
    <i>
    Computer Engineering graduate from the University of Central Florida (B.S. '25) with hands-on experience in embedded systems, hardware/software co-design, and full stack development. 
    </i>
    

    
    <h2>
    Education
    </h2>

    <h3>
    Bachelor of Science in Computer Engineering (BSCpE)
    </h3>

    <i>University of Central Florida</i> - May 2025
    

    
    Relevant Coursework: 
    

    
    <ul>
      <li>   Object Oriented Programming, Data Structures and Algorithms, Discrete Applications, Computer Organization & Architecture, Full Stack Application Development </li>
      <li>   Embedded Systems, Linear Circuits, Digital Systems, Electric Machinery, Linear Control Systems, PCB (Printed Circuit Board) Design, Electronic Design Automation (EDA)</li>
    </ul>
    

    
    <h2>
    Work Experience
    </h2>

    <h3>
    Computer Science Intern
    </h3>

    <i>Siemens Energy</i> - Feb 2022 to Jan 2023
    

    
    Projects: 
    

    
    <ul>
      <li>   CVE Data Scraping: Provided insight by performing studies expanding on algorithmic patterns, improving
    computational models for future applications, including data scraping, aggregation and application development
    Siemens Energy over 10 million dollars. Initiated steps to add filtering allowing for more efficient collection</li>
    <li>&emsp;&emsp;   Spearheaded innovation on data acquisition to devise new methods of recognizing data frames and templates for
    dynamic search patterns observations with tools such as HTML/CSS, increasing accuracy of scraping process by
    25%
    </li>
    <li>   CVE Order Automation: Restructured cost value models, enhancing efficiency and saving the company around 4 million dollars. Project required extensive knowledge in Visual Basic.</li>
    <li>&emsp;&emsp;   Refreshed automation systems while maintaining a clean, intuitive UX; collaborated with cross-functional teams
    including engineers and designers to reverse engineer a legacy application, increasing operational efficiency by
    40% and aligning interfaces with modern industry standards</li>
    <li>&emsp;&emsp;   Designed and presented two data-driven projects to 3 stakeholders and professionals at Siemens Energy,
    highlighting research insights. Demonstrated technical methods using Pandas and Jupyter Notebook to
    ensure a clean, collaborative workflow and reproducible analysis</li>
    </ul>
    

    
    <h2>
    Skills
    </h2>

    <ul>
      <li><b>   Programming Languages:</b> Java, Python, C++, C, Verilog, MIPS, RTL, ModelSim, VivadoSynopsys VCS</li>
      <li><b>   Tools & Technologies:</b> Figma, Visual Basic, Microsoft Excel, PCB Fabrication, Microcontroller Development, MongoDB, Microsoft Azure, Amazon Web Services, Agile/Scrum, RTOS, Embedded Systems, Git</li>
      <li><b>   Concepts: </b> Software Design Patterns, API Integration, Simulation Development, Real-Time Systems</li>
    <li><b>   Interpersonal: </b>  Problem-solver, communication, leadership, teamwork</li>
    </ul>
    

    
    <h2>
    Projects
    </h2>

    <h3>
    Hermes: Real-Time Data Acquisition Module for BESS-BMS (2024 - 2025)
    </h3>
    

    
    Hermes is a module designed to facilitate real-time data delivery from a BESS-BMS: 
    

    
    <ul>
    <li>   Led final project, observed and contributed to all parts. Practiced skills in communication, organization and
    collaboration</li>
    <li>   Developed Hermes, a module designed to facilitate real-time data delivery from a BESS-BMS using tools such as
    C++, and Arduino
    </li>
    <li>   Created a Data Simulator developed through PySide to generate data functioning as a BESS-BMS. Employed tools
    such as Python and Arduino IDE
    </li>
    <li>   Designed and assembled a grid of ESP32 development boards were configured for 4 way communication to pass on
    data, as well as process it by calculating averages
    </li>
    <li>   Integrated Cloud configured to gather data and generate a KPI report using IoT Core and AWS</li>
    <li>   Maximized outputs of system by integrating clever design loops in terms of pathing for each node</li>
    </ul>
    

    
    <h2>
    Organizations
    </h2>

    <ul>
      <li>   KnightHacks (2023-2025) - Graphic Design Team</li>
      <li>   Society of Women in Space Exploration (2025)</li>
    </ul>
    
  </div>
    </>
  )
}

export function Interests() {

  const cardinal = 0;

  const images = [
    {img: dandi_1, name: "Dandi - First Photoshoot_Animated"},
    {img: dandi_2, name: "Dandi - First Photoshoot_01"},
    {img: dandi_3, name: "Dandi - First Photoshoot_02"},
    {img: inari_1, name: "Inari - City_01"},
    {img: inari_2, name: "Inari - City_02"},
    {img: inari_3, name: "Inari - Sunny_01"},
    {img: pal_1, name: "Soft Pals"},
    {img: pal_2, name: "Soft Pals"},
    {img: pal_3, name: "Soft Pals"},
    {img: pal_4, name: "Soft Pals"},
    {img: pal_5, name: "Soft Pals"}
  ];

  const [index, setIndex] = useState(0);

  const [openGallery, setGallery] = useState([]);

  const openLeft = () => {
    if(index > 0){
    setIndex((prevIndex) => (prevIndex - 1) % images.length);
    }
  };

  const openRight = () => {
    
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
    
  };
  return(
    <>
    <div className="gallery_container">
    
      <div className="gallery">
     
        <div className="gallery_image">
        <img className = "gallery_png" src={images[index].img}/>
        </div>
        <div className="gallery_controls">
          <div className="gallery_left" onClick={openLeft}>
          ◄
          </div>
          <div className="gallery_title">
            {images[index].name}.png
          </div>
          <div className="gallery_right" onClick={openRight}>
          ►
          </div>
          
        </div>
      
      </div>
 
    </div>
    </>
  )
}

export function Projects() {
  
  const files = [
    {name: "Hermes", link: "https://drive.google.com/file/d/1QGFWM-8CS6bdBOJYdDsZfPe2NkEjnTkK/view?usp=sharing"},
    {name: "Portfolio", link: "https://github.com/erica-joseph/erica-joseph"},
    {name: "Quine-McCluskey", link: "https://github.com/erica-joseph/Quine-McCluskey"},
    {name: "Obento", link: "https://github.com/erica-joseph/Obento"},
    {name: "Tuesday", link: "https://github.com/erica-joseph/Tuesday"}
  ];

  return(
    <>
    <div className="file_container">
      <div className="files">
      {files.map((file, index) => (
      <div className="file" key={file.name}>
        <a href={file.link} target="_blank">
        <div className="file_icon">
          <img className="file_icon_png" src={projects_icon}/>
        </div>
        </a>
        <div className="file_name">
          {file.name}
        </div>
      </div>
      ))}
      </div>
    </div>
    </>
  )
}

export function Skills() {

  const skills = [
    {img: "img.png", name: "C", details: "Intermediate"},
    {img: "img.png", name: "C++", details: "Intermediate"},
    {img: "img.png", name: "Java", details: "Intermediate"},
    {img: "img.png", name: "Python", details: "Intermediate"},
    {img: "img.png", name: "MIPS", details: "Intermediate"},
    {img: "img.png", name: "Verilog", details: "Intermediate"},
    {img: "img.png", name: "HTML", details: "Intermediate"},
    {img: "img.png", name: "CSS", details: "Intermediate"},
    {img: "img.png", name: "React", details: "Intermediate"},
    {img: "img.png", name: "Agile", details: "Intermediate"},
    {img: "img.png", name: "Scrum", details: "Intermediate"}
  ]

  return(
    <>
    <div className="skills_container">
    {skills.map((skills, index) => (
    <div className="skill_line" key={index}>
      <div className="skill_icon">
        <img className="skills_icon_png" src={projects_icon}/>
      </div>
      <div className="skill_name">
        {skills.name}
      </div>
      <div className="skill_details">
        {skills.details}
      </div>
    </div>
    ))}
    </div>
    </>
  )
}