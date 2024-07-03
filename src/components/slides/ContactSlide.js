import styled from 'styled-components';
import Slide from '../containers/Slide';
import { Link, animateScroll as scroll } from "react-scroll";
import AccentLine from '../widgets/AccentLine';
import EmailIcon from "../../res/icons/email.svg";
import GithubIcon from "../../res/icons/github.svg";
import LinkedinIcon from "../../res/icons/linkedin.svg";
import ArrowDownIcon from "../../res/icons/arrow-down.svg";
import Avatar from "../../res/avatar.svg"
import AccentSquareGroup from '../widgets/AccentSquareGroup';

const Container = styled.div.attrs({ className: "contact-slide" })`
    width: 100%;
    height: 100%;
    display: flex;
    background: var(--black);
    gap: 1px;
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
            height: 100%;
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
            width: 120px;
            height: 120px;
            border: 1px solid var(--black);
            // border-radius: 100%;
            background-image: url(${Avatar});
            background-size: 90%;
            background-repeat: no-repeat;
            background-position: bottom;
        }

        .socials-container {
            display: flex; 
            gap: 2rem;
        }

        a {
            position: relative;
            width: 120px;
            height: 120px;
            border: 1px solid var(--black);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            color:var(--black);
            transition: 0.3s;

            img {
                width: 24px;
                height: 24px;
            }

            &::before {
                content: "";
                width: 100%;
                height: 1px;
                position: absolute;
                bottom: 0;
                transition: 0.3s;
            }

            // &::after {
            //     content: "";
            //     width: 50%;
            //     height: 1px;
            //     position: absolute;
            //     bottom: 0;
            //     transition: 0.3s;
            // }

            &:hover {
                background: var(--dark-white);

                &::before {
                    background: var(--red);
                    bottom: -2rem;
                }

                // &::after {
                //     background: var(--red);
                //     bottom: -4rem;
                // }
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

        form {

            input[type*='text'], input[type*='email'], textarea {
                width: 100%;
                height: 3rem;
                box-sizing: border-box;
                outline: 0;
                border: 0;
                border-bottom: 1px solid var(--black);
                display: flex;
                align-items: center;
            }

            textarea {
                height: 6rem;
                box-sizing: border-box;
                padding: 1rem 0;
            }

            button {
                margin-top: 2rem;
                width: 120px;
                height: 4rem;
                background: none;
                outline: 0;
                border: 0;
                border: 1px solid var(--black);
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover {
                    background: var(--dark-white);
                }
            }
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
        flex-direction: column-reverse;

        .slide-half-content {
            padding: 4rem 0;
        }

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
                width: 80px;
                height: 80px;
                border: 1px solid var(--black);
                // border-radius: 100%;
                background-image: url(${Avatar});
                background-size: 90%;
                background-repeat: no-repeat;
                background-position: bottom;
            }
    
            .socials-container {
                display: flex; 
                gap: 2rem;
            }
    
            a {
                position: relative;
                width: 80px;
                height: 80px;
                border: 1px solid var(--black);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                color:var(--black);
                transition: 0.3s;
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

const ScrollToTopButton = styled.a.attrs({ className: "scroll-to-top-button" })`
    width: 180px;
    height: 180px;
    border: 1px solid var(--black);
    // border-radius: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    margin: -90px 0 0 -90px;
    z-index: 3;
    background: var(--white);
    display: flex;
    justify-content: flex-end;
    align-items: end;
    transform: rotate(45deg);
    transition: 0.3s;
    cursor: pointer;
    box-sizing: border-box;

    &::after {
        content: "BACK TO TOP";
        position: absolute;
        bottom: -2rem;
        right: 30%;
        color: var(--black);
        font-weight: bold;
    }

    img {
        width: 3rem;
        height: 3rem;
        transform: rotate(135deg);
        position: relative;
        bottom: 35px;
        right: 35px;
    }

    &:hover {
        border-width: 12px;
        
        &::after {
            display: none;
        }
    }

    &:hover + .home-accent-triangle {
        margin: -110px 0 0 -110px;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }

    @media screen and (max-height: 500px) {
        display: none;
    }

    @media screen and (max-width: 800px) and (max-height: 550px) {
        display: none;
    }
`

const AccentTriangle = styled.div.attrs({ className: "home-accent-triangle" })`
    width: 220px;
    height: 220px;
    border: 1px solid var(--red);
    position: absolute;
    top: 0;
    left: 50%;
    margin: -220px 0 0 -110px;
    z-index: 2;
    background: var(--white);
    display: flex;
    // opacity: 0.0;
    transform: rotate(45deg);
    transition: 0.3s;
    cursor: pointer;
    box-sizing: border-box;

    @media screen and (max-width: 600px) {
        display: none;
    }

    @media screen and (max-height: 500px) {
        display: none;
    }

    @media screen and (max-width: 800px) and (max-height: 550px) {
        display: none;
    }
`

export default function ContactSlide({ children }) {
    return (
        <Slide color="var(--white)" freeHeightBreakpoint="600px">

            <ScrollToTopButton onClick={() => scroll.scrollTo(0, { containerId: "app-content", duration: 1000, delay: 200 })}>
                <img src={ArrowDownIcon} />
            </ScrollToTopButton>

            <AccentTriangle />

            <Container>

                <section id="left-of-slide">

                    <div className='slide-half-content'>

                        <div id='profile-pic-container'></div>
                        {/* <AccentLine width="150px" /> */}
                        <AccentLine width="225px" />

                        <div className='socials-container'>
                            <a href="https://www.github.com/anthonyg820" target="_blank" rel="noreferrer" > <img src={GithubIcon} /> GitHub </a>
                            <a href="https://www.linkedin.com/in/anthony-gonzalez-341279173" target="_blank" rel="noreferrer" > <img src={LinkedinIcon} /> LinkedIn </a>
                        </div>

                    </div>

                </section>

                <section id="right-of-slide">

                    <div className='slide-half-content'>

                        <AccentLine width="75px" />
                        <AccentLine width="150px" />

                        <div>

                            <h1> LET'S CHAT </h1>
                            <h3>
                                Send me an email and I'll get back to you as soon as I can.
                            </h3>

                        </div>

                        <form>

                            <input type='text' placeholder='Name' />
                            <input type='email' placeholder='Email' />
                            <input type='text' placeholder='Subject' />
                            <textarea placeholder='Message' />
                            <button> SEND </button>

                        </form>

                    </div>

                </section>

            </Container>

        </Slide>
    )
}