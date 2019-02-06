// GGGG L      OOO  BBBB   AAA  L
//G     L     O   O B   B A   A L
//G  GG L     O   O BBBB  AAAAA L
//G   G L     O   O B   B A   A L
// GGGG LLLLL  OOO  BBBB  A   A LLLLL

declare global {
    interface NodeModule {
        hot: {
            accept(path?: string, callback?: () => void): void;
        }
    }
}

//IIIII M   M PPPP   OOO  RRRR  TTTTT  AAA   CCCC IIIII  OOO  N   N EEEEE  SSSS
//  I   MM MM P   P O   O R   R   T   A   A C       I   O   O NN  N E     S
//  I   M M M PPPP  O   O RRRR    T   AAAAA C       I   O   O N N N EEE    SSS
//  I   M   M P     O   O R   R   T   A   A C       I   O   O N  NN E         S
//IIIII M   M P      OOO  R   R   T   A   A  CCCC IIIII  OOO  N   N EEEEE SSSS

//Módulos generales.
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

class Routes extends Component {
    render() {
        return(
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Routes/>, document.getElementById('root'));

let environment: string = process.env.NODE_ENV || 'development';
if(environment.trim().toLowerCase() === 'development' && module.hot) {
    module.hot.accept();
}