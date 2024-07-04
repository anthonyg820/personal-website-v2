import './Core.css';
import { styled } from 'styled-components';
import HomeSlide from './components/slides/HomeSlide';
import SkillsSlide from './components/slides/SkillsSlide';
import SectionHeader from './components/widgets/SectionHeader';
import EducationSlide from './components/slides/EducationSlide';
import { globalStore } from './AppManager';
import ContactSlide from './components/slides/ContactSlide';
import ProjectsSlideTwo from './components/slides/ProjectsSlideTwo';
import ExperienceSlide from './components/slides/ExperienceSlide';
import GetExperienceList from './data/experience-list';
import MainNav from './components/navigation/MainNav';
import MenuButton from './components/navigation/MenuButton';

const Container = styled.div.attrs({ className: "app" })`
  width: 100%;
  display: flex;
  overflow: hidden;
  background: var(--black);
  box-sizing: border-box;

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

  return (
    <Container menuIsVisible={visible}>

      <MenuButton />
      <MainNav />

      <div id='app-content' onClick={() => setVisible(false)}>

        <HomeSlide />
        <SectionHeader title="SKILLS" id="skills-section" />
        <SkillsSlide />
        <SectionHeader title="EDUCATION" />
        <EducationSlide />
        <SectionHeader title="PROJECTS" />
        <ProjectsSlideTwo />
        <SectionHeader title="EXPERIENCE" />

        {
          GetExperienceList().map((item) => 
            <ExperienceSlide
              from={item.from.toUpperCase()}
              to={item.to.toUpperCase()}
              companyLogo={item.companyLogo}
              position={item.position.toUpperCase()}
              heading={item.heading}
              subHeading={item.subHeading}
              backgroundColors={item.backgroundColors}
              textColors={item.textColors}
              learnMoreLink={item.learnMoreLink}
              responsibilities={item.responsibilities}
            />
          )
        }

        <SectionHeader title="CONTACT" />
        <ContactSlide />

      </div>

    </Container>
  );
}

export default App;
