import styled from 'styled-components';
import Slide from '../containers/Slide';
import AccentLine from '../widgets/AccentLine';
import GetProjectList from '../../data/project-list';
import GithubIcon from "../../res/icons/github.svg";
import EyeIcon from "../../res/icons/eye.svg";

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
        gap: 1px;
        background: var(--black);
        text-align: center;

        li {
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
                border: 1px solid var(--black);
                padding: 0.5rem
            }

            .project-options {
                display: flex;
                justify-content: center;
                gap: 1rem;

                a {
                    position: relative;

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

                img {
                    width: 3rem;
                    height: 3rem;
                    box-sizing: border-box;
                    padding: 0.5rem;
                    border: 1px solid var(--black);
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
            grid-template-rows: 1fr 1fr 1fr;

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

export default function ProjectsSlideTwo() {
    return (
        <Slide color="var(--white)" height="auto">

            <Container>

                <ul id='project-list'>

                    {
                        GetProjectList().map((item) =>
                            <li>
                                <p> {item.techUsed} </p>
                                <AccentLine width='75px' />
                                {/* <AccentLine width='150px' /> */}
                                <img src={item.image} />
                                <h4> {item.name} </h4>
                                <AccentLine width='75px' />
                                <p> {item.description} </p>
                                <AccentLine width='75px' />

                                <div className='project-options'>

                                    <a href={item.projectLink} target='_blank'> <img src={EyeIcon} /> </a>
                                    <a href={item.githubLink} target='_blank'> <img src={GithubIcon} /> </a>

                                </div>
                            </li>
                        )
                    }

                </ul>

            </Container>

        </Slide>
    )
}