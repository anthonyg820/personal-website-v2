import styled from 'styled-components';

const Container = styled.a.attrs({ className: "modern-button" })`
    height: 3rem;
    position: relative;
    box-sizing: border-box;
    border: var(--global-border-width) solid var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    cursor: ${({href}) => href ? "pointer" : null };

    &::before {
        content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        transition: 0.3s;
    }

    &:hover {
        background: ${({href}) => href ? "var(--dark-white)" : null };

        &::before {
            background: ${({href}) => href ? "var(--red)" : null };
            bottom: ${({href}) => href ? "-1rem" : null };
        }
    }

    img {
        height: 100%;
        box-sizing: border-box;
        margin-right: ${({ text }) => text ? "0.5rem" : null};
    }
`

export default function ModernButton({ icon, text, link }) {
    return (
        <Container
            icon={icon}
            text={text}
            tabIndex={link ? null : 0}
            role={link ? null : 'button'}
            href={link}
            target='_blank'
        >

            {icon ? <img src={icon} /> : null}
            {text ? text : null}

        </Container>
    )
}