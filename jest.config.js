//JJJJJ  SSSS DDDD   OOO  M   M
//    J S     D   D O   O MM MM
//    J  SSS  D   D O   O M M M
//J   J     S D   D O   O M   M
// JJJ  SSSS  DDDD   OOO  M   M

//NOTA [1]: Se requiere de un DOM "virtual" para poder utilizar el módulo "mount" en ENZYME.
//https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md

//NOTA [2]: Al parecer se debe utilizar la nomenclatura de Node.JS, es decir "require" en lugar de "import" (°~°).
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>');
const { window } = dom;

window.addEventListener('resize', function(event) {
    //console.log('[JSDOM][WINDOW][EVENT][resize] ', event);
});

window.addEventListener('scroll', function(event) {
    //console.log('[JSDOM][WINDOW][EVENT][scroll] ', event);
});

window.alert = function(msg) {
    console.log('[JSDOM][WINDOW][EVENT][alert] - ', msg);
};

window.resizeTo = function(height, width) {
    //console.log(`[JSDOM][WINDOW][EVENT][alert] Height: ${height}, Width: ${width}.`);
    window.innerHeight = height;
    window.innerWidth = width;
};

global['Event'] = window.Event; //JSDOM.Event;

global.window = window;
global.document = window.document
global.navigator = {
    userAgent: 'node.js',
};

//Ejemplo:
//https://github.com/hex-fire/Sample-1525/blob/master/__test__/setupFile.js

module.exports = {
    collectCoverageFrom: [
        "src/**/**.{js,jsx,ts,tsx}",
        "!bin/**",
        "!node_modules/**",
        "!src/app.tsx",
        "!src/client.tsx",
        "!src/routes.ts",
        "!src/storybooks/**",
        "!src/icons/icons/**"
    ],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    preset: "ts-jest",
    roots: [
        "<rootDir>"
    ],
    setupFilesAfterEnv: ["./jest.config.js"],
    testEnvironment: "node",
    testMatch: ["**/src/**/*.test.[jt]s?(x)"],
    testPathIgnorePatterns: [
        "<rootDir>/bin/",
        "<rootDir>/node_modules/",
        "<rootDir>/lib/"
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    }
};