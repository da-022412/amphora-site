import styled from 'styled-components';

import Heading from '../../helpers/Heading';
import PortfolioItems from './PortfolioItems';

import pattern from '../../assets/images/pattern-sm-steez.webp';
import nielsen from '../../assets/images/nielsen-logo.webp';
import kaplan from '../../assets/images/kaplan-logo.webp';
import equinox from '../../assets/images/equinox-logo.webp';
import dailypay from '../../assets/images/dailypay-logo.webp';
import halo from '../../assets/images/halo-logo.webp';

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
        title: 'DailyPay',
        img: dailypay,
        width: '500',
        height: '124',
    },
    {
        title: 'Halo',
        img: halo,
        width: '500',
        height: '250',
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
    position: relative;

    &:after {
        bottom: -110%;
        content: url(${pattern});
        display: block;
        left: 0;
        position: absolute;
    }
`;

export default Portfolio;
