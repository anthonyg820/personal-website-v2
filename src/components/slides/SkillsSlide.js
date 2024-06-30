import styled from 'styled-components';
import Slide from '../containers/Slide';
import AccentLine from '../widgets/AccentLine';

const Container = styled.div.attrs({ className: "skills-slide" })`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1px;
    background: var(--black);

    .skillblock {
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
                width: 100%;
                height: 3rem;
                border: 1px solid var(--black);
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
            padding-bottom: 2rem;
        }
    }

    @media screen and (max-width: 550px) {
        height: auto;
        grid-template-columns: 1fr;
        grid-template-rows: auto;

        .skillblock {
            padding-bottom: 2rem;
        }
    }
`

// props = 
export default function SkillsSlide({ children }) {
    return (
        <Slide color="var(--white)" freeHeightBreakpoint="980px">

            <Container>

                <section className='skillblock'>

                    <div className='skillblock-content'>

                        <h5> AUTOMATION & SCRIPTING </h5>

                        <AccentLine width="75px" />

                        <ul>

                            <li> Ansible </li>
                            <li> Terraform </li>
                            <li> Terragrunt </li>
                            <li> Terratest </li>
                            <li> Packer </li>
                            <li> GitHub Actions </li>
                            <li> Bash </li>
                            <li> Powershell </li>

                        </ul>

                    </div>

                </section>

                <section className='skillblock'>

                    <div className='skillblock-content'>

                        <h5> DEVELOPMENT </h5>

                        <AccentLine width="75px" />

                        <ul>

                            <li> JavaScript </li>
                            <li> NodeJS </li>
                            <li> ReactJS </li>
                            <li> HTML </li>
                            <li> CSS </li>
                            <li> Java </li>
                            <li> SQL </li>
                            <li> Python </li>

                        </ul>

                    </div>

                </section>

                <section className='skillblock'>

                    <div className='skillblock-content'>

                        <h5> MONITORING & LOGGING </h5>

                        <AccentLine width="75px" />

                        <ul>

                            <li> Grafana </li>
                            <li> DataDog </li>
                            <li> AppDynamics </li>
                            <li> Dynatrace </li>
                            <li> Open Telemetry </li>
                            <li> Splunk </li>
                            <li> Kibana </li>
                            <li> NXLog </li>

                        </ul>

                    </div>

                </section>

                <section className='skillblock'>

                    <div className='skillblock-content'>

                        <h5> OTHER </h5>

                        <AccentLine width="75px" />

                        <ul>

                            <li> Google Cloud Platform (GCP) </li>
                            <li> Docker </li>
                            <li> Kubernetes </li>
                            <li> Linux </li>
                            <li> Windows </li>
                            <li> PagerDuty </li>
                            <li> Git </li>
                            <li> Jira </li>

                        </ul>

                    </div>

                </section>

            </Container>

        </Slide>
    )
}