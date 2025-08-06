import React, { useState, useEffect, useRef } from 'react';


export function About() {
  return(
    <>
    <div className="titleAbout"> 
    About Me 
    </div>
    <div className="bodyAbout"> 
      
    My name is Erica Joseph, and I'm a Computer Engineering graduate from the University of Central Florida (May 2025,  BS.)
    I began my journey at UCF in Fall 2019, originally in Photonics. But after exploring Electrical Engineering and Computer Science, I found my passion in Computer Engineering. Early coursework in C programming taught me foundational concepts in software architecture, dynamic data handling, and good coding practices - skills that naturally led me into embedded systems. Programming microcontrollers like the MSP-EXP430G2ET and exploring complex systems deepened my interest in low-level computing.
    Courses like Digital Systems and Computer Architecture expanded my understanding of logic design and the layers of abstraction beneath modern computing. Learning Verilog, exploring MIPS architecture, and analyzing memory management all helped demystify the "black box" of computers. Toward the end of my program, I took courses in AI and Machine Learning, including Algorithms for ML, where I studied CNNs and the math behind modern AI models.
    Outside the classroom, I had the opportunity to intern at Siemens Energy as part of a multidisciplinary team spanning Data Science and Electrical Engineering. There, I worked on high-impact projects like modernizing legacy systems written in Visual Basic - skills I had fortunately gained in college. I also contributed to a data sourcing initiative using ethical web scraping and database comparison to support internal analytics.
    This internship sharpened both my technical and interpersonal skills. I learned the value of communication, collaboration, and trust in professional settings - lessons I carry with me as I look ahead.
    I'm now eager to launch my career with a company that values integrity and innovation. I'm especially passionate about Embedded Systems, Computer Architecture, and Software Development, and I look forward to bringing my experience and enthusiasm to the next chapter.
    Thank you for your time,
    Erica Joseph    
    
    </div>
    </>
  )
}

export function Resume() {
  return(
    <>
    <div className="resume">
    
    <h1>Erica Joseph</h1>		         							      
    <left>Orlando, Florida </left>
    | 
    <right><a href = "https://www.linkedin.com/in/erica-joseph-93b3501b1"> LinkedIn </a></right>
    |
    <a href="https://github.com/erica-joseph"> Github </a>
    |
    <a href="mailto:ericagjoseph@outlook.com" target = "_blank" > e-mail</a>
     

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
      <li>•   Object Oriented Programming, Data Structures and Algorithms, Discrete Applications, Computer Organization & Architecture, Full Stack Application Development </li>
      <li>•   Embedded Systems, Linear Circuits, Digital Systems, Electric Machinery, Linear Control Systems, PCB (Printed Circuit Board) Design, Electronic Design Automation (EDA)</li>
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
      <li>•   CVE Data Scraping: Provided insight by performing studies expanding on algorithmic patterns, improving
    computational models for future applications, including data scraping, aggregation and application development
    Siemens Energy over 10 million dollars. Initiated steps to add filtering allowing for more efficient collection</li>
    <li>&emsp;&emsp;•   Spearheaded innovation on data acquisition to devise new methods of recognizing data frames and templates for
    dynamic search patterns observations with tools such as HTML/CSS, increasing accuracy of scraping process by
    25%
    </li>
    <li>•   CVE Order Automation: Restructured cost value models, enhancing efficiency and saving the company around 4 million dollars. Project required extensive knowledge in Visual Basic.</li>
    <li>&emsp;&emsp;•   Refreshed automation systems while maintaining a clean, intuitive UX; collaborated with cross-functional teams
    including engineers and designers to reverse engineer a legacy application, increasing operational efficiency by
    40% and aligning interfaces with modern industry standards</li>
    <li>&emsp;&emsp;•   Designed and presented two data-driven projects to 3 stakeholders and professionals at Siemens Energy,
    highlighting research insights. Demonstrated technical methods using Pandas and Jupyter Notebook to
    ensure a clean, collaborative workflow and reproducible analysis</li>
    </ul>
    

    
    <h2>
    Skills
    </h2>

    <ul>
      <li><b>•   Programming Languages:</b> Java, Python, C++, C, Verilog, MIPS, RTL, ModelSim, VivadoSynopsys VCS</li>
      <li><b>•   Tools & Technologies:</b> Figma, Visual Basic, Microsoft Excel, PCB Fabrication, Microcontroller Development, MongoDB, Microsoft Azure, Amazon Web Services, Agile/Scrum, RTOS, Embedded Systems, Git</li>
      <li><b>•   Concepts: </b> Software Design Patterns, API Integration, Simulation Development, Real-Time Systems</li>
    <li><b>•   Interpersonal: </b>  Problem-solver, communication, leadership, teamwork</li>
    </ul>
    

    
    <h2>
    Projects
    </h2>

    <h3>
    Hermes: Real-Time Data Acquisition Module for BESS-BMS (2024 - 2025)
    </h3>
    

    
    Hermes is a module designed to facilitate real-time data delivery from a BESS-BMS: 
    

    
    <ul>
    <li>•   Led final project, observed and contributed to all parts. Practiced skills in communication, organization and
    collaboration</li>
    <li>•   Developed Hermes, a module designed to facilitate real-time data delivery from a BESS-BMS using tools such as
    C++, and Arduino
    </li>
    <li>•   Created a Data Simulator developed through PySide to generate data functioning as a BESS-BMS. Employed tools
    such as Python and Arduino IDE
    </li>
    <li>•   Designed and assembled a grid of ESP32 development boards were configured for 4 way communication to pass on
    data, as well as process it by calculating averages
    </li>
    <li>•   Integrated Cloud configured to gather data and generate a KPI report using IoT Core and AWS</li>
    <li>•   Maximized outputs of system by integrating clever design loops in terms of pathing for each node</li>
    </ul>
    

    
    <h2>
    Organizations
    </h2>

    <ul>
      <li>•   KnightHacks (2023-2025) - Graphic Design Team</li>
      <li>•   Society of Women in Space Exploration (2025)</li>
    </ul>
    
  </div>
    </>
  )
}

export function Interests() {

  const cardinal = 0;

  const images = [
    {img: "img.png", name: "Dandi"},
    {img: "img.png", name: "Inari"},
    {img: "img.png", name: "Pals"},
    {img: "img.png", name: "Juicebox"},
    {img: "img.png", name: "Candy"}
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
        <img src={images[index].img}/>
        </div>
        <div className="gallery_controls">
          <div className="gallery_left" onClick={openLeft}>
          ◄
          </div>
          <div className="gallery_title">
            {images[index].name}
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
    {img: "img.png", name: "Hermes"},
    {img: "img.png", name: "Portfolio"},
    {img: "img.png", name: "Quine-McCluskey"},
    {img: "img.png", name: "Obento"},
    {img: "img.png", name: "Tuesday"}
  ];

  return(
    <>
    <div className="file_container">
      <div className="files">
      {files.map((file, index) => (
      <div className="file">
        <div className="file_icon">
          <img src={file.img}/>
        </div>

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

export function Contacts() {
  return(
    <h1> Contacts </h1>
  )
}