import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { globalStore } from '../../AppManager';
import { useEffect } from 'react';
import GetNavigationList from '../../data/navigation-list';
import HomeIcon from "../../res/icons/home.svg"

const Container = styled.nav.attrs({ className: "main-nav" })`
    position: fixed;
    width: ${({ menuIsVisible }) => menuIsVisible ? "7rem" : "0"};
    height: 100dvh;
    top: 0;
    left: 0;
    background: var(--white);
    flex-shrink: 0;
    transition: 0.3s;
    overflow: hidden;
    box-sizing: border-box;
    border-right: 1px solid var(--black);
    z-index: 5;

    #nav-content {
        width: 7rem;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        justify-content: center;

        .nav-item {
            width: 80%;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            img {
                width: 3rem;
                height: 3rem;
                box-sizing: border-box;
                padding: 0.5rem;
                border-bottom: 1px solid var(--black);
                border-top: 1px solid transparent;
                border-left: 1px solid transparent;
                border-right: 1px solid transparent;
                transition: 0.3s;
            }

            h6 {
                color: var(--black);
            }

            &:hover img {
                border-color: var(--black);
            }
        }

        .active {
            img {
                background: var(--dark-white);
                border-color: var(--black);
            }
        }
    }
`

export default function MainNav() {

    const { visible, setVisible } = globalStore((state) => state.navigation);

    useEffect(() => {
        let section_headers = document.getElementsByClassName("section-header");

        for (var i = 0; i < section_headers.length; i++)
            section_headers[i].id = `section-header${i + 1}`;
    }, [])

    return (
        <Container menuIsVisible={visible}>

            <div id='nav-content'>

                <Link
                    activeClass='active'
                    containerId='app-content'
                    spy={true}
                    smooth={true}
                    duration={1000}
                    className='nav-item'
                    onClick={() => {
                        scroll.scrollTo(0, { containerId: 'app-content', duration: 1000, delay: 300 }); setVisible(false)
                    }
                    }>

                    <img src={HomeIcon} />
                    <h6> Home </h6>

                </Link>

                {
                    GetNavigationList().map((item) =>
                        <Link
                            activeClass='active'
                            containerId='app-content'
                            to={item.to}
                            spy={true}
                            smooth={true}
                            duration={1000}
                            delay={300}
                            className='nav-item'
                            onClick={() => setVisible(false)}>

                            <img src={item.icon} />
                            <h6> {item.text} </h6>

                        </Link>
                    )
                }

            </div>

        </Container>
    )
}