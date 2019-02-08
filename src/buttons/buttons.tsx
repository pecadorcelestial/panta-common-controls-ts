//Componentes generales.
import React, { HTMLProps } from 'react';
import styled, { StyledComponent } from 'styled-components';

import { Icon } from '../icons/icons';

// CCCC  OOO  N   N      TTTTT EEEEE M   M  AAA
//C     O   O NN  N        T   E     MM MM A   A
//C     O   O N N N        T   EEE   M M M AAAAA
//C     O   O N  NN        T   E     M   M A   A
// CCCC  OOO  N   N        T   EEEEE M   M A   A

export type Size = 'small' | 'medium' | 'big';
export type Theme = 'red' | 'secondaryRed' | 'flatRed' | 'blue' | 'secondaryBlue' | 'flatBlue' | 'green' | 'secondaryGreen' | 'flatGreen' | 'yellow' | 'secondaryYellow' | 'flatYellow' | 'gray' | 'secondaryGray' | 'flatGray' | 'flatWhite' | 'orange' | 'secondaryOrange' | 'flatOrange' | 'black' | 'secondaryBlack' | 'flatBlack' | 'IENTC' | 'secondaryIENTC' | 'flatIENTC';

const backgroundColor = (theme: Theme): string => {
	let result: string = '';
	switch(theme) {
		case 'red': 
			result = '#FF456A';
			break;
		case 'secondaryRed': 
			result = '#FFF';
			break;
		case 'flatRed': 
			result = 'transparent';
			break;
		case 'blue': 
			result = '#1476FB';
			break;
		case 'secondaryBlue': 
			result = '#FFF';
			break;
		case 'flatBlue': 
			result = 'transparent';
			break;
		case 'green': 
			result = '#4CB050';
			break;
		case 'secondaryGreen': 
			result = '#FFF';
			break;
		case 'flatGreen': 
			result = 'transparent';
			break;
		case 'yellow': 
			result = '#FFE200';
			break;
		case 'secondaryYellow': 
			result = '#FFF';
			break;
		case 'flatYellow': 
			result = 'transparent';
			break;
		case 'gray': 
			result = '#858585';
			break;
		case 'secondaryGray': 
			result = '#FFF';
			break;
		case 'flatGray': 
			result = 'transparent';
			break;

		case 'flatWhite': 
			result = 'transparent';
			break;

		case 'orange': 
			result = '#FF9700';
			break;
		case 'secondaryOrange': 
			result = '#FFF';
			break;
		case 'flatOrange': 
			result = 'transparent';
			break;
		case 'black': 
			result = '#242424';
			break;
		case 'secondaryBlack': 
			result = '#FFF';
			break;
		case 'flatBlack': 
			result = 'transparent';
			break;

		case 'IENTC': 
			result = '#FF0000';
			break;
		case 'secondaryIENTC': 
			result = '#FFF';
			break;
		case 'flatIENTC': 
			result = 'transparent';
			break;
	}
	return result;
};

const border = (theme: Theme): string => {
	let result: string = '';
	switch(theme) {
		case 'red': 
			result = '1px solid #FF456A';
			break;
		case 'secondaryRed': 
			result = '1px solid #FF456A';
			break;
		case 'flatRed': 
			result = '1px solid transparent';
			break;
		case 'blue': 
			result = '1px solid #1476FB';
			break;
		case 'secondaryBlue': 
			result = '1px solid #1476FB';
			break;
		case 'flatBlue': 
			result = '1px solid transparent';
			break;
		case 'green': 
			result = '1px solid #4CB050';
			break;
		case 'secondaryGreen': 
			result = '1px solid #4CB050';
			break;
		case 'flatGreen': 
			result = '1px solid transparent';
			break;
		case 'yellow': 
			result = '1px solid #FFE200';
			break;
		case 'secondaryYellow': 
			result = '1px solid #FFE200';
			break;
		case 'flatYellow': 
			result = '1px solid transparent';
			break;
		case 'gray': 
			result = '1px solid #858585';
			break;
		case 'secondaryGray': 
			result = '1px solid #858585';
			break;
		case 'flatGray': 
			result = '1px solid transparent';
			break;

		case 'flatWhite': 
			result = '1px solid transparent';
			break;

		case 'orange': 
			result = '1px solid #FF9700';
			break;
		case 'secondaryOrange': 
			result = '1px solid #FF9700';
			break;
		case 'flatOrange': 
			result = '1px solid transparent';
			break;
		case 'black': 
			result = '1px solid #242424';
			break;
		case 'secondaryBlack': 
			result = '1px solid #242424';
			break;
		case 'flatBlack': 
			result = '1px solid transparent';
			break;

		case 'IENTC': 
			result = '1px solid #FF0000';
			break;
		case 'secondaryIENTC': 
			result = '1px solid #FF0000';
			break;
		case 'flatIENTC': 
			result = '1px solid transparent';
			break;
	}
	return result;
};

