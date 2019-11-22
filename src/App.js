import React from 'react';
import './App.css';
// import "font-awesome/css/font-awesome.min.css"

function App() {
  return (
    <div className="App">
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
      <main>

        <div id="Home">
          <div className="LOGO">
            <img src={'/ICON-01.png)'}/>
          </div>
          <div className="JobTitle">
            Front End Developer
          </div>
          <div className="icons">
            <div className="icon">
              {/* <i class=" fa fa-github"></i> */}
              github
            </div>
            <div className="icon">
              LinkedIn
            </div>
          </div>
        </div>

        <div id="About">
          <div>
            About.
          </div>
        </div>

        <div id="Skills">

          <div>
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
                    Adobe Illustrator
                  </div>
                  <div>
                    Adobe Premiere Pro
                  </div>
                  <div>
                    Adobe XD 
                  </div>
                </div>
                <div className="skillRight">
                  <div>
                    Adobe Photoshop
                  </div>
                  <div>
                    Adobe Lightroom
                  </div>
                  <div>
                    Unreal Engine 4
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div id="Projects">
          Projects.
        </div>

        <div id="Contact">
          Contact.
        </div>

      </main>
    </div>
  );
}

export default App;
