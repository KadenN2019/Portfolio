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
              <a href="#"  target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/KadenN2019" target="_blank">
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
                I am a frontend developer with experience in user interface and logo design.
              </div>
              <div className="Line"></div>
              <div className="largeDes">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
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
          <div>
            <div className="ProjectINDV">
              <img src={MintShoes} className="ProjIMG" />

              <div className="ProjDESC">
                <div className="ProjTitle">
                  Mint Shoes
                </div>
                <div className="projDetails">
                  Mint shoes is an ecommerce website that is designed to make finding what your favorite NBA player wears game to game. With this project I worked with a group of four and had a time frame of two weeks from start to finish, which required the team to divde and conquer on different parts of the project. I worked on the design of the project setting goals and objectives of each team member.  My primary role was the user interface, jsx, and css. Other team members worked on the database.
                </div>
                <div>
                  <a href="https://github.com/jkhone/sports-site-dude" target="_blank" className="icons">
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="ProjectINDV">
              <img src={TheViewBar} className="ProjIMG" />

              <div className="ProjDESC">
                <div  className="ProjTitle">
                  The View Bar
                </div>
                <div className="projDetails">
                  The View Bar is a mock Restaurant. The website demonstrates what can be achieved in native html and css with little javascript. The menu uses an API to show items with the appropriate icon for allergies and ingredients.  
                </div>
                <div>
                  <a href="https://github.com/KadenN2019/TheViewBar" target="_blank" className="icons">
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
                  <a href="#"  target="_blank" className="icons">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
                <div className="information">
                  <a href="https://github.com/KadenN2019" target="_blank" className="icons">
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
