import styled from 'styled-components';
import Slide from '../containers/Slide';
import AccentLine from '../widgets/AccentLine';
import GetSkillsList from '../../data/skills-list';
import { motion, useInView } from "framer-motion"
import React, { useRef } from 'react';

const Container = styled.div.attrs({ className: "skills-slide" })`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: var(--global-border-width);
    background: var(--black);

    .skillblock {
        position: relative;
        height: 100%;
        box-sizing: border-box;
        background: var(--white);
        display: flex;
        align-items: flex-start;
        justify-content: center;

        .skillblock-content {
            width: 200px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: 1rem;
            margin-top: 2rem;

            img {
                height: 4rem;
            }

            h5 {
                text-align: center;
            }

            ul {
                width: 100%;
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                justify-content: center;
            }

            li {
                position: relative;
                width: 100%;
                height: 3rem;
                box-sizing: border-box;
                border: var(--global-border-width) solid var(--black);
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    @media screen and (max-width: 980px) {
        height: auto;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;

        .skillblock {
            padding-bottom: 3rem;
        }
    }

    @media screen and (max-width: 550px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;

        .skillblock{
            .skillblock-content {
                width: 80%;

                ul {
                    flex-direction: row;
                    flex-wrap: wrap;
                }

                li {
                    width: auto;
                    padding: 0 1rem;
                }
            }
        }
        
    }
`

export default function SkillsSlide({ children }) {

    const pillarAnim = {
        hidden: { opacity: 0, left: '100%' },
        visible: { opacity: 1, left: '0%' }
    }

    const liAnim = {
        hidden: window.innerWidth > 550 ? { opacity: 0, bottom: -20, borderWidth: '10px' } : { opacity: 0, right: -20, },
        visible: window.innerWidth > 550 ? { opacity: 1, bottom: 0, borderWidth: '1px' } : { opacity: 1, right: 0, }
    }

    // One ref and useInView for each pillar
    const pillarRef1 = useRef(null);
    const pillarInView1 = useInView(pillarRef1, { once: true })

    const pillarRef2 = useRef(null);
    const pillarInView2 = useInView(pillarRef2, { once: true })

    const pillarRef3 = useRef(null);
    const pillarInView3 = useInView(pillarRef3, { once: true })

    const pillarRef4 = useRef(null);
    const pillarInView4 = useInView(pillarRef4, { once: true })

    const pillarAnimArr = [
        { ref: pillarRef1, inView: pillarInView1 },
        { ref: pillarRef2, inView: pillarInView2 },
        { ref: pillarRef3, inView: pillarInView3 },
        { ref: pillarRef4, inView: pillarInView4 }
    ]

    return (
        <Slide color="var(--white)" freeHeightBreakpoint="980px">

            <Container>

                {
                    GetSkillsList().map((item, index1) =>
                        <motion.section
                            className='skillblock'
                            ref={pillarAnimArr[index1].ref}
                            initial="hidden"
                            animate={pillarAnimArr[index1].inView ? "visible" : "hidden"}
                            transition={{ delay: window.innerWidth > 550 ? 0.15 * index1 : 0.15, delayChildren: 0.5 , staggerChildren: 0.12 }}
                            variants={pillarAnim}
                        >

                            <div className='skillblock-content'>

                                <img src={item.icon} />
                                <h5> {item.pillar} </h5>
                                <AccentLine width="75px" />
                                <ul
                                    id='skill-list'

                                >
                                    {item.skills.map((skill, index2) =>
                                        <motion.li variants={liAnim}>
                                            {skill}
                                        </motion.li>
                                    )}
                                </ul>

                            </div>

                        </motion.section>
                    )
                }

            </Container>

        </Slide>
    )
}