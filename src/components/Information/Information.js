import styled from 'styled-components';

import Heading from '../../helpers/Heading';
import BodyText from '../../helpers/BodyText';

import backGround from '../../assets/images/information-section-img.webp';

const Information = () => {
    return (
        <StyledSection>
            <Wrapper>
                <StyledHeading level={3}>
                    Amphora Creative is a mobile-first creative studio. Our
                    design practice specializes in digitally-native visual
                    design and our in-house engineers build everything that we
                    design.
                </StyledHeading>
                <BodyText>
                    We are a design and engineering studio. Our team brings
                    specialized knowledge that allows us to craft modern digital
                    experiences with purpose. People call us when they need an
                    experienced team that will deliver something great every
                    single time.
                </BodyText>
                <BodyText>
                    We're especially known for our unique approach to
                    redesigning complex websites and for building new products
                    from ideation to launch.
                </BodyText>
            </Wrapper>
        </StyledSection>
    );
};

const StyledSection = styled.section`
    background: url(${backGround}) right 80% / auto no-repeat;
`;

const Wrapper = styled.div`
    margin: auto;
    padding: 250px 0 120px;
    width: var(--width-full);
`;

const StyledHeading = styled(Heading)`
    font-size: var(--heading-3);
    padding-bottom: 32px;
    width: 80%;
`;

export default Information;
