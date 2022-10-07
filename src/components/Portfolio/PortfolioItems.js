import styled from 'styled-components';

import Heading from '../../helpers/Heading';

const PortfolioItems = ({ items }) => {
    return (
        <Wrapper>
            {items.map(({ title, img, width, height }, index) => (
                <StyledDiv key={index}>
                    <StyledFigure>
                        <img
                            src={img}
                            alt='Client Logo'
                            width={width}
                            height={height}
                        />
                    </StyledFigure>
                    <StyledHeading level={3}>{title}</StyledHeading>
                </StyledDiv>
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border-top: 1px solid #fff;
    margin-left: auto;
    max-width: 70%;
`;

const StyledFigure = styled.figure`
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20%;

    img {
        display: block;
        height: auto;
        opacity: 0;
        transition: visibility 0s 0.3s, opacity 0.3s linear;
        visibility: hidden;
    }
`;

const StyledDiv = styled.div`
    align-items: center;
    border-bottom: 1px solid #fff;
    justify-content: space-between;
    padding: 32px 0;
    position: relative;

    &:hover img {
        opacity: 1;
        transition: opacity 0.3s linear;
        visibility: visible;
    }
`;

const StyledHeading = styled(Heading)`
    font-size: var(--heading-3);
    text-align: right;
`;

export default PortfolioItems;
