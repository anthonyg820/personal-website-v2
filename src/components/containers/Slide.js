import styled from 'styled-components';

const Container = styled.div.attrs({ className: "container-slide" })`
    position: relative;
    width: 100%;
    height: ${({height}) => height ? height : "calc(100dvh - 6rem)"};
    display: flex;
    flex-shrink: 0;
    box-sizing: border-box;
    background: ${({ color }) => color};
    overflow: hidden;

    @media screen and (max-width: ${({freeHeightBreakpoint}) => freeHeightBreakpoint}) {
        height: auto;
    }
`

export default function Slide({ children, height, color, freeHeightBreakpoint }) {
    return (
        <Container height={height} color={color} freeHeightBreakpoint={freeHeightBreakpoint}>

                {children}

        </Container>
    )
}