const color = (theme: Theme): string => {
	let result: string = '';
	switch(theme) {
		case 'red': 
			result = '#FFF';
			break;
		case 'secondaryRed': 
			result = '#FF456A';
			break;
		case 'flatRed': 
			result = '#FF456A';
			break;
		case 'blue': 
			result = '#FFF';
			break;
		case 'secondaryBlue': 
			result = '#1476FB';
			break;
		case 'flatBlue': 
			result = '#1476FB';
			break;
		case 'green': 
			result = '#FFF';
			break;
		case 'secondaryGreen': 
			result = '#4CB050';
			break;
		case 'flatGreen': 
			result = '#4CB050';
			break;
		case 'yellow': 
			result = '#FFF';
			break;
		case 'secondaryYellow': 
			result = '#FFE200';
			break;
		case 'flatYellow': 
			result = '#FFE200';
			break;
		case 'gray': 
			result = '#FFF';
			break;
		case 'secondaryGray': 
			result = '#858585';
			break;
		case 'flatGray': 
			result = '#858585';
			break;

		case 'flatWhite': 
			result = '#FFF';
			break;

		case 'orange': 
			result = '#FFF';
			break;
		case 'secondaryOrange': 
			result = '#FF9700';
			break;
		case 'flatOrange': 
			result = '#FF9700';
			break;
		case 'black': 
			result = '#FFF';
			break;
		case 'secondaryBlack': 
			result = '#242424';
			break;
		case 'flatBlack': 
			result = '#242424';
			break;

		case 'IENTC': 
			result = '#FFF';
			break;
		case 'secondaryIENTC': 
			result = '#FF0000';
			break;
		case 'flatIENTC': 
			result = '#FF0000';
			break;
	}
	return result;
};

const hoverBackgroundColor = (theme: Theme): string => {
	let result: string = '';
	switch(theme) {
		case 'red': 
			result = '#CC1F62';
			break;
		case 'secondaryRed': 
			result = '#CC1F62';
			break;
		case 'flatRed': 
			result = '#EBEBEB';
			break;
		case 'blue': 
			result = '#0960D3';
			break;
		case 'secondaryBlue': 
			result = '#0960D3';
			break;
		case 'flatBlue': 
			result = '#EBEBEB';
			break;
		case 'green': 
			result = '#3C8C40';
			break;
		case 'secondaryGreen': 
			result = '#3C8C40'
			break;
		case 'flatGreen': 
			result = '#EBEBEB';
			break;
		case 'yellow': 
			result = '#CCB400';
			break;
		case 'secondaryYellow': 
			result = '#CCB400';
			break;
		case 'flatYellow': 
			result = '#EBEBEB';
			break;
		case 'gray': 
			result = '#6A6A6A';
			break;
		case 'secondaryGray': 
			result = '#6A6A6A';
			break;
		case 'flatGray': 
			result = '#EBEBEB';
			break;

		case 'flatWhite': 
			result = 'rgba(235, 235, 235, 0.5)';
			break;

		case 'orange': 
			result = '#CC7800';
			break;
		case 'secondaryOrange': 
			result = '#CC7800';
			break;
		case 'flatOrange': 
			result = '#EBEBEB';
			break;
		case 'black': 
			result = '#4F4F4F';
			break;
		case 'secondaryBlack': 
			result = '#4F4F4F';
			break;
		case 'flatBlack': 
			result = '#EBEBEB';
			break;

		case 'IENTC': 
			result = '#CC0000';
			break;
		case 'secondaryIENTC': 
			result = '#CC0000';
			break;
		case 'flatIENTC': 
			result = '#EBEBEB';
			break;
	}
	return result;
};

