import styled from 'styled-components';
import Slide from '../containers/Slide';
import ArrowLeft from '../../res/icons/arrow-left-chevron.svg';
import ArrowRight from '../../res/icons/arrow-right-chevron.svg';
import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Container = styled.div.attrs({ className: "projects-slide" })`
    width: 100%;
    height: 100%;
    display: flex;
    background: var(--white);
    gap: 1px;
    color: var(--black);
`

const ProjectSliderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    #slider-window {
        width: 70%;
        height: 70%;
        border: 1px solid var(--black);
        overflow: hidden;
        display: flex;
        flex-wrap: no-wrap;
    }

    #slider-content {
        width: 100%;
        height: 100%;
        display: flex;
        box-sizing: border-box;
    }

    .slider-arrow {
        width: 4rem;
        height: 4rem;
        position: relative;
        cursor: pointer;
        box-sizing: border-box;
        border: 1px solid transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;

        img {
            width: 2.5rem;
            height: 2.5rem;
        }

        &::after {
            content: "";
            width: 100%;
            height: 1px;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: 0.3s;
        }

        &:hover {
            background: var(--dark-white);
            border: 1px solid var(--black);

            &::after {
                bottom: -2rem;
                left: 0;
                background: var(--red);
            }
        }
    }

    .slider-slide {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        display: flex;
        gap: 1px;
        background: var(--black);

        .slider-slide-half {
            width: 50%;
            height: 100%;
            background: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;

            .slider-slide-half-content {
                width: 75%;
                h3 {
                    font-size: 2.8rem;
                    margin-bottom: 1rem;
                }
            
                h4 {
                    font-weight: normal;
                }
            }
        }
    }
`

function ProjectSlider({children}) {

    const [currentSlide, setSlide] = useState(0);

    function scrollToSlide(slideIndex) {
        let sliderSlides = document.getElementsByClassName("slider-slide");

        let slideWidth = sliderSlides[slideIndex].clientWidth;
        let iterator = slideWidth;

        scroll.scrollTo(Math.ceil(slideIndex * iterator), {horizontal: true, containerId: "slider-window", duration: 500, delay: 100});
    }

    useEffect(() => {
        scrollToSlide(currentSlide);
    }, [currentSlide]);

    return (
        <ProjectSliderContainer>

            <div id='slider-left-arrow' className='slider-arrow' onClick={() => setSlide(currentSlide - 1)}> <img src={ArrowLeft} /> </div>

            <div id='slider-window'>

                <div id='slider-content'>

                    <div className='slider-slide'>

                        <section className='slider-slide-half'>

                            <div className='slider-slide-half-content'>

                                <h3> DEVOPS HANGOUT </h3>

                                <h4> A platform used to teach devops ideologies. </h4>

                            </div>

                        </section>

                        <section className='slider-slide-half'>



                        </section>

                    </div>

                    <div className='slider-slide'>

                        <section className='slider-slide-half'>



                        </section>

                        <section className='slider-slide-half'>



                        </section>

                    </div>

                </div>

            </div>

            <div id='slider-right-arrow' className='slider-arrow' onClick={() => setSlide(currentSlide + 1)}> <img src={ArrowRight} /> </div>

        </ProjectSliderContainer>
    )
}

export default function ProjectsSlide() {
    return (
        <Slide>

            <Container>

                <ProjectSlider />

            </Container>

        </Slide>
    )
}