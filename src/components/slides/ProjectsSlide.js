import styled from 'styled-components';
import Slide from '../containers/Slide';
import AccentLine from '../widgets/AccentLine';
import GetProjectList from '../../data/project-list';
import GithubIcon from "../../res/icons/github.svg";
import EyeIcon from "../../res/icons/eye.svg";
import ModernButton from '../buttons/ModernButton';

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

                // a {
                //     position: relative;

                //     &::before {
                //         content: "";
                //         width: 100%;
                //         height: 1px;
                //         position: absolute;
                //         bottom: 0;
                //         transition: 0.3s;
                //     }

                //     &:hover {
                //         background: var(--dark-white);

                //         &::before {
                //             background: var(--red);
                //             bottom: -1rem;
                //         }
                //     }
                // }

                // img {
                //     width: 3rem;
                //     height: 3rem;
                //     box-sizing: border-box;
                //     padding: 0.5rem;
                //     border: var(--global-border-width) solid var(--black);
                // }

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

export default function ProjectsSlide() {
    return (
        <Slide color="var(--white)" height="auto">

            <Container>

                <ul id='project-list'>

                    {
                        GetProjectList().map((item) =>
                            <li>
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
                            </li>
                        )
                    }

                </ul>

            </Container>

        </Slide>
    )
}