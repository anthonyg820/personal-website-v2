import './Core.css';
import { styled } from 'styled-components';
import Slide from './components/containers/Slide';
import HomeSlide from './components/slides/HomeSlide';
import SkillsSlide from './components/slides/SkillsSlide';
import SectionHeader from './components/widgets/SectionHeader';
import UKGSlide from './components/slides/UKGSlide';
import RCCLSlide from './components/slides/RCCLSlide';
import EducationSlide from './components/slides/EducationSlide';

import HomeIcon from "./res/icons/home-black.svg"
import SkillsIcon from "./res/icons/skills-black.svg"
import EducationIcon from "./res/icons/education-black.svg"
import ProjectsIcon from "./res/icons/projects-black.svg"
import ExperienceIcon from "./res/icons/experience-black.svg"
import ContactIcon from "./res/icons/email2.svg"
import { globalStore } from './AppManager';
import { useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import ContactSlide from './components/slides/ContactSlide';
import ProjectsSlide from './components/slides/ProjectsSlide';
import ProjectsSlideTwo from './components/slides/ProjectsSlideTwo';

const Container = styled.div.attrs({ className: "app" })`
  width: 100%;
  display: flex;
  overflow: hidden;
  background: var(--black);
  box-sizing: border-box;

  .menu-button {
    position: fixed;
    top: 1.5rem;
    left: 2rem;
    width: 3rem;
    height: 3rem;
    border-top: 1px solid var(--black);
    border-bottom: 1px solid var(--black);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: var(--white);
    z-index: 10;
  }

  .menu-button-line {
    position: relative;
    width: 70%;
    height: 0.25rem;
    background: ${({ menuIsVisible }) => menuIsVisible ? "var(--red)" : "var(--black)"};
    flex-shrink: 0;
    transition: 0.3s;
  }

  .menu-button-line:nth-of-type(1) {
    transform: ${({ menuIsVisible }) => menuIsVisible ? "rotate(45deg)" : null};
    top: ${({ menuIsVisible }) => menuIsVisible ? "7px" : null};
  }

  .menu-button-line:nth-of-type(2) {
    display: ${({ menuIsVisible }) => menuIsVisible ? "none" : null};
  }

  .menu-button-line:nth-of-type(3) {
    transform: ${({ menuIsVisible }) => menuIsVisible ? "rotate(-45deg)" : null};
    bottom: ${({ menuIsVisible }) => menuIsVisible ? "7px" : null};
  }

  nav {
    position: fixed;
    width: ${({ menuIsVisible }) => menuIsVisible ? "7rem" : "0"};
    height: 100dvh;
    top: 0;
    left: 0;
    background: var(--white);
    flex-shrink: 0;
    transition: 0.3s;
    overflow: hidden;
    box-sizing: border-box;
    border-right: 1px solid var(--black);
    z-index: 5;

    #nav-content {
      width: 7rem;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      justify-content: center;

      .nav-item {
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        img {
          width: 3rem;
          height: 3rem;
          box-sizing: border-box;
          padding: 0.5rem;
          border-bottom: 1px solid var(--black);
          border-top: 1px solid transparent;
          border-left: 1px solid transparent;
          border-right: 1px solid transparent;
          transition: 0.3s;
        }

        h6 {
          color: var(--black);
        }

        &:hover img {
          border-color: var(--black);
        }
      }

      .active {
        img {
          background: var(--dark-white);
          border-color: var(--black);
        }
      }
    }
  }

  #app-content {
    position: absolute;
    top: 0;
    left: ${({ menuIsVisible }) => menuIsVisible ? "7rem" : "0"};
    width: 100%;
    height: 100dvh;
    flex-shrink: 0;
    transition: 0.3s;
    box-sizing: border-box;
    overflow-y: auto;
  }
`

function App() {

  const { visible, setVisible } = globalStore((state) => state.navigation);

  useEffect(() => {
    let section_headers = document.getElementsByClassName("section-header");

    for (var i = 0; i < section_headers.length; i++)
      section_headers[i].id = `section-header${i + 1}`;
  }, [])

  return (
    <Container menuIsVisible={visible}>

      <div className='menu-button' onClick={visible ? () => setVisible(false) : () => setVisible(true)}>

        <div className='menu-button-line'></div>
        <div className='menu-button-line'></div>
        <div className='menu-button-line'></div>

      </div>

      <nav>

        <div id='nav-content'>

          <Link
            activeClass='active'
            containerId='app-content'
            spy={true}
            smooth={true}
            duration={1000}
            className='nav-item'
            onClick={() => {
              scroll.scrollTo(0, { containerId: 'app-content', duration: 1000, delay: 300 }); setVisible(false)
            }
            }>

            <img src={HomeIcon} />
            <h6> Home </h6>

          </Link>

          <Link
            activeClass='active'
            containerId='app-content'
            to='section-header1'
            spy={true}
            smooth={true}
            duration={1000}
            delay={300}
            className='nav-item'
            onClick={() => setVisible(false)}>

            <img src={SkillsIcon} />
            <h6> Skills </h6>

          </Link>

          <Link
            activeClass='active'
            containerId='app-content'
            to='section-header2'
            spy={true}
            smooth={true}
            duration={1000}
            delay={300}
            className='nav-item'
            onClick={() => setVisible(false)}>

            <img src={EducationIcon} />
            <h6> Education </h6>

          </Link>

          <Link
            activeClass='active'
            containerId='app-content'
            to='section-header3'
            spy={true}
            smooth={true}
            duration={1000}
            delay={300}
            className='nav-item'
            onClick={() => setVisible(false)}>

            <img src={ProjectsIcon} />
            <h6> Projects </h6>

          </Link>

          <Link
            activeClass='active'
            containerId='app-content'
            to='section-header4'
            spy={true}
            smooth={true}
            duration={1000}
            delay={300}
            className='nav-item'
            onClick={() => setVisible(false)}>

            <img src={ExperienceIcon} />
            <h6> Experience </h6>

          </Link>

          <Link
            activeClass='active'
            containerId='app-content'
            to='section-header5'
            spy={true}
            smooth={true}
            duration={1000}
            delay={300}
            className='nav-item'
            onClick={() => setVisible(false)}>

            <img src={ContactIcon} />
            <h6> Contact </h6>

          </Link>

        </div>

      </nav>

      <div id='app-content'>

        <HomeSlide />
        <SectionHeader title="SKILLS" id="skills-section" />
        <SkillsSlide />
        <SectionHeader title="EDUCATION" />
        <EducationSlide />
        <SectionHeader title="PROJECTS" />
        <ProjectsSlideTwo />
        <SectionHeader title="EXPERIENCE" />
        <UKGSlide />
        <RCCLSlide />
        <SectionHeader title="CONTACT" />
        <ContactSlide />

      </div>

    </Container>
  );
}

export default App;
