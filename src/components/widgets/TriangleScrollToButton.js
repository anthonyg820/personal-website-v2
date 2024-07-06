import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import ArrowDownIcon from "../../res/icons/arrow-down.svg";

const Container = styled.div.attrs({ className: "triangle-scroll-to-button" })`
    width: 180px;
    height: 180px;
    position: absolute;
    top: ${({verticalPosition}) => verticalPosition == "top" ? 0 : null};
    bottom: ${({verticalPosition}) => verticalPosition == "bottom" ? 0 : null};
    left: 50%;
    margin: ${({verticalPosition}) => verticalPosition == "top" ? "-90px 0 0 -90px" : "0 0 -90px -90px"};
    z-index: 3;
    display: flex;
    justify-content: flex-start;
    align-items: start;
    transform: ${({verticalPosition}) => verticalPosition == "top" ? "rotate(-135deg)" : "rotate(45deg)"};

    .inner-triangle {
        width: 180px;
        height: 180px;
        border: var(--global-border-width) solid var(--black);
        position: absolute;
        bottom: 0;
        left: 50%;
        margin: 0 0 0 -90px;
        z-index: 2;
        background: var(--white);
        display: flex;
        justify-content: flex-start;
        align-items: start;
        transition: 0.3s;
        cursor: pointer;
        box-sizing: border-box;

        img {
            width: 3rem;
            height: 3rem;
            transform: rotate(-45deg);
            position: relative;
            top: 35px;
            left: 35px;
        }

        &::after {
            content: "BACK TO TOP";
            position: absolute;
            bottom: -2rem;
            right: 30%;
            color: var(--black);
            font-weight: bold;
        }
    }

    .outer-triangle {
        width: 220px;
        height: 220px;
        border: var(--global-border-width) solid var(--red);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: var(--white);
        display: flex;
        transition: 0.3s;
        margin: 80px 0 0 80px;
        cursor: pointer;
        box-sizing: border-box;
    }

    &:hover > .inner-triangle {
        border-width: 12px;
    }

    &:hover > .outer-triangle {
        margin: -20px 0 0 -20px;
    }

    @media screen and (max-width: 600px) {
        display: none;

        .outer-triangle {
            display: none;
        }
    }

    @media screen and (max-height: 500px) {
        display: none;

        .outer-triangle {
            display: none;
        }
    }

    @media screen and (max-width: 800px) and (max-height: 550px) {
        display: none;

        .outer-triangle {
            display: none;
        }
    }
`

export default function TriangleScrollToButton({ scrollTarget, verticalPosition, label }) {
    return (
        <Container
            onClick={() => scroll.scrollTo(scrollTarget, { containerId: "app-content", duration: 1000, delay: 200 })}
            verticalPosition={verticalPosition}
            label={label}
        >

            <div className='outer-triangle'>

            </div>

            <div className='inner-triangle'>
                <img src={ArrowDownIcon} />
            </div>

        </Container>
    )
}