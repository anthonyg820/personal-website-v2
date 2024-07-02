import styled from 'styled-components';
import Slide from '../containers/Slide';
import AccentLine from '../widgets/AccentLine';
import UKGLogo from "../../res/images/UKG2.svg";
import Texture from "../../res/images/cube-texture.png";

const Container = styled.div.attrs({ className: "skills-slide" })`
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
        border-bottom: 1px solid var(--ukg-teal);
        flex-shrink: 0;
        background: var(--ukg-teal);
        color: var(--ukg-green);

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
        background: url('${Texture}');
    }

    section {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .slide-half-content {
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 2rem;
            // background: red;
            box-sizing: border-box;
            padding: 2rem;
        }
    }

    #left-of-content {
        border-right: 1px solid var(--ukg-teal);

        .slide-half-content {
            background: var(--ukg-teal);
            border-radius: 2rem;
            color: var(--ukg-green);
        }

        img {
            width: 200px;
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
            background: var(--ukg-yellow);
            color: var(--ukg-green);
            font-weight: bold;
            transition: 0.3s;

            &:hover {
                background: var(--ukg-light-yellow);
            }
        }
    }

    #right-of-content {

        .slide-half-content {
            border: 1px solid var(--ukg-teal);
            background:var(--ukg-green);
        }
        
        ul {
            list-style: none;
            max-height: 350px;
            overflow-y: auto;
            box-sizing: border-box;
            padding: 0 1rem;
            // background: var(--ukg-teal);
        }

        li {
            font-size: 1.2rem;
            line-height: 1.8rem;
            border-bottom: 1px solid var(--ukg-teal);
            padding: 1rem 0;
            // color: var(--ukg-green);
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
                border-left: 1px solid var(--ukg-teal);
            }
        }

        #slide-content {
            flex-direction: column;
            text-align: center;
        }

        section {
            width: 100%;
            height: auto;
            padding: 4rem 2rem;
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

export default function UKGSlide({ children }) {
    return (
        <Slide color="var(--ukg-green)" freeHeightBreakpoint="600px">

            <Container>

                <header>

                    <div className='header-half' id='left-of-header'>

                        <h5> SEP. 2021 - PRESENT </h5>

                    </div>

                    <div className='header-half' id='right-of-header'>

                        <h5> SR. SITE RELIABILITY ENGINEER </h5>

                    </div>

                </header>

                <div id='slide-content'>

                    <section id='left-of-content'>

                        <div className='slide-half-content'>

                            <img src={UKGLogo} />
                            <i> <h4> "Our purpose is people" </h4> </i>
                            <p> UKG (Ultimate Kronos Group) is a SaaS company offering HR, payroll, and workforce management solutions. </p>
                            <a target="_blank" rel="noreferrer" href='https://www.ukg.com'> Learn more </a>

                        </div>

                    </section>

                    <section id='right-of-content'>

                        <div className='slide-half-content'>

                            <h4> IMPACT </h4>

                            <AccentLine width="150px" color="var(--ukg-teal)" />

                            <ul>

                                <li>
                                    Leveraged GitHub Actions, Ansible, and Terraform to create a
                                    CI/CD pipeline, reducing manual deployment times by 70%.
                                </li>

                                <li>
                                    Created a suite of continuous integration tests that improved
                                    pipeline stability by 50%.
                                </li>

                                <li>
                                    Utilized GitHub Actions and Terragrunt to create a composable
                                    and scalable continuous delivery pipeline.
                                </li>

                                <li>
                                    Instrumented and configured monitoring tools like DataDog, Splunk,
                                    Kibana, and Grafana to over 600 virtual machines.
                                </li>

                                <li>
                                    Used Grafana to create a collection of interconnected
                                    observability dashboards to reduce MTTR of production issues
                                    by 40%.
                                </li>

                                <li>
                                    Made use of DataDog to analyze historical metric data and
                                    define SLIs and SLOs for numerous applications.
                                </li>

                                <li>
                                    Led the migration of 30+ NGINX load balancers from CentOS to
                                    Rocky Linux 9.
                                </li>

                                <li>
                                    Programmed a web application that automated the generation
                                    of performance reports for target customer environments.
                                </li>

                                <li>
                                    Participated in PagerDuty on-call rotations, resolving over 100
                                    production issues.
                                </li>

                            </ul>

                        </div>

                    </section>

                </div>

            </Container>

        </Slide>
    )
}