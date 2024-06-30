import styled from 'styled-components';
import Slide from '../containers/Slide';
import AccentLine from '../widgets/AccentLine';
import EmailIcon from "../../res/icons/email.svg";
import GithubIcon from "../../res/icons/github.svg";
import LinkedinIcon from "../../res/icons/linkedin.svg";
import Avatar from "../../res/avatar.svg"

const Container = styled.div.attrs({ className: "home-slide" })`
    width: 100%;
    height: 100%;
    display: flex;
    background: var(--black);
    gap: 1px;

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

        #profile-pic-container {
            width: 280px;
            height: 280px;
            border: 1px solid var(--black);
            border-radius: 100%;
            background-image: url(${Avatar});
            background-size: 90%;
            background-repeat: no-repeat;
            background-position: bottom;
        }

        a {
            width: 100%;
            height: 4rem;
            border-top: 1px solid var(--black);
            border-bottom:1px solid var(--black);
            display: flex;
            justify-content: center;
            align-items: center;
            color:var(--black);
            transition: 0.3s;

            &:hover {
                background: var(--dark-white);
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
            border-bottom: 1px solid var(--black);
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
            #profile-pic-container {
                width: 180px;
                height: 180px;
            }
        }
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;

        section {
            width: 100%;
            height: 50%;

            .slide-half-content {
                width: 80%;
                height: 100%;
            }
        }

        #left-of-slide {    
            #profile-pic-container {
                width: 140px;
                height: 140px;
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
        <Slide color="var(--white)">

            <Container>

                <section id="left-of-slide">

                    <div className='slide-half-content'>

                        <div id='profile-pic-container'></div>

                        <a href="#" > DOWNLOAD RESUME </a>

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
                                <a href="mailto:antg820@gmail.com" target="_blank" rel="noreferrer"> <img src={EmailIcon} /> Email </a>
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