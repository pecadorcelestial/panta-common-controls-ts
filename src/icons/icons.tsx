//Componentes generales.
import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

interface ISVGProps {
    fill?: string;
    height?: string;
    margin?: string;
    width?: string;
};
const SVG: StyledComponent<'svg', any, ISVGProps & React.SVGProps<SVGSVGElement>, never> = styled.svg`
    display: inline-block;
    fill: ${(props: ISVGProps) => props.fill ? props.fill : `#FFF`};
    height: ${(props: ISVGProps) => props.height ? props.height : `50px`};
    margin: ${(props: ISVGProps) => props.margin ? props.margin : `0px`};
    vertical-align: top;
    width: ${(props: ISVGProps) => props.width ? props.width : `50px`};

    transition: all .3s;

`;

export interface IIconProps extends ISVGProps {
    icon: string;
};
export const Icon: StyledComponent<'svg', any, IIconProps & React.SVGProps<SVGSVGElement>, never> = styled((props: any) => {
    //console.log('[ICONS][constant] Icono: ', props.icon);
    let iconFile: any;
    try {
        iconFile = require(`./icons/${props.icon}`).icon;
    } catch(e) {
        //console.log('[ICONS][constant][ERROR] Excepción: ', e);
        iconFile = undefined;
    }
    //console.log('[ICONS][constant] Icono: ', iconFile);
    /*
    if(props.icon.startsWith('solid')) {
        iconFile = require(`./icons-lib-solid`)[props.icon];
    } else if(props.icon.startsWith('brand')) {
        iconFile = require(`./icons-lib-brands`)[props.icon];
    } else {
        iconFile = require(`./icons-lib-normal`)[props.icon];
    }
    */
    if(iconFile) {
        return(
            <SVG {...props} x='0px' y='0px' viewBox={`0 0 ${iconFile.v}`} dangerouslySetInnerHTML={{__html: iconFile.p}} alt={props.icon}>
            </SVG>
        );
    } else {
        return null;
    }
})``;