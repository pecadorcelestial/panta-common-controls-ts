//Componentes generales.
import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

type Elevation = 4 | 8 | 10 | 14 | 18 | 32 | undefined;

const getCardBoxShadow = (elevation: Elevation): string => {
    let result: string = '';
	switch(elevation) {
		case 4:
            result = `box-shadow:  0px 0px 4px 1px rgba(0, 0, 0, 0.05);`;
            break;
		case 8:
			result = `box-shadow:  0px 0px 8px 1px rgba(0, 0, 0, 0.05);`;
            break;
		case 10:
			result = `box-shadow:  0px 0px 10px 1px rgba(0, 0, 0, 0.1);`;
            break;
		case 14:
			result = `box-shadow:  0px 0px 14px 1px rgba(0, 0, 0, 0.1);`;
            break;
		case 18:
			result = `box-shadow:  0px 0px 18px 1px rgba(0, 0, 0, 0.1);`;
            break;
		case 32:
		default:
			result = `box-shadow:  0px 0px 32px 1px rgba(0, 0, 0, 0.1);`;
            break;
    }
    return result;
};

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
    elevation: Elevation;
    width?: string;
};
export const Card: StyledComponent<'div', any, ICardProps, never> = styled.div`
    background-color: #FFF;
    border-radius: 5px;
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
    width: ${(props: ICardProps) => props.width ? props.width : `auto`};

    transition: all .3s;
        
    ${(props: ICardProps) => getCardBoxShadow(props.elevation)}		

    @media screen and (max-width: 767px) {
        border-radius: 0px;
        box-shadow: unset;
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        border-radius: 0px;
        box-shadow: unset;
    }
`;