import styled from 'styled-components';

import Heading from '../../helpers/Heading';

const Portfolio = () => {
    return (
        <Wrapper>
            <StyledHeading level={3}>Selected Clients</StyledHeading>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    min-height: 100vh;
    margin: auto;
    padding: var(--space-lg-padding);
    width: var(--width-full);
`;

const StyledHeading = styled(Heading)`
    font-family: var(--font-primary);
    font-size: var(--heading-3);
`;

export default Portfolio;
