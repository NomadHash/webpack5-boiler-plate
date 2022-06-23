import { Global } from '@emotion/react';
import { ReactElement } from 'react';
import resetCss from './styles/globalStyle';

const App = (): ReactElement => {
    return (
        <div>
            <Global styles={resetCss} />
        </div>
    );
};

export default App;
