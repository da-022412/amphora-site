import styled from 'styled-components';

const BodyText = ({ children }) => {
    return <Wrapper dangerouslySetInnerHTML={{ __html: children }}></Wrapper>;
};

const Wrapper = styled.p`
    color: var(--text-color);
    font-family: var(--font-primary);
    font-size: var(--text-body);
`;

export default BodyText;
