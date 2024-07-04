import styled from 'styled-components';
import Slide from '../containers/Slide';
import AccentLine from '../widgets/AccentLine';
import UKGLogo from "../../res/images/UKG2.svg";
import Texture from "../../res/images/cube-texture.png";

const Container = styled.div.attrs({ className: "experience-slide" })`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    color: var(--white);

    header {
        width: 100%;
        height: 6rem;
        box-sizing: border-box;
        padding: 0 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        background: ${({backgroundColors}) => backgroundColors.header};
        color: ${({textColors}) => textColors.header};

        .header-half {
            display: flex;
            flex-direction: column;
            gap: 2rem;

        }

        #right-of-header {
            align-items: end;
        }
        
    }

    #slide-content {
        height: 100%;
        display: flex;
        align-items: center;
        gap: 1px;
    }

    section {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background-color: ${({backgroundColors}) => backgroundColors.slide};
        background-image: url('${Texture}');
        background-position: center;

        .slide-half-content {
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 2rem;
            box-sizing: border-box;
            padding: 2rem;
        }
    }

    #left-of-content {
        .slide-half-content {
            background: ${({backgroundColors}) => backgroundColors.focusArea};
            border-radius: 2rem;
            color: ${({textColors}) => textColors.focusArea};
        }

        img {
            width: ${({companyLogo}) => companyLogo.width};
        }

        h4 {
            font-size: 2.6rem;
            font-weight: normal;
        }

        p {
            font-size: 1.5rem;
            line-height: 3rem;
        }

        a {
            width: 200px;
            height: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 48px;
            background: ${({backgroundColors}) => backgroundColors.learnMore};
            color: ${({textColors}) => textColors.learnMore};
            font-weight: bold;
            transition: 0.3s;

            &:hover {
                background: var(--ukg-light-yellow);
            }
        }
    }

    #right-of-content {

        .slide-half-content {
            border: 1px solid ${({backgroundColors}) => backgroundColors.header};
            background: ${({backgroundColors}) => backgroundColors.impact};
        }
        
        ul {
            list-style: none;
            max-height: 350px;
            overflow-y: auto;
            box-sizing: border-box;
            padding: 0 1rem;
        }

        li {
            font-size: 1.2rem;
            line-height: 1.8rem;
            border-bottom: 1px solid ${({backgroundColors}) => backgroundColors.header};
            padding: 1rem 0;
        }

        li:last-child {
            border-bottom: 0;
        }
    }

    @media screen and (max-width: 700px) {
        #left-of-content {    
            img {
                width: 200px;
            }
    
            h4 {
                font-size: 3rem;
            }

            p {
                font-size: 1.2rem;
                line-height: 2.4rem;
            }
        }
    }

    @media screen and (max-width: 600px) {
        header {
            h5 {
                font-size: 1rem;
            }

            .header-half {
                width: 50%;
                flex-shrink: 0;
            }

            #right-of-header {
                text-align: right;
            }
        }

        #slide-content {
            flex-direction: column;
            text-align: center;
        }

        section {
            width: 100%;
            height: auto;
            padding: 4rem 0;
        }

        .slide-half-content {
            align-items: center;
        }

        #left-of-content {
            border-right: 0;
            border-bottom: 1px solid var(--ukg-teal);
        }

        #right-of-content {
            ul {
                max-height: none;
            }
        }
    }
`

export default function ExperienceSlide({
    children, from, to, position, company, companyLogo, heading, subHeading, learnMoreLink, 
    backgroundColors, textColors, responsibilities
}) 
{
    return (
        <Slide color={backgroundColors.header} freeHeightBreakpoint="600px">

            <Container backgroundColors={backgroundColors} textColors={textColors} companyLogo={companyLogo}>

                <header>

                    <div className='header-half' id='left-of-header'>

                        <h5> {from} - {to} </h5>

                    </div>

                    <div className='header-half' id='right-of-header'>

                        <h5> {position} </h5>

                    </div>

                </header>

                <div id='slide-content'>

                    <section id='left-of-content'>

                        <div className='slide-half-content'>

                            <img src={companyLogo.src} />
                            <h4> {heading} </h4>
                            <p> {subHeading} </p>
                            <a target="_blank" rel="noreferrer" href={learnMoreLink}> Learn more </a>

                        </div>

                    </section>

                    <section id='right-of-content'>

                        <div className='slide-half-content'>

                            <h4> IMPACT </h4>

                            <AccentLine width="150px" color={backgroundColors.header} />

                            <ul>

                                { responsibilities.map((item2) => <li> {item2} </li>) }

                            </ul>

                        </div>

                    </section>

                </div>

            </Container>

        </Slide>
    )
}