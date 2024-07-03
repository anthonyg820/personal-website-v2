import styled from 'styled-components';
import Slide from '../containers/Slide';
import AccentLine from '../widgets/AccentLine';
import GetEducationList from '../../data/education-list';

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
                box-sizing: border-box;
                border: 1px solid var(--black);
                padding: 1rem;
                border-radius: 1rem 0 1rem 0;
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
    return (
        <Slide color="var(--white)" freeHeightBreakpoint="980px">

            <Container>

                <ul id='education-list'>

                    {
                        GetEducationList().map((item) =>
                            <li>
                                <img src={item.icon} />
                                <p> {item.type} </p>
                                <AccentLine width='75px' />
                                <h4> {item.name} </h4>
                                <AccentLine width='75px' />
                                <h6> {item.date.toUpperCase()} </h6>
                            </li>
                        )
                    }

                </ul>

            </Container>

        </Slide>
    )
}