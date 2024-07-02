import styled from 'styled-components';

const Container = styled.div.attrs({ className: "container-slide" })`
    position: relative;
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-shrink: 0;
    box-sizing: border-box;
    background: ${({ color }) => color};
    overflow: hidden;

    @media screen and (max-width: ${({freeHeightBreakpoint}) => freeHeightBreakpoint}) {
        height: auto;
    }
`

export default function Slide({ children, color, freeHeightBreakpoint }) {
    return (
        <Container color={color} freeHeightBreakpoint={freeHeightBreakpoint}>

                {children}

        </Container>
    )
}