import { motion } from 'framer-motion';
import styled from 'styled-components';

import Heading from '../Heading';
import AnimatedText from './AnimatedText';
import BodyText from '../BodyText';

import HeroImage from '../../assets/images/amphora-hero.webp';
import backGround from '../../assets/images/space-bg.webp';

const Hero = () => {
    const placeholderText = [{ type: 'heading1', text: 'Amphora Creative' }];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025,
            },
        },
    };

    return (
        <Wrapper>
            <StyledDiv>
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={container}>
                    <Heading>
                        {placeholderText.map((item, index) => {
                            return <AnimatedText {...item} key={index} />;
                        })}
                    </Heading>
                </motion.div>
                <BodyText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </BodyText>
                <Figure>
                    <img src={HeroImage} alt='Hero' width='596' height='556' />
                </Figure>
            </StyledDiv>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    align-items: center;
    background: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 1) 75%
        ),
        url(${backGround}) center center/cover;
    display: flex;
    justify-content: flex-start;
    min-height: 100vh;
    position: relative;

    ::after {
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.75) 100%
        );
        bottom: 0;
        content: '';
        display: block;
        height: 60px;
        left: 0;
        position: absolute;
        width: 100%;
    }
`;

const StyledDiv = styled.div`
    margin: auto;
    width: var(--site-width);
`;

const Figure = styled.div`
    bottom: 0;
    position: absolute;
    right: 10%;
`;

export default Hero;