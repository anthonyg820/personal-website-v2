import styled from 'styled-components';

const Container = styled.div.attrs({ className: "accent-square-group" })`
    position: absolute;
    top: ${({ top }) => top ? top + "px" : null};
    bottom: ${({ bottom }) => bottom ? bottom + "px" : null};
    left: ${({ left }) => left ? left + "px" : null};    
    right: ${({ right }) => right ? right + "px" : null};    
    width: ${({ width }) => width ? width + "px" : "30px"};
    height: ${({ height }) => height ? height + "px" : "30px"};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--black);

    div {
        border: 1px solid var(--black);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .square-2 {
        width: ${({ width }) => width ? width - 12 + "px" : "22px"};
        height: ${({ height }) => height ? height- 12 + "px" : "22px"};
    }

    .square-3 {
        width: ${({ width }) => width ? width - 24 + "px" : "14px"};
        height: ${({ height }) => height ? height- 24 + "px" : "14px"};
    }
`

export default function AccentSquareGroup({width, height, top, left, right, bottom}) {
    return (
        <Container width={width} height={height} top={top} left={left} right={right} bottom={bottom}>

            <div className='square-2'>
                <div className='square-3'></div>
            </div>

        </Container>
    )
}