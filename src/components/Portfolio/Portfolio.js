import styled from 'styled-components';

import Heading from '../../helpers/Heading';
import PortfolioItems from './PortfolioItems';

import pattern from '../../assets/images/pattern-sm-steez.webp';

const CONTENT = [
    {
        title: 'Nielsen',
        location: 'NYC',
        content:
            'A global leader in audience insights, data and analytics, Nielsen shapes the future of media with accurate measurement of what people listen to and watch.',
    },
    {
        title: 'Kaplan',
        location: 'LA',
        content:
            'Kaplan is the leading global provider of educational programs with comprehensive learning strategies and courses to help anyone succeed.',
    },
    {
        title: 'Halo',
        location: 'NYC',
        content:
            'Replace your dated dog fence, GPS collar, activity tracker, & training collar with one smart system. Shop wireless dog fence solution from Halo.',
    },
    {
        title: 'Equinox',
        location: 'NYC',
        content:
            'Equinox is a temple of well-being, featuring world-class personal trainers, group fitness classes, and spas. Voted Best Gym in America by Fitness Magazine.',
    },
];

const Portfolio = () => {
    return (
        <Wrapper>
            <StyledHeading level={3}>
                Selected
                <br />
                Clients
            </StyledHeading>
            <PortfolioItems items={CONTENT} />
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

    &:after {
        content: url(${pattern});
        display: block;
    }
`;

export default Portfolio;
