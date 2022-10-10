import { motion } from 'framer-motion';
import styled from 'styled-components';

import Heading from '../../helpers/Heading';
import AnimatedText from './AnimatedText';
import FadeIn from '../../helpers/SlowFadeIn';
import BodyText from '../../helpers/BodyText';

import HeroImage from '../../assets/images/amphora-hero.webp';
import backGround from '../../assets/images/space-bg.webp';

const Hero = () => {
    const heroText = [
        { type: 'text', text: 'Amphora' },
        { type: 'text2', text: 'Creative' },
    ];

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
                        {heroText.map((item, index) => {
                            return <AnimatedText {...item} key={index} />;
                        })}
                    </Heading>
                </motion.div>
                <FadeIn>
                    <BodyText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </BodyText>
                </FadeIn>
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
            rgba(0, 0, 0, 1) 100%
        );
        bottom: 0;
        content: '';
        display: block;
        height: 100px;
        left: 0;
        position: absolute;
        width: 100%;
    }
`;

const StyledDiv = styled.div`
    margin: auto;
    width: var(--width-full);
`;

const Figure = styled.div`
    bottom: 0;
    position: absolute;
    right: 10%;
`;

export default Hero;
