import styled from 'styled-components';
import Slide from '../containers/Slide';
import AccentLine from '../widgets/AccentLine';
import TerraformIcon from '../../res/icons/terraform.svg';
import AppdynamicsIcon from '../../res/icons/appdynamics.svg';
import DockerIcon from '../../res/icons/docker-filled.svg';
import GCPIcon from '../../res/icons/gcp.svg';
import GlobalIcon from '../../res/icons/global.svg';
import UniversityIcon from '../../res/icons/education-black-filled.svg';

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
        gap: 1px;
        background: var(--black);
        text-align: center;

        li {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            background: var(--white);

            img {
                height: 6rem;
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

export default function EducationSlide({ children }) {
    return (
        <Slide color="var(--white)" freeHeightBreakpoint="980px">

            <Container>

                <ul id='education-list'>

                    <li>
                        <img src={DockerIcon} />
                        <h6> In Progress </h6>
                        <AccentLine width='75px' />
                        <h4> Docker Certified Associate (DCA) </h4>
                        <AccentLine width='75px' />
                        <p> CERTIFICATE </p>
                    </li>

                    <li>
                        <img src={TerraformIcon} />
                        <h6> In Progress </h6>
                        <AccentLine width='75px' />
                        <h4> Hashicorp Certified Terraform Associate (003) </h4>
                        <AccentLine width='75px' />
                        <p> CERTIFICATE </p>
                    </li>

                    <li>
                        <img src={GCPIcon} />
                        <h6> Dec. 2023 </h6>
                        <AccentLine width='75px' />
                        <h4> Google Cloud Certified Associate Cloud Engineer </h4>
                        <AccentLine width='75px' />
                        <p> CERTIFICATE </p>
                    </li>

                    <li>
                        <img src={GlobalIcon} />
                        <h6> Aug. 2021 </h6>
                        <AccentLine width='75px' />
                        <h4> CompTIA Network+ </h4>
                        <AccentLine width='75px' />
                        <p> CERTIFICATE </p>
                    </li>

                    <li>
                        <img src={AppdynamicsIcon} />
                        <h6> Aug. 2020 </h6>
                        <AccentLine width='75px' />
                        <h4> AppDynamics Associate Performance Analyst </h4>
                        <AccentLine width='75px' />
                        <p> CERTIFICATE </p>
                    </li>

                    <li>
                        <img src={UniversityIcon} />
                        <h6> Dec. 2018 </h6>
                        <AccentLine width='75px' />
                        <h4> B.S in Computer Engineering from FIU </h4>
                        <AccentLine width='75px' />
                        <p> DEGREE </p>
                    </li>

                </ul>

            </Container>

        </Slide>
    )
}