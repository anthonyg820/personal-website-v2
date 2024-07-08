import styled from 'styled-components';
import Slide from '../containers/Slide';
import AccentLine from '../widgets/AccentLine';
import GetEducationList from '../../data/education-list';
import { motion, useInView } from "framer-motion"
import React, { useRef } from 'react';

const Container = styled.div.attrs({ className: "education-slide" })`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    #education-list {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: var(--global-border-width);
        background: var(--black);

        li {
            position: relative;
            display: flex;
            gap: 2rem;
            justify-content: center;
            align-items: center;
            background: var(--white);
            padding: 3rem 0;

            .left-of-education-item, .right-of-education-item {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .left-of-education-item {
                width: 30%;
                flex-shrink: 0;
                align-items: end;
                // background: red;

                img {
                    width: 6rem;
                    height: 6rem;
                    box-sizing: border-box;
                    border: var(--global-border-width) solid var(--black);
                    padding: 1rem;
                    border-radius: 1rem 0 1rem 0;
                }

                p {
                    width: 6rem;
                    text-align: center;
                    font-weight: bold;
                }
            }

            .right-of-education-item {
                width: 70%;
                align-itemst: start;
                padding-right: 1rem;

                h6 {
                    font-weight: normal;
                }
            }
        }

        li:last-of-type {
            border: 0;
        }
    }

    @media screen and (max-width: 980px) {
        height: auto;

        #education-list {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;

            li {
                padding: 3rem 1rem;
            }
        }
    }

    @media screen and (max-width: 650px) {
        height: auto;

        #education-list {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
        }
    }
`

export default function EducationSlide() {

    /*
        The animation is conditional on the window's innerWidth (in coordination with the CSS media queries).
        If desktop, stagger the li's via the parent.
        If mobile, the parent stagger is discarded, and each li is responsible for its own animation.

        This was done to give that 'each item appears individually' feel.
    */

    const liAnim = {
        hidden: { opacity: 0, left: '100%' },
        visible: { opacity: 1, left: '0%' }
    }

    // One ref and useInView for each education item
    const liRef1 = useRef(null);
    const liInView1 = useInView(liRef1, { once: true });

    const liRef2 = useRef(null);
    const liInView2 = useInView(liRef2, { once: true });

    const liRef3 = useRef(null);
    const liInView3 = useInView(liRef3, { once: true });

    const liRef4 = useRef(null);
    const liInView4 = useInView(liRef4, { once: true });

    const liRef5 = useRef(null);
    const liInView5 = useInView(liRef5, { once: true });

    const liRef6 = useRef(null);
    const liInView6 = useInView(liRef6, { once: true });

    const liRefArr = [
        { ref: liRef1, inView: liInView1 },
        { ref: liRef2, inView: liInView2 },
        { ref: liRef3, inView: liInView3 },
        { ref: liRef4, inView: liInView4 },
        { ref: liRef5, inView: liInView5 },
        { ref: liRef6, inView: liInView6 }
    ];

    // One ref and useInView for each education item
    const ulRef = useRef(null);
    const ulInView = useInView(ulRef, { once: true })

    return (
        <Slide color="var(--black)" height="auto" freeHeightBreakpoint="980px">

            <Container>

                <motion.ul id='education-list'
                    ref={ulRef}
                    animate={ulInView ? "visible" : "hidden"}
                    transition={{ delayChildren: 0.2, staggerChildren: 0.12 }}
                >

                    {
                        GetEducationList().map((item, index) =>
                            <motion.li
                                ref={liRefArr[index].ref}
                                variants={window.innerWidth > 650 ? liAnim : null}
                                initial={window.innerWidth < 650 ? liAnim.hidden : null}
                                animate={window.innerWidth < 650 ?
                                    (liRefArr[index].inView ? liAnim.visible : null) : null}
                                transition={window.innerWidth < 650 ?
                                    (liRefArr[index].inView ? { delay: 0.15, duration: 0.3 } : null) : null
                                }
                            >
                                <div className='left-of-education-item'>
                                    <img src={item.icon} />
                                    <p> {item.type} </p>
                                </div>

                                <div className='right-of-education-item'>
                                    <h4> {item.name} </h4>
                                    <AccentLine width='75px' />
                                    <h6> {item.date.toUpperCase()} </h6>
                                </div>

                            </motion.li>
                        )
                    }

                </motion.ul>

            </Container>

        </Slide>
    )
}