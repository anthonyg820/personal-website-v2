import styled from 'styled-components';

const Container = styled.div.attrs({ className: "accent-line" })`
    width: ${({vertical, width}) => vertical ? "var(--global-border-width)" : width};
    height: ${({vertical, height}) => vertical ? height : "var(--global-border-width)"};
    background: ${({color}) => color ? color : "var(--black)"};
`

export default function AccentLine({vertical, width, height, color}) {
    return (
        <Container vertical={vertical} width={width} height={height} color={color}>  </Container>
    )
}