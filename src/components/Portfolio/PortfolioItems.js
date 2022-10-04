import styled from 'styled-components';

import selectedMedia from '../../assets/images/selected-clients-img.webp';

import Heading from '../../helpers/Heading';
import BodyText from '../../helpers/BodyText';

const PortfolioItems = ({ items }) => {
    return (
        <Wrapper>
            <StyledFigure>
                <img
                    src={selectedMedia}
                    alt='Selected Clients'
                    width='387'
                    height='660'
                />
            </StyledFigure>
            <StyledDiv>
                <Heading level={2}>Nielsen</Heading>
                <StyledHeading level={4}>NYC</StyledHeading>
                <BodyText>
                    A global leader in audience insights, data and analytics,
                    Nielsen shapes the future of media with accurate measurement
                    of what people listen to and watch.
                </BodyText>
            </StyledDiv>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: var(--width-md);
`;

const StyledFigure = styled.figure`
    flex: 0 0 40%;

    img {
        height: auto;
        width: 100%;
    }
`;

const StyledDiv = styled.div`
    flex: 0 0 50%;
`;

const StyledHeading = styled(Heading)`
    font-family: var(--font-primary);
    font-size: var(--heading-4);
    padding-bottom: 28px;
`;

export default PortfolioItems;
