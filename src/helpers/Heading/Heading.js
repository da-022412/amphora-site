import styled from 'styled-components';

const Heading = ({ level, ...rest }) => {
    return <StyledHeading as={`h${level}`} {...rest} />;
};

const StyledHeading = styled.h1`
    color: var(--color-text);
    font-family: ${(props) =>
        props.level === 3 ? 'var(--primary-font)' : 'var(--heading-font)'};
    font-size: var(--heading-1);
    font-weight: var(--heading-weight);
`;

Heading.defaultProps = {
    level: 1,
};

export default Heading;
