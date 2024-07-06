import styled from 'styled-components';
import { globalStore } from '../../AppManager';

const Container = styled.div.attrs({ className: "menu-button" })`
    position: fixed;
    top: 1.5rem;
    left: 2rem;
    width: 3rem;
    height: 3rem;
    border-top: 1px solid var(--black);
    border-bottom: 1px solid var(--black);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: var(--white);
    transition: 0.3s;
    z-index: 10;

    .menu-button-line {
        position: relative;
        width: 70%;
        height: 0.25rem;
        background: ${({ menuIsVisible }) => menuIsVisible ? "var(--red)" : "var(--black)"};
        flex-shrink: 0;
        transition: 0.3s;
    }
    
    .menu-button-line:nth-of-type(1) {
        transform: ${({ menuIsVisible }) => menuIsVisible ? "rotate(45deg)" : null};
        top: ${({ menuIsVisible }) => menuIsVisible ? "7px" : null};
    }

    .menu-button-line:nth-of-type(2) {
        display: ${({ menuIsVisible }) => menuIsVisible ? "none" : null};
    }

    .menu-button-line:nth-of-type(3) {
        transform: ${({ menuIsVisible }) => menuIsVisible ? "rotate(-45deg)" : null};
        bottom: ${({ menuIsVisible }) => menuIsVisible ? "7px" : null};
    }
`

export default function MenuButton() {

    const { visible, setVisible } = globalStore((state) => state.navigation);

    return (
        <Container menuIsVisible={visible} onClick={visible ? () => setVisible(false) : () => setVisible(true)}>

            <div className='menu-button-line'></div>
            <div className='menu-button-line'></div>
            <div className='menu-button-line'></div>

        </Container>
    )
}