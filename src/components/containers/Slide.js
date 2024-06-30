import styled from 'styled-components';

const Container = styled.div.attrs({ className: "container-slide" })`
    width: 100%;
    height: 100%;
    display: flex;
    flex-shrink: 0;
    box-sizing: border-box;
    background: ${({ color }) => color};

    @media screen and (max-width: ${({freeHeightBreakpoint}) => freeHeightBreakpoint}) {
        height: auto;
    }
`

// props = 
export default function Slide({ children, color, freeHeightBreakpoint }) {
    return (
        <Container color={color} freeHeightBreakpoint={freeHeightBreakpoint}>

                {children}

        </Container>
    )
}