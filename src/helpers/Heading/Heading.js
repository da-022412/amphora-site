import styled from 'styled-components';

const Heading = ({ level, ...rest }) => {
    return <StyledHeading as={`h${level}`} {...rest} />;
};

const StyledHeading = styled.h1`
    color: var(--text-color);
    font-family: var(--font-heading);
    font-size: var(--heading-1);
    font-weight: var(--heading-weight);
    line-height: 1.2;
`;

Heading.defaultProps = {
    level: 1,
};

export default Heading;
