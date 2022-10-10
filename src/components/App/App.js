import '../../assets/styles/reset.css';

import { GlobalStyles } from '../../constants';

import Hero from '../Hero';
import Portfolio from '../Portfolio';
import Information from '../Information';
import Contact from '../Contact';

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Hero />
            <Portfolio />
            <Information />
            <Contact />
        </>
    );
};

export default App;
