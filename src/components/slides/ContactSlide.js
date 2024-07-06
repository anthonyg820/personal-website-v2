import styled from 'styled-components';
import Slide from '../containers/Slide';
import AccentLine from '../widgets/AccentLine';
import EmailIcon from "../../res/icons/email.svg";
import GithubIcon from "../../res/icons/github.svg";
import LinkedinIcon from "../../res/icons/linkedin.svg";
import Avatar from "../../res/avatar.svg"
import TriangleScrollToButton from '../widgets/TriangleScrollToButton';

const Container = styled.div.attrs({ className: "contact-slide" })`
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
            border: var(--global-border-width) solid var(--black);
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
            border: var(--global-border-width) solid var(--black);
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

            &:hover {
                background: var(--dark-white);

                &::before {
                    background: var(--red);
                    bottom: -1rem;
                }
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
                resize: none;
            }

            input[type*='submit'] {
                margin-top: 2rem;
                width: 120px;
                height: 4rem;
                background: none;
                outline: 0;
                border: 0;
                border: var(--global-border-width) solid var(--black);
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                color: black;

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
                border: var(--global-border-width) solid var(--black);
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
                border: var(--global-border-width) solid var(--black);
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

export default function ContactSlide({ children }) {
    return (
        <Slide color="var(--white)" freeHeightBreakpoint="600px">

            <TriangleScrollToButton
                scrollTarget="0"
                verticalPosition="top"
            />

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
                            <input type='submit' value="SEND" />

                        </form>

                    </div>

                </section>

            </Container>

        </Slide>
    )
}