const hoverBorder = (theme: Theme): string => {
	let result: string = '';
	switch(theme) {
		case 'red': 
			result = '1px solid #CC1F62';
			break;
		case 'secondaryRed': 
			result = '1px solid #CC1F62';
			break;
		case 'flatRed': 
			result = '1px solid #EBEBEB';
			break;
		case 'blue': 
			result = '1px solid #0960D3';
			break;
		case 'secondaryBlue': 
			result = '1px solid #0960D3';
			break;
		case 'flatBlue': 
			result = '1px solid #EBEBEB';
			break;
		case 'green': 
			result = '1px solid #3C8C40';
			break;
		case 'secondaryGreen': 
			result = '1px solid #3C8C40';
			break;
		case 'flatGreen': 
			result = '1px solid #EBEBEB';
			break;
		case 'yellow': 
			result = '1px solid #CCB400';
			break;
		case 'secondaryYellow': 
			result = '1px solid #CCB400';
			break;
		case 'flatYellow': 
			result = '1px solid #EBEBEB';
			break;
		case 'gray': 
			result = '1px solid #6A6A6A';
			break;
		case 'secondaryGray': 
			result = '1px solid #6A6A6A';
			break;
		case 'flatGray': 
			result = '1px solid #EBEBEB';
			break;

		case 'flatWhite': 
			result = '1px solid rgba(235, 235, 235, 0)';
			break;

		case 'orange': 
			result = '#1px solid #CC7800';
			break;
		case 'secondaryOrange': 
			result = '#1px solid #CC7800';
			break;
		case 'flatOrange': 
			result = '1px solid #EBEBEB';
			break;
		case 'black': 
			result = '#1px solid #4F4F4F';
			break;
		case 'secondaryBlack': 
			result = '#1px solid #4F4F4F';
			break;
		case 'flatBlack': 
			result = '1px solid #EBEBEB';
			break;

		case 'IENTC': 
			result = '1px solid #CC0000';
			break;
		case 'secondaryIENTC': 
			result = '1px solid #CC0000';
			break;
		case 'flatIENTC': 
			result = '1px solid #EBEBEB';
			break;
	}
	return result;
};

const hoverColor = (theme: Theme): string => {
	let result: string = '';
	switch(theme) {
		case 'red': 
			result = '#FFF';
			break;
		case 'secondaryRed': 
			result = '#FFF';
			break;
		case 'flatRed': 
			result = '#FF456A';
			break;
		case 'blue':
			result = '#FFF';
			break;
		case 'secondaryBlue': 
			result = '#FFF';
			break;
		case 'flatBlue': 
			result = '#1476FB';
			break;
		case 'green': 
			result = '#FFF';
			break;
		case 'secondaryGreen': 
			result = '#FFF';
			break;
		case 'flatGreen': 
			result = '#4CB050';
			break;
		case 'yellow': 
			result = '#FFF';
			break;
		case 'secondaryYellow': 
			result = '#FFF';
			break;
		case 'flatYellow': 
			result = '#FFE200';
			break;
		case 'gray': 
			result = '#FFF';
			break;
		case 'secondaryGray': 
			result = '#FFF';
			break;
		case 'flatGray': 
			result = '#858585';
			break;

		case 'flatWhite': 
			result = '#FFF';
			break;

		case 'orange': 
			result = '#FFF';
			break;
		case 'secondaryOrange': 
			result = '#FFF';
			break;
		case 'flatOrange': 
			result = '#FF9700';
			break;
		case 'black': 
			result = '#FFF';
			break;
		case 'secondaryBlack': 
			result = '#FFF';
			break;
		case 'flatBlack': 
			result = '#4F4F4F';
			break;

		case 'IENTC': 
			result = '#FFF';
			break;
		case 'secondaryIENTC': 
			result = '#FFF';
			break;
		case 'flatIENTC': 
			result = '#CC0000';
			break;
	}
	return result;
};

const disabledBackgroundColor = (theme: Theme): string => {
	let result: string = '';
	switch(theme) {
		case 'red': 
			result = '#BFBFBF';
			break;
		case 'secondaryRed': 
			result = '#BFBFBF';
			break;
		case 'flatRed': 
			result = 'transparent';
			break;
		case 'blue': 
			result = '#BFBFBF';
			break;
		case 'secondaryBlue': 
			result = '#BFBFBF';
			break;
		case 'flatBlue': 
			result = 'transparent';
			break;
		case 'green': 
			result = '#BFBFBF';
			break;
		case 'secondaryGreen': 
			result = '#BFBFBF';
			break;
		case 'flatGreen': 
			result = 'transparent';
			break;
		case 'yellow': 
			result = '#BFBFBF';
			break;
		case 'secondaryYellow': 
			result = '#BFBFBF';
			break;
		case 'flatYellow': 
			result = 'transparent';
			break;
		case 'gray': 
			result = '#BFBFBF';
			break;
		case 'secondaryGray': 
			result = '#BFBFBF';
			break;
		case 'flatGray': 
			result = 'transparent';
			break;

		case 'flatWhite': 
			result = 'transparent';
			break;

		case 'orange': 
			result = '#BFBFBF';
			break;
		case 'secondaryOrange': 
			result = '#BFBFBF';
			break;
		case 'flatOrange': 
			result = 'transparent'
			break;
		case 'black': 
			result = '#BFBFBF';
			break;
		case 'secondaryBlack': 
			result = '#BFBFBF';
			break;
		case 'flatBlack': 
			result = 'transparent'
			break;

		case 'IENTC': 
			result = '#BFBFBF';
			break;
		case 'secondaryIENTC': 
			result = '#BFBFBF';
			break;
		case 'flatIENTC': 
			result = 'transparent';
			break;
	}
	return result;
};

const disabledBorder = (theme: Theme): string => {
	let result: string = '';
	switch(theme) {
		case 'red': 
			result = '1px solid #BFBFBF';
			break;
		case 'secondaryRed': 
			result = '1px solid #BFBFBF';
			break;
		case 'flatRed': 
			result = '1px solid transparent';
			break;
		case 'blue': 
			result = '1px solid #BFBFBF';
			break;
		case 'secondaryBlue': 
			result = '1px solid #BFBFBF';
			break;
		case 'flatBlue': 
			result = '1px solid transparent';
			break;
		case 'green': 
			result = '1px solid #BFBFBF';
			break;
		case 'secondaryGreen': 
			result = '1px solid #BFBFBF';
			break;
		case 'flatGreen': 
			result = '1px solid transparent';
			break;
		case 'yellow': 
			result = '1px solid #BFBFBF';
			break;
		case 'secondaryYellow': 
			result = '1px solid #BFBFBF';
			break;
		case 'flatYellow': 
			result = '1px solid transparent';
			break;
		case 'gray': 
			result = '1px solid #BFBFBF';
			break;
		case 'secondaryGray': 
			result = '1px solid #BFBFBF';
			break;
		case 'flatGray': 
			result = '1px solid transparent';
			break;

		case 'flatWhite': 
			result = '1px solid transparent';
			break;

		case 'orange': 
			result = '1px solid #BFBFBF';
			break;
		case 'secondaryOrange': 
			result = '1px solid #BFBFBF';
			break;
		case 'flatOrange': 
			result = '1px solid transparent';
			break;
		case 'black': 
			result = '1px solid #BFBFBF';
			break;
		case 'secondaryBlack': 
			result = '1px solid #BFBFBF';
			break;
		case 'flatBlack': 
			result = '1px solid transparent';
			break;

		case 'IENTC': 
			result = '1px solid #BFBFBF';
			break;
		case 'secondaryIENTC': 
			result = '1px solid #BFBFBF';
			break;
		case 'flatIENTC': 
			result = '1px solid transparent';
			break;
	}
	return result;
};

const disabledColor = (theme: Theme): string => {
	let result: string = '';
	switch(theme) {
		case 'red': 
			result = '#FFF';
			break;
		case 'secondaryRed': 
			result = '#FFF';
			break;
		case 'flatRed': 
			result = '#BFBFBF';
			break;
		case 'blue': 
			result = '#FFF';
			break;
		case 'secondaryBlue': 
			result = '#FFF';
			break;
		case 'flatBlue': 
			result = '#BFBFBF';
			break;
		case 'green': 
			result = '#FFF';
			break;
		case 'secondaryGreen': 
			result = '#FFF';
			break;
		case 'flatGreen': 
			result = '#BFBFBF';
			break;
		case 'yellow': 
			result = '#FFF';
			break;
		case 'secondaryYellow': 
			result = '#FFF';
			break;
		case 'flatYellow': 
			result = '#BFBFBF';
			break;
		case 'gray': 
			result = '#FFF';
			break;
		case 'secondaryGray': 
			result = '#FFF';
			break;
		case 'flatGray': 
			result = '#BFBFBF';
			break;

		case 'flatWhite': 
			result = '#BFBFBF';
			break;

		case 'orange': 
			result = '#FFF';
			break;
		case 'secondaryOrange': 
			result = '#FFF';
			break;
		case 'flatOrange': 
			result = '#BFBFBF';
			break;
		case 'black': 
			result = '#FFF';
			break;
		case 'secondaryBlack': 
			result = '#FFF';
			break;
		case 'flatBlack': 
			result = '#BFBFBF';
			break;

		case 'IENTC': 
			result = '#FFF';
			break;
		case 'secondaryIENTC': 
			result = '#FFF';
			break;
		case 'flatIENTC': 
			result = '#BFBFBF';
			break;
	}
	return result;
};

const fontSize = (size: Size): string => {
	let result: string = '';
	switch(size) {
		case 'small': 
			result = '14px';
			break;
		case 'medium': 
			result = '18px';
			break;
		case 'big': 
			result = '24px';
			break;
	}
	return result;
};

