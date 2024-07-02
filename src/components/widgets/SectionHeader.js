import styled from 'styled-components';

const Container = styled.div.attrs({ className: "section-header"})`
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid var(--black);
    border-bottom: 2px solid var(--black);
    background: var(--black);
    color: var(--white);
`

export default function SectionHeader({title, id}) {
    return (
        <Container id={id} >

            <h2> {title} </h2>

        </Container>
    )
}