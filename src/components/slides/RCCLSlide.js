import styled from 'styled-components';
import Slide from '../containers/Slide';
import AccentLine from '../widgets/AccentLine';
import RCCLLogo from "../../res/images/RCCL.svg";
import Texture from "../../res/images/cube-texture.png";

const Container = styled.div.attrs({ className: "rccl-slide" })`
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
        border-bottom: 1px solid var(--rccl-navy);
        flex-shrink: 0;
        background: var(--rccl-navy);
        color: var(--white);

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
        background-image: url('${Texture}');
        background-position: center;
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
        border-right: 1px solid var(--rccl-navy);

        .slide-half-content {
            background: var(--rccl-navy);
            border-radius: 2rem;
            color: var(--white);
        }

        img {
            width: 400px;
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
            background: var(--rccl-gold);
            color: var(--rccl-navy);
            font-weight: bold;
            transition: 0.3s;

            &:hover {
                background: var(--rccl-light-gold);
            }
        }
    }

    #right-of-content {

        .slide-half-content {
            border: 1px solid var(--rccl-navy);
            background:var(--rccl-blue);
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
            border-bottom: 1px solid var(--rccl-navy);
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
                font-size: 2.6rem;
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
                border-left: 1px solid var(--rccl-navy);
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
            border-bottom: 1px solid var(--rccl-navy);
        }

        #right-of-content {
            ul {
                max-height: none;
            }
        }
    }
`

export default function RCCLSlide({ children }) {
    return (
        <Slide color="var(--rccl-blue)" freeHeightBreakpoint="600px">

            <Container>

                <header>

                    <div className='header-half' id='left-of-header'>

                        <h5> JAN. 2019 - SEP. 2021 </h5>

                    </div>

                    <div className='header-half' id='right-of-header'>

                        <h5> SITE RELIABILITY ENGINEER </h5>

                    </div>

                </header>

                <div id='slide-content'>

                    <section id='left-of-content'>

                        <div className='slide-half-content'>

                            <img src={RCCLLogo} />
                            <h4>
                                Turning the Vacation of a Lifetime
                                into a Lifetime of Vacations
                            </h4>
                            <p> RCG is the parent company to Royal Caribbean International, Celebrity Cruises, and SilverSea. </p>
                            <a target="_blank" rel="noreferrer" href='https://www.royalcaribbeangroup.com'> Learn more </a>

                        </div>

                    </section>

                    <section id='right-of-content'>

                        <div className='slide-half-content'>

                            <h4> IMPACT </h4>

                            <AccentLine width="150px" color="var(--rccl-navy)" />

                            <ul>

                                <li>
                                    Built a web application using ReactJS, NodeJS, and Ansible
                                    that automated the deployment of AppDynamics agents to a
                                    fleet of 60+ cruise ships.
                                </li>

                                <li>
                                    Deployed and managed APM agents in Kubernetes/Openshift
                                    environments.
                                </li>

                                <li>
                                    Implemented metric-based dashboards that tied into incident
                                    response systems like PagerDuty, lowering MTTA and MTTR by
                                    60% and 30% respectively.
                                </li>

                                <li>
                                    Created a web application to retrieve sailing history for a guest
                                    and provided it to tier-1 customer support, reducing toil by 20%.
                                </li>

                                <li>
                                    Leveraged AppDynamics to inspect application performance
                                    trends and determine SLIs and SLOs for various software.
                                </li>

                                <li>
                                    Utilized AppDynamics, PagerDuty, and bash/powershell to
                                    create automated remediation scripts to resolve more than 200
                                    recurring issues.
                                </li>

                                <li>
                                    Took part in PagerDuty on-call shifts, resolving 200+ customer
                                    issues for ships located in various parts of the world.
                                </li>

                            </ul>

                        </div>

                    </section>

                </div>

            </Container>

        </Slide>
    )
}