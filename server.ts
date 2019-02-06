
//N   N  OOO  DDDD  EEEEE       &&        EEEEE X   X PPPP  RRRR  EEEEE  SSSS  SSSS
//NN  N O   O D   D E          &  &       E      X X  P   P R   R E     S     S
//N N N O   O D   D EEE         && &      EEE     X   PPPP  RRRR  EEE    SSS   SSS
//N  NN O   O D   D E          &  &       E      X X  P     R   R E         S     S
//N   N  OOO  DDDD  EEEEE       && &      EEEEE X   X P     R   R EEEEE SSSS  SSSS

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
let app = express();

//W   W EEEEE BBBB  PPPP   AAA   CCCC K   K
//W   W E     B   B P   P A   A C     K  K
//W W W EEE   BBBB  PPPP  AAAAA C     KKK
//WW WW E     B   B P     A   A C     K  K
//W   W EEEEE BBBB  P     A   A  CCCC K   K

let environment: string = process.env.NODE_ENV || 'development';
if(environment.trim().toLowerCase() === 'development') {
    //Paso 1: Se crea y configura el compilador de webpack.
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    const compiler = webpack(webpackConfig);

    //Paso 2: Se adjunta el middleware de desarrollo al compilador y al servidor.
    const webpackDevMiddleware = require('webpack-dev-middleware');
    app.use(webpackDevMiddleware(compiler, {
        logLevel: 'warn', 
        publicPath: webpackConfig.output.publicPath
    }));

    //Paso 3: Se adjunto el middleware "hot" al compilador y al servidor.
    const webpackHotMiddleware = require('webpack-hot-middleware');
    app.use(webpackHotMiddleware(compiler, {
        log: console.log, 
        path: '/__webpack_hmr', 
        heartbeat: 10 * 1000
    }));
}

//U   U  SSSS EEEEE
//U   U S     E
//U   U  SSS  EEE
//U   U     S E
// UUU  SSSS  EEEEE

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname + '/views'));
app.use('/dist', express.static(__dirname + '/dist'));
app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

//U   U N   N H   H  AAA  N   N DDDD  L     EEEEE DDDD
//U   U NN  N H   H A   A NN  N D   D L     E     D   D
//U   U N N N HHHHH AAAAA N N N D   D L     EEE   D   D
//U   U N  NN H   H A   A N  NN D   D L     E     D   D
// UUU  N   N H   H A   A N   N DDDD  LLLLL EEEEE DDDD

process.on('unhandledRejection', (reason, p) => {
	console.log('[SERVER][Unhandled Rejection] At:', p, 'reason:', reason);
});

//EEEEE N   N  CCCC  OOO  DDDD  IIIII N   N  GGGG
//E     NN  N C     O   O D   D   I   NN  N G
//EEE   N N N C     O   O D   D   I   N N N G  GG
//E     N  NN C     O   O D   D   I   N  NN G   G
//EEEEE N   N  CCCC  OOO  DDDD  IIIII N   N  GGGG

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//RRRR  EEEEE  SSSS PPPP  U   U EEEEE  SSSS TTTTT  AAA
//R   R E     S     P   P U   U E     S       T   A   A
//RRRR  EEE    SSS  PPPP  U   U EEE    SSS    T   AAAAA
//R   R E         S P     U   U E         S   T   A   A
//R   R EEEEE SSSS  P      UUU  EEEEE SSSS    T   A   A

app.use((request, response) => {
    response.status(200).render('index.dev.ejs');
});

app.listen(3003, () => {
    console.log('La aplicación está corriendo en el puerto 3003.');
})

/*
░░░░░░░░▄▄█▀▀▄░░░░░░░ 
░░░░░░▄█████▄▄█▄░░░░░ 
░░░░░▄▀██████▄▄██░░░░ 
░░░░░█░█▀░░▄▄▀█░█░░░░ 
░░░░░▄██░░░▀▀░▀░█░░░░ 
░░▄█▀░░▀█░▀▀▀▀▄▀▀█▄░░ 
░▄███░▄░░▀▀▀▀▀▄░███▄░ 
░██████░░░░░░░██████░ 
░▀███▀█████████▀███▀░ 
░░░░▄█▄░▀▀█▀░░░█▄░░░░ 
░▄▄█████▄▀░▀▄█████▄▄░ 
█████████░░░█████████
*/