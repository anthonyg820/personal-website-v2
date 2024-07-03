import styled from 'styled-components';
import Slide from '../containers/Slide';
import AccentLine from '../widgets/AccentLine';
import GetSkillsList from '../../data/skills-list';

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
            padding-bottom: 3rem;
        }
    }

    @media screen and (max-width: 550px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`

export default function SkillsSlide({ children }) {
    return (
        <Slide color="var(--white)" freeHeightBreakpoint="980px">

            <Container>

                {
                    GetSkillsList().map((item) =>
                        <section className='skillblock'>

                            <div className='skillblock-content'>

                                <img src={item.icon} />
                                <h5> {item.pillar} </h5>
                                <AccentLine width="75px" />
                                <ul> 
                                    { item.skills.map((skill) =><li> {skill} </li>) } 
                                </ul>

                            </div>

                        </section>
                    )
                }

            </Container>

        </Slide>
    )
}