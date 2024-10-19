import React, { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './Resume.css'
import lightmode from './Resources/lightmode.png'
import nightmode from './Resources/nightmode.png'
import darkbg from './Resources/darkbg.mp4'
import MyDP from './Resources/MyDP.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import CV from "./Resources/CV.pdf";
import { Link } from 'react-scroll';

const Resume = () => {
  // light and dark mode state
  const [mode, setmode] = useState('light')
  const changemode = () => {
    setmode(mode === 'dark' ? "light" : "dark")
  }
  // toggle menu status
  const [isopen, setisopen] = useState(false)
  const togglemenu = () => {
    setisopen(!isopen)
  }
  const qualification_data = [
    {
      year: "2020",
      institute: "Kendriya Vidyalaya C.R.P.F Durgapur",
      desc: "Completed my Matriculate form K.V C.R.P.F Durgapur. The subjects are Mathamatics, Science, Social Studies, English &Hindi, scoring a total percentage of 95%."
    },
    {
      year: "2022",
      institute: "Kendriya Vidyalaya C.R.P.F Durgapur",
      desc: "Completed my Higher Secondary Education from K.V C.R.P.F Durgapur.The subjects are Physics, Mathematics, Chemistry, English & Computer Science, scoring a total percentage of 93.6%."
    },

    {
      year: "2023-2027",
      institute: "National Institute of Technology Durgapur",
      desc: "Pursuring my B.Tech graduation from N.I.T Durgapur in Electronics and Communication Engineering."
    },
  ]
  const exprience = [
    {
      event: 'SAE NITDGP collegiate club',
      post: "Junior Coordinator",
      year: '2024-2025',

    },
    {
      event: "Smart India Hackathon 2024",
      post: "Team Leader",
      year: "2024",
    },
    {
      event: "Arrohan 2024",
      post: "Community Member",
      year: '2024',
    }
  ]
  const projects = [
    {
      name: "Smart Stick",
      year: "2024",
      desc: "Research paper on Smart stick for blind people."
    },
    {
      name: "SAE NITDGP website",
      year: '2024',
      desc: "Contributed in the website of SAE NITDGP for the year 2024."
    },
    {
      name: 'Wifi bot',
      year: '2023',
      desc: "Created a wifi bot, controlled by a android app using NodeMCU"
    }
  ]
  const skills = ["Python", "C++", "HTML/CSS", "JS", "Django", "React-JS/Node.js"]
  const achievment = [
    {
      name: "Academic Excellence Award",
      by: 'Kendriya Vidyalaya C.R.P.F Durgapur',
      year: '2020 & 2022'
    },
    {
      name: "National Level Painting Competition Runner-Up",
      by: "Lalit Kala Academy with C.A.P.F",
      year: '2021'
    }, {
      name: "State Level Painting Competition Runner-Up",
      by: 'C.G.W.B Ministry of Water Resources',
      year: '2018'
    }
  ]
  const linkedin = 'https://www.linkedin.com/in/sonu-mahata-19325831b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  const instagram = 'https://www.instagram.com/_sm.stark_/profilecard/?igsh=MWNtd2lqMm0zY2N1Nw=='
  const github = "https://github.com/Mr-Cody-77"
  const facebook = "#"
  const [formData, setFormData] = useState({
    Email: '',
    Name: '',
    Message: ''
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwEwK8dJ8ENkuC5lphF_7gZkQXPzLXVXJ490LmkQTjTtGRWNzCIaoN47I9Vk5HHWyIX2Q/exec'; // Add your Google Apps Script URL here

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams(formData),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form.');
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className={mode === 'dark' ? 'container dark' : 'container light'}>
      {/* for light mode background image */}
      <div className={mode === 'light' ? 'bglight' : 'bgdark'}>
        {/* <img src={lightbg} alt="" /> */}
      </div>
      {/* for dark mode background video */}
      <video src={darkbg} autoPlay loop muted></video>
      {/* main container */}
      <section className="maincontent">
        <div className={mode === "light" ? "navbody nlight" : "navbody ndark"}>
          <ul className="navlinks">
            <li><Link to="introcontent" spy={true} smooth={true} offset={-80} duration={500}>Home</Link></li>
            <li><Link to="aboutme" spy={true} smooth={true} offset={-80} duration={500}>About Me</Link></li>
            <li><Link to="qualification" spy={true} smooth={true} offset={-80} duration={500}>Qualification</Link></li>
            <li><Link to="exp-pro" spy={true} smooth={true} offset={-80} duration={500}>Exprience & Projects</Link></li>
            <li><Link to="skills-achievment" spy={true} smooth={true} offset={-80} duration={500}>Skills & Achievments</Link></li>
            <li><Link to="contactme" spy={true} smooth={true} offset={-80} duration={500}>Contact Me</Link></li>
            <img className='modeicon' onClick={changemode} src={mode === "light" ? nightmode : lightmode} alt="" />
          </ul>
          <div className={mode === "light" ? "hamburger hlight" : "hamburger hdark"}>
            <div>
              <img className='modeicon' onClick={changemode} src={mode === "light" ? nightmode : lightmode} alt="" />
            </div>
            <div className={mode === 'light' ? "togglemenu tlight" : "togglemenu tdark"}>
              <div className={mode === 'light' ? "icon" : "icon idark"} onClick={togglemenu}>
                <div className={isopen ? "lines line1open" : "lines line1"}></div>
                <div className={isopen ? "lines line2open" : "lines line2"}></div>
                <div className={isopen ? "lines line3open" : "lines line3"}></div>
              </div>
              <div className={isopen ? "togglenav tactive" : "togglenav"} id={mode === 'light' ? "togglenav" : "togglenav-dark"}>
                <ul>
                  <li><Link to="introcontent" spy={true} smooth={true} offset={-80} duration={500}>Home</Link></li>
                  <li><Link to="aboutme" spy={true} smooth={true} offset={-80} duration={500}>About Me</Link></li>
                  <li><Link to="qualification" spy={true} smooth={true} offset={-80} duration={500}>Qualification</Link></li>
                  <li><Link to="exp-pro" spy={true} smooth={true} offset={-80} duration={500}>Exprience & Projects</Link></li>
                  <li><Link to="skills-achievment" spy={true} smooth={true} offset={-80} duration={500}>Skills & Achievments</Link></li>
                  <li><Link to="contactme" spy={true} smooth={true} offset={-80} duration={500}>Contact Me</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="intro">
          <div className={mode === 'light' ? 'introcontent ilight' : 'introcontent introdark'}>
            <img className='DP' src={MyDP} alt="" />
            <div className='mydesc'>
              <h1><span>Hello! </span>I'm</h1>
              <h1>Sonu Mahata / <span><Typewriter
                words={['Developer', 'NITian']}
                loop={Infinity}
                cursor
                cursorStyle='_'
                typeSpeed={120}
                deleteSpeed={80}
                delaySpeed={1000}
              /></span></h1>
              <p>B.Tech in E.C.E</p>
              <p>Email:-sonu77mahata@gmail.com</p>
              <p>Phone No. :-8597542886</p>
              <p>Address :- Hall-14, NITDGP</p>
            </div>
          </div>
          <div className={mode === 'light' ? 'introfooter' : 'introfooter fdark'}>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        {/* about myself */}
        <div className="aboutme">
          <h1>About Me</h1>
          <p>Hi, I am <span style={mode === 'light' ? { color: 'blue', fontSize: '1.2em' } : { color: 'yellow', fontSize: '1.2em' }}> Sonu Mahata</span>, pursuing my graduation in technology from <span style={mode === 'light' ? { color: 'blue', fontSize: '1.2em' } : { color: 'yellow', fontSize: '1.2em' }}>NATIONAL INSTITUTE OF TECHNOLOGY DURGAPUR</span>  IN E.C.E . I a dedicated student with a passion for technology and a stronf commitment to personal and professioin growth. Known for a kind and empathetic nature, I strive to create a positive enviroment in collaborative settings. I prioritize focus and mindfulness in my work, always seeking to enhance my skills and contribute meaningfully to projects, Eager to leverage my technical knowledge and interpersonal skills in a dynamic work enviroment. </p>
          <div className="spec">
            <p><span>Field of Interest :-</span> Robotics and Automation, Internet of Things, Mechtronics</p>
            <p><span>Language Known :-</span> English, Hindi, Bengali</p>
            <p><span>hobbies :-</span> Web Development, Painting, Playing Guitar</p>
          </div>

        </div>
        {/* For my qualifications */}
        <div className="qualification">
          <h1 id='qhead'>Qualification</h1>
          {qualification_data.map(data => (
            <div className='timeline'>
              <div className="dot">
                <div></div>
              </div>
              <div className={mode === 'light' ? 'items' : 'items tdark'}>
                <h4>{data.year}</h4>
                <h3>{data.institute}</h3>
                <p>{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* for exprience and projects */}
        <div className={mode === 'light' ? "exp-pro" : 'exp-pro epdark'}>
          <div className="exprience">
            <h2>Exprience</h2>
            {exprience.map(data => (
              <div className="item">
                <h3>{data.event}</h3>
                <p>{data.post},   ({data.year})</p>
              </div>
            ))}
          </div>
          <div className="projects">
            <h2>Projects</h2>
            {projects.map(data => (
              <div className="item">
                <h3>{data.name},   {data.year}</h3>
                <p>{data.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* For skills and acheivement */}
        <div className="skills-achievment">
          <div className="skills">
            <h2>Technical Skills</h2>
            <ul className='item'>
              {skills.map(data => (
                <li>{data}</li>
              ))}
            </ul>
          </div>
          <div className="achievment">
            <h2>Achievments</h2>
            <ul>
              {achievment.map(data => (
                <div>
                  <li>{data.name}, {data.year}</li>
                  <p>By, {data.by}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className={mode === 'light' ? 'contactme' : 'contactme'}>
          <form className='form' onSubmit={handleSubmit}>
            <h2>Contact Me</h2>
            <p>
              Email:
            </p>
            <input type="email" name="Email" value={formData.Email} onChange={handleChange} required="True" />
            <p>
              Name:
            </p>
            <input type="text" name="Name" value={formData.Name} onChange={handleChange} required="True"/>
            <p>
              Message:
            </p>
            <textarea name="Message" value={formData.Message} onChange={handleChange} required></textarea>
            <button type="submit">Submit</button>
          </form>
          <div className="social">
            <div>
              <h4>My Social Media handles</h4>
              <div className="icons">
                <a href={facebook} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
            <div className={mode === 'light' ? "CV" : "CV cvdark"}>
              <h4>View/Download My CV</h4>
              <a href={CV} download={CV}>Download</a>

            </div>

          </div>
        </div>
        <div className="footer">
          <p>&copy; 2024 Created and Managed by Sonu Mahata.</p>
        </div>
      </section>
    </div>
  )
}

export default Resume

