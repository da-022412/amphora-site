import styled from 'styled-components';

import Heading from '../../helpers/Heading';
import PortfolioItems from './PortfolioItems';

import pattern from '../../assets/images/pattern-sm-steez.webp';
import nielsen from '../../assets/images/nielsen-logo.webp';
import kaplan from '../../assets/images/kaplan-logo.webp';
import equinox from '../../assets/images/equinox-logo.webp';
import nwf from '../../assets/images/nwf-logo.webp';

const CONTENT = [
    {
        title: 'Nielsen',
        img: nielsen,
        width: '500',
        height: '76',
    },
    {
        title: 'Kaplan',
        img: kaplan,
        width: '500',
        height: '258',
    },
    {
        title: 'Equinox',
        img: equinox,
        width: '500',
        height: '95',
    },
    {
        title: 'National Wildlife Federation',
        img: nwf,
        width: '500',
        height: '198',
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
    justify-content: space-between;
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
