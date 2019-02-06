//Módulos genéricos.
import React, { Component } from 'react';

import StorybookVol1 from './storybooks/storybook-vol1';

//RRRR  U   U TTTTT  AAA   SSSS
//R   R U   U   T   A   A S
//RRRR  U   U   T   AAAAA  SSS
//R   R U   U   T   A   A     S
//R   R  UUU    T   A   A SSSS

const routes = [
    { 
        componentToRender: StorybookVol1,
        exact: true,
        isPrivate: false,
        path: '/'
    }
];

export default routes;