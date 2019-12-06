import React from 'react';
import './App.css';
import logo from './assets/NeumanKlogo.png'
import "font-awesome/css/font-awesome.min.css"

function App() {
  return (
    <div className="App">
{/* HEADER */}
      <header className="App-header">
        <div className="header">
          <div className="LeftSide">
            <a href="#">Kaden Neuman</a>
          </div>
          <div className="RightSide">
            <div className="rightSingle">
              <a href="#Home">
                Home
              </a>
            </div>
            <div className="rightSingle">
              <a href="#About">
                About
              </a>
            </div>
            <div className="rightSingle">
              <a href="#Skills">
                Skills
              </a>
            </div>
            <div className="rightSingle">
              <a href="#Projects">
                Projects
              </a>
            </div>
            <div className="rightSingle">
              <a href="#Contact">
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
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/KadenN2019" target="_blank">
                <i class="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
{/* ABOUT ME */}
        <div id="About">
          <div className="Section-T">
            About.
          </div>
          <div className="quickDes">
            Hello this is me and I like Javascript.
          </div>
          <div className="Line"></div>
          {/* <img></img> */}
          <div className="largeDes">
            Hi this is my bigger Paragraph about how I like Javascript.
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
                    HTML 5
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
                    SQL
                  </div>
                </div>
                <div className="skillRight">
                  <div>
                    CSS 3
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
        </div>
{/* CONTACT INFORMATION */}
        <div id="Contact">
          <div>
            <div>
            Contact.
            </div>
            <div className="info">
              <div className="infoSec">
                <div className="information">
                  <a href="mailto:kadenn2019@gmail.com">
                    KadenN2019@gmail.com
                  </a>
                </div>
                <div className="information">
                  (702)499-2569
                </div>
              </div>
              <div className="infoSec">
                <div className="information">
                  <a className="icons">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </div>
                <div className="information">
                  <a href="https://github.com/KadenN2019" target="_blank" className="icons">
                    <i class="fa fa-github"></i>
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
