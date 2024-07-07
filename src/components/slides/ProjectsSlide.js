import styled from 'styled-components';
import Slide from '../containers/Slide';
import AccentLine from '../widgets/AccentLine';
import GetProjectList from '../../data/project-list';
import GithubIcon from "../../res/icons/github.svg";
import EyeIcon from "../../res/icons/eye.svg";
import ModernButton from '../buttons/ModernButton';
import { motion, useInView } from "framer-motion"
import React, { useRef } from 'react';

const Container = styled.div.attrs({ className: "projects-slide" })`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    #project-list {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: var(--global-border-width);
        background: var(--black);
        text-align: center;

        li {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: flex-start;
            align-items: center;
            background: var(--white);
            padding: 4rem 2rem;

            & > img {
                width: 224px;
                height: 126px;
                box-sizing: border-box;
                border: var(--global-border-width) solid var(--black);
                padding: 0.5rem
            }

            .project-description {
                font-size: 1.0rem;
            }

            .project-options {
                display: flex;
                justify-content: center;
                gap: 1rem;

                .project-coming-soon {
                    height: 3rem;
                    box-sizing: border-box;
                    padding: 0.5rem;
                    border: var(--global-border-width) solid var(--black);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }

        li:last-of-type {
            border: 0;
        }
    }

    @media screen and (max-width: 980px) {
        height: auto;

        #project-list {
            grid-template-columns: 1fr 1fr;

            li {
                padding: 3rem 1rem;
            }
        }
    }

    @media screen and (max-width: 650px) {
        height: auto;

        #project-list {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
        }
    }
`

export default function ProjectsSlide() {

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

    const liRef7 = useRef(null);
    const liInView7 = useInView(liRef7, { once: true });

    const liRef8 = useRef(null);
    const liInView8 = useInView(liRef8, { once: true });

    const liRefArr = [
        { ref: liRef1, inView: liInView1 },
        { ref: liRef2, inView: liInView2 },
        { ref: liRef3, inView: liInView3 },
        { ref: liRef4, inView: liInView4 },
        { ref: liRef5, inView: liInView5 },
        { ref: liRef6, inView: liInView6 },
        { ref: liRef7, inView: liInView7 },
        { ref: liRef8, inView: liInView8 }
    ];

    // One ref and useInView for each education item
    const ulRef = useRef(null);
    const ulInView = useInView(ulRef, { once: true })

    return (
        <Slide color="var(--white)" height="auto">

            <Container>

                <motion.ul id='project-list'
                    ref={ulRef}
                    animate={ulInView ? "visible" : "hidden"}
                    transition={{ delayChildren: 0.2, staggerChildren: 0.12 }}
                >

                    {
                        GetProjectList().map((item, index) =>
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
                                <h4> {item.name} </h4>
                                <AccentLine width='75px' />
                                <img src={item.image} />
                                <p className='project-description'> {item.description} </p>
                                <AccentLine width='75px' />

                                <div className='project-options'>

                                    {
                                        item.projectLink != "" ?
                                            <ModernButton
                                                icon={EyeIcon}
                                                link={item.projectLink}
                                            />
                                            :
                                            null
                                    }

                                    {
                                        item.githubLink != "" ?
                                            <ModernButton
                                                icon={GithubIcon}
                                                link={item.githubLink}
                                            />
                                            :
                                            null
                                    }

                                    {
                                        (item.projectLink == "" && item.githubLink == "") ?
                                            <ModernButton
                                                text="Coming soon"
                                            />
                                            :
                                            null
                                    }

                                </div>

                                <AccentLine width='75px' />

                                <p> {item.techUsed} </p>
                            </motion.li>
                        )
                    }

                </motion.ul>

            </Container>

        </Slide>
    )
}