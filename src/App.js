import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/NeumanKlogo.png'
import "font-awesome/css/font-awesome.min.css"
import MintShoes from "./assets/MintShoes.jpg"
import TheViewBar from "./assets/TheViewBar.jpg"

function App(props) {

  const [headerClass, setHeaderClass] = useState('')

  function handleScroll(e) {
    let scrollTop = window.pageYOffset

    if (scrollTop >= 120) {
      setHeaderClass('BlackSize')
    } else {
      setHeaderClass('')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
{/* HEADER */}
      <header className="App-header">
        <div className={"header " + headerClass}>
          <div className="LeftSide">
            <a id="link" href="#">Kaden Neuman</a>
          </div>
          <div className="RightSide">
            <div className="rightSingle">
              <a id="link" href="#Home">
                Home
              </a>
            </div>
            <div className="rightSingle">
              <a id="link" href="#About">
                About
              </a>
            </div>
            <div className="rightSingle">
              <a id="link" href="#Skills">
                Skills
              </a>
            </div>
            <div className="rightSingle">
              <a id="link" href="#Projects">
                Projects
              </a>
            </div>
            <div className="rightSingle">
              <a id="link" href="#Contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>
{/* MAIN PAGE */}
      <main>
        <div id="Home">
          <img  className="LOGO" src={logo}/>
          <div className="JobTitle">
            Front End Developer 
          </div>
          <div className="icons">
            <div className="icon">
              <a id="link" href="#"  target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <div className="icon">
              <a id="link" href="https://github.com/KadenN2019" target="_blank">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
{/* ABOUT ME */}
        <div id="About">
          <div className="Section-T">
            About.
          </div>
          <div className="AboutSec">
            <div className="AboutLeft">
              <div className="quickDes">
                I am a frontend developer with a desire to combine the world of design and code.
              </div>
              <div className="Line"></div>
              <div className="largeDes">
                I am a frontend developer with a background in design. Starting in graphic design and transferring over to engineering makes it so I can bridge the gap between design and development. This has led me to aspire to build functional and efficient coded sites while also giving the best user experience. When I am not coding, I am most likely driving my favorite backroads or taking pictures.
              </div>
            </div>
          
              <img className="AboutImg" src="https://firebasestorage.googleapis.com/v0/b/sports-site-dude.appspot.com/o/DevPics%2FIMG_0599.jpg?alt=media&token=6d2c61b4-6b72-4910-818c-2ab4f6397678"/>
            
          </div>
        </div>
{/* SKILLS */}
        <div id="Skills">
          <div className="Section-T">
            Skills.
          </div>
          <div className="Skill">
            <div className="SkillSet1">
              <div className="title">
                CODE
              </div>
              <div className="Code">
                <div className="classLeft">
                  <div>
                    HTML
                  </div>
                  <div>
                    Javascript
                  </div>
                  <div>
                    React
                  </div>
                  <div>
                    Node.js
                  </div>
                  <div>
                    MySQL
                  </div>
                </div>
                <div className="skillRight">
                  <div>
                    CSS
                  </div>
                  <div>
                    JQuery
                  </div>
                  <div>
                    Redux 
                  </div>
                  <div>
                    Express
                  </div>
                  <div>
                    Github
                  </div>
                </div>
              </div>
            </div>
            <div className="SkillSet2">
              <div className="title">
                DESIGN
              </div>
              <div className="design">
                <div className="classLeft">
                  <div>
                    Illustrator
                  </div>
                  <div>
                    Premiere Pro
                  </div>
                  <div>
                    XD 
                  </div>
                </div>
                <div className="skillRight">
                  <div>
                    Photoshop
                  </div>
                  <div>
                    Lightroom
                  </div>
                  <div>
                    Unreal Engine 4
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
{/* Projects */}
        <div id="Projects">
          Projects.
          <div>
            <div className="ProjectINDV">
              <a className="aClass" href="#" target='_blank' >
                <img src={MintShoes} className='ProjIMG' />
              </a>
              <div className="toggle">
                (Desktop Only)
              </div>
              <div className="ProjDESC">
                <div className="ProjTitle">
                  Mint Shoes
                </div>
                <div className="projDetails">
                  Mint shoes is an e-commerce website that is designed to make finding what your favorite NBA player wears game to game. With this project, I worked with a group of four and had a time frame of two weeks from start to finish, which required the team to divide and conquer on different parts of the project. I worked on the design of the project setting the goals and objectives of each team member. My primary role was the user interface, jsx, and CSS. Other team members worked on the database.
                </div>
                <div className="projCode">
                  <div className="specCode">
                    React
                  </div>
                  <div className="specCode">
                    Redux
                  </div>
                  <div className="specCode">
                    Javascript
                  </div>
                  <div className="specCode">
                    CSS
                  </div>
                  <div className="specCode">
                    MySQL
                  </div>
                </div>
                <div>
                  <a id="link" href="https://github.com/jkhone/sports-site-dude" target="_blank" className="icons">
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="ProjectINDV">
              <a className="aClass" href="kadenneuman.com/TheViewBar" target="_blank">
                <img src={TheViewBar} className="ProjIMG"/>
              </a>
              <div className="toggle">
                (Desktop Only)
              </div>
              <div className="ProjDESC">
                <div  className="ProjTitle">
                  The View Bar
                </div>
                <div className="projDetails">
                  The View Bar is a mock Restaurant. The website demonstrates what can be achieved in native HTML and CSS with little javascript. The menu uses an API to show items with the appropriate icon for allergies and ingredients. 
                </div>
                <div className="projCode">
                  <div className="specCode">
                    HTML
                  </div>
                  <div className="specCode">
                    CSS
                  </div>
                  <div className="specCode">
                    Javascript
                  </div>
                  <div className="specCode">
                    API
                  </div>
                </div>
                <div>
                  <a id="link" href="https://github.com/KadenN2019/TheViewBar" target="_blank" className="icons">
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
{/* CONTACT INFORMATION */}
        <div id="Contact">
          <div>
            <div>
            Contact.
            </div>
            <div className="info">
              <div className="infoSec1">
                <div className="information">
                  <a id="link" href="mailto:kadenn2019@gmail.com">
                    KadenN2019@gmail.com
                  </a>
                </div>
                <div className="information">
                  (702)499-2569
                </div>
              </div>
              <div className="infoSec2">
                <div className="information">
                  <a id="link" href="#"  target="_blank" className="icons">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
                <div className="information">
                  <a id="link" href="https://github.com/KadenN2019" target="_blank" className="icons">
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
