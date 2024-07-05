import styled from 'styled-components';

const Container = styled.div.attrs({ className: "accent-line" })`
    width: ${({width}) => width};
    height: var(--global-border-width);
    background: ${({color}) => color ? color : "var(--black)"};
`

export default function AccentLine({width, color}) {
    return (
        <Container width={width} color={color}>  </Container>
    )
}