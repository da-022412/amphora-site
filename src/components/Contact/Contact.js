import styled from 'styled-components';

import BodyText from '../../helpers/BodyText';

const Contact = () => {
    return (
        <Wrapper>
            <BodyText>AMPHORA CREATIVE C. 2022</BodyText>
            <BodyText>HELLO@AMPHORACREATIVE.COM</BodyText>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    align-items: center;
    border-top: 1px solid #fff;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 32px 0 16px;
    width: var(--width-full);
`;

export default Contact;
