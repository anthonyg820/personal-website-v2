import styled from 'styled-components';

const Container = styled.div.attrs({ className: "accent-line" })`
    width: ${({width}) => width};
    height: 1px;
    background: ${({color}) => color ? color : "var(--black)"};
`

// props = 
export default function AccentLine({width, color}) {
    return (
        <Container width={width} color={color}>



        </Container>
    )
}