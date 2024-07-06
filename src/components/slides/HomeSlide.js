import styled from 'styled-components';
import Slide from '../containers/Slide';
import { Link } from "react-scroll";
import AccentLine from '../widgets/AccentLine';
import EmailIcon from "../../res/icons/email.svg";
import GithubIcon from "../../res/icons/github.svg";
import DevopsSpinnerIcon from "../../res/icons/devops-spinner2.svg";
import LinkedinIcon from "../../res/icons/linkedin.svg";
import Avatar from "../../res/avatar.svg"
import TriangleScrollToButton from '../widgets/TriangleScrollToButton';

const Container = styled.div.attrs({ className: "home-slide" })`
    width: 100%;
    height: 100%;
    display: flex;
    background: var(--black);
    gap: var(--global-border-width);
    color: var(--black);

    section {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        background: var(--white);

        .slide-half-content {
            width: 60%;
            height: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 2rem;
            // background: red;
        }
    }

    #left-of-slide {
        .slide-half-content {
            align-items: center;
        }

        #profile-pic-outer-container {
            position: relative;
            width: 300px;
            height: 300px;

            #profile-pic-inner-container {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 220px;
                height: 220px;
                border: var(--global-border-width) solid var(--black);
                border-radius: 100%;
                background-image: url(${Avatar});
                background-size: 90%;
                background-repeat: no-repeat;
                background-position: bottom;
                z-index: 2;
            }
            
            #anim-spinner {
                position: absolute;
                top: 50%;
                left: 50%;
                margin: -150px 0 0 -150px;
                width: 300px;
                height: 300px;
                z-index: 0;
                animation: spin 5s linear infinite;
            }

            @keyframes spin {
                0% { transform: rotate(0deg) };
                100% { transform: rotate(360deg) };
            }
        }

        a {
            position: relative;
            width: 100%;
            height: 4rem;
            border-top: var(--global-border-width) solid var(--black);
            border-bottom: var(--global-border-width) solid var(--black);
            display: flex;
            justify-content: center;
            align-items: center;
            color:var(--black);
            transition: 0.3s;
            font-weight: bold;
            font-size: 1.2rem;

            &:hover {
                background: var(--dark-white);
            }

            &:hover ~ .accent-line {
                background: var(--red);
            }
        }
    }

    #right-of-slide {
        h1 {
            font-size: 3.2rem;
            margin-bottom: 1rem;
        }
    
        h3 {
            font-weight: normal;
        }

        ul {
            list-style-type: none;
        }

        li {
            border-bottom: var(--global-border-width) solid var(--black);
        }

        li:last-of-type {
            border: 0;
        }

        li a {
            height: 4rem;
            display: flex;
            align-items: center;
            color:var(--black);
            transition: 0.3s;
            cursor: pointer;

            &:hover {
                background: var(--dark-white);
            }
        }

        li img {
            margin-right: 1rem;
            width: 24px;
            height: 24px;
        }
    }

    @media screen and (max-width: 700px) {
        #left-of-slide {    
            #profile-pic-outer-container {
                width: 180px;
                height: 180px;

                #profile-pic-inner-container {
                    width: 140px;
                    height: 140px;
                }

                #anim-spinner {
                    width: 180px;
                    height: 180px;
                    margin: -90px 0 0 -90px;
                }
            }
        }
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;

        #left-of-slide {    
            #profile-pic-outer-container {
                width: 160px;
                height: 160px;

                #profile-pic-inner-container {
                    width: 120px;
                    height: 120px;
                }

                #anim-spinner {
                    width: 160px;
                    height: 160px;
                    margin: -80px 0 0 -80px;
                }
            }
        }

        section {
            width: 100%;
            height: 50%;

            .slide-half-content {
                width: 80%;
                height: 100%;
            }
        }

        #right-of-slide {
            text-align: center;

            .accent-line {
                display: none;
            }
        }
    }

    @media screen and (max-width: 600px) and (max-height: 750px) {
        #right-of-slide {
            h1 {
                font-size: 2rem;
            }

            h3 {
                font-size: 1.4rem;
            }
        }
    }
`

export default function HomeSlide({ children }) {
    return (
        <Slide height="100dvh" color="var(--white)">

            <TriangleScrollToButton
                scrollTarget={window.innerHeight}
                verticalPosition="bottom"
            />

            <Container>

                <section id="left-of-slide">

                    <div className='slide-half-content'>

                        <div id='profile-pic-outer-container'>

                            <div id='profile-pic-inner-container'></div>
                            <img id='anim-spinner' src={DevopsSpinnerIcon} />

                        </div>

                        <a href="assets/Anthony Resume V2.0.pdf" target='_blank' > DOWNLOAD RESUME </a>
                        <AccentLine width="150px" />
                        <AccentLine width="75px" />

                    </div>

                </section>

                <section id="right-of-slide">

                    <div className='slide-half-content'>

                        <AccentLine width="75px" />
                        <AccentLine width="150px" />

                        <div>

                            <h1> ANTHONY GONZALEZ </h1>
                            <h3>
                                I'm a software engineer with a focus on DevOps and SRE principles.
                            </h3>

                        </div>

                        <ul>

                            <li>
                                <Link
                                    activeClass='active'
                                    containerId='app-content'
                                    to='section-header5'
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    delay={300}
                                >
                                    <img src={EmailIcon} /> Email
                                </Link>
                            </li>

                            <li>
                                <a href="https://www.github.com/anthonyg820" target="_blank" rel="noreferrer"> <img src={GithubIcon} /> GitHub </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/anthony-gonzalez-341279173" target="_blank" rel="noreferrer"> <img src={LinkedinIcon} /> LinkedIn </a>
                            </li>

                        </ul>

                    </div>

                </section>

            </Container>

        </Slide>
    )
}