const height = (size: Size): string => {
	let result: string = '';
	switch(size) {
		case 'small': 
			result = '30px';
			break;
		case 'medium': 
			result = '40px';
			break;
		case 'big': 
			result = '50px';
			break;
	}
	return result;
};

const lineHeight = (size: Size): string => {
	let result: string = '';
	switch(size) {
		case 'small': 
			result = '20px';
			break;
		case 'medium': 
			result = '20px';
			break;
		case 'big': 
			result = '36px';
			break;
	}
	return result;
};

const iconSize = (size: Size): string => {
	let result: string = '';
	switch(size) {
		case 'small': 
			result = '18px';
			break;
		case 'medium': 
			result = '20px';
			break;
		case 'big': 
			result = '30px';
			break;
	}
	return result;
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
interface IButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
	theme: Theme;
	size: Size;
};
export const Button: StyledComponent<'button', any, IButtonProps, never> = styled((props: IButtonProps) => {
	let { className, children, ...rest } = props;
	return <button className={className} {...rest}>{children}</button>;
})`
	background-color: ${props => backgroundColor(props.theme)};
	border: ${props => border(props.theme)};
	border-radius: 5px;
	box-sizing: border-box;
	color: ${props => color(props.theme)};
	cursor: pointer;
	display: inline-block;
	font-size: ${props => fontSize(props.size)};
	font-family: "Open Sans", sans-serif;	
	font-stretch: normal;
	font-style: normal;	
	font-weight: bold;
	height: ${props => height(props.size)};
	letter-spacing: normal;
	line-height: ${props => lineHeight(props.size)};
	padding: 5px 30px;
	text-align: center;
	width: auto;
	
	transition: all .3s;
	
	&:hover {
		background-color: ${props => hoverBackgroundColor(props.theme)};
		border: ${props => hoverBorder(props.theme)};
		color: ${props => hoverColor(props.theme)};
		text-decoration: none;
	}

	&:hover ${Icon} {
		fill: ${props => hoverColor(props.theme)};
	}

	&:disabled {
		background-color: ${props => disabledBackgroundColor(props.theme)};
		border: ${props => disabledBorder(props.theme)};
		color: ${props => disabledColor(props.theme)};
		pointer-events: none;
	}

	&:disabled ${Icon} {
		fill: ${props => disabledColor(props.theme)};
	}

	&:focus {
		outline: none;
	}
	
	${Icon} {
		fill: ${props => color(props.theme)};
		height: ${props => iconSize(props.size)};
		width: ${props => iconSize(props.size)};
	}
`;

// CCCC  OOO  N   N      IIIII  CCCC  OOO  N   N  OOO
//C     O   O NN  N        I   C     O   O NN  N O   O
//C     O   O N N N        I   C     O   O N N N O   O
//C     O   O N  NN        I   C     O   O N  NN O   O
// CCCC  OOO  N   N      IIIII  CCCC  OOO  N   N  OOO

//https://github.com/styled-components/styled-components/issues/305


//NOTA: Este componente está preparado para modificar los estilos que sean necesarios.
interface IIconButtonProps extends IButtonProps {
	icon: string;
};
export const IconButton: StyledComponent<'button', any, IIconButtonProps, never> = styled((props: IIconButtonProps) => {
	let { className, theme, size, children, ref, as, ...rest} = props;
	return <Button className={className} theme={theme} size={size} {...rest}><Icon icon={props.icon} margin='0px 5px 0px 0px'/>{children}</Button>;
})``;

//RRRR  EEEEE DDDD   OOO  N   N DDDD   OOO
//R   R E     D   D O   O NN  N D   D O   O
//RRRR  EEE   D   D O   O N N N D   D O   O
//R   R E     D   D O   O N  NN D   D O   O
//R   R EEEEE DDDD   OOO  N   N DDDD   OOO

const padding = (size: Size): string => {
	let result: string = '';
	switch(size) {
		case 'small': 
			result = '1px 0px 0px 0px';
			break;
		case 'medium': 
			result = '9px 0px';
			break;
		case 'big': 
			result = '9px 0px';
			break;
	}
	return result;
};

export const RoundButton: StyledComponent<'button', any, IButtonProps & HTMLProps<HTMLButtonElement>, never> = styled((props: any) => {
	let { className, theme, size, children, ...rest} = props;
	return <Button className={className} theme={theme} size={size} {...props}><Icon icon={props.icon}/></Button>;
})`
	border-radius: 50%;
	padding: ${props => padding(props.size)};
	width: ${props => height(props.size)};
`;