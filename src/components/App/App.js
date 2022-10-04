import '../../assets/styles/reset.css';

import { GlobalStyles } from '../../constants';

import Hero from '../Hero';
import Portfolio from '../Portfolio';

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Hero />
            <Portfolio />
        </>
    );
};

export default App;
