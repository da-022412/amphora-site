import styled from 'styled-components';

const BodyText = ({ children }) => {
    return <Wrapper dangerouslySetInnerHTML={{ __html: children }}></Wrapper>;
};

const Wrapper = styled.p`
    color: var(--text-color);
    font-family: var(--font-primary);
    font-size: var(--text-body);
    padding-bottom: 16px;
    max-width: 60ch;
`;

export default BodyText;
