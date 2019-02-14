//Componentes generales.
import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

import { Icon, IIconProps } from '../icons/icons';

// CCCC  OOO  N   N      TTTTT EEEEE M   M  AAA
//C     O   O NN  N        T   E     MM MM A   A
//C     O   O N N N        T   EEE   M M M AAAAA
//C     O   O N  NN        T   E     M   M A   A
// CCCC  OOO  N   N        T   EEEEE M   M A   A

type Size = 'small' | 'medium' | 'big';
type Theme = 'red' | 'secondaryRed' | 'flatRed' | 'blue' | 'flatBlue' | 'green' | 'flatGreen' | 'yellow' | 'flatYellow' | 'gray' | 'flatGray' | 'flatWhite' | 'orange' | 'flatOrange';

const backgroundColor = (theme: Theme): string => {
	let result: string = 'transparent';
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
		case 'flatBlue': 
			result = 'transparent';
			break;
		case 'green': 
			result = '#4CB050';
			break;
		case 'flatGreen': 
			result = 'transparent';
			break;
		case 'yellow': 
			result = '#FFE200';
			break;
		case 'flatYellow': 
			result = 'transparent';
			break;
		case 'gray': 
			result = '#858585';
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
		case 'flatOrange': 
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
			result = '1px solid #FF456A';
			break;
		case 'blue': 
			result = '1px solid #1476FB';
			break;
		case 'flatBlue': 
			result = '1px solid #1476FB';
			break;
		case 'green': 
			result = '1px solid #4CB050';
			break;
		case 'flatGreen': 
			result = '1px solid #4CB050';
			break;
		case 'yellow': 
			result = '1px solid #FFE200';
			break;
		case 'flatYellow': 
			result = '1px solid #FFE200';
			break;
		case 'gray': 
			result = '1px solid #858585';
			break;
		case 'flatGray': 
			result = '1px solid #858585';
			break;

		case 'flatWhite': 
			result = '1px solid transparent';
			break;
		case 'orange': 
			result = '1px solid #FF9700';
			break;
		case 'flatOrange': 
			result = '1px solid #FF9700';
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
		case 'flatBlue': 
			result = '#1476FB';
			break;
		case 'green': 
			result = '#FFF';
			break;
		case 'flatGreen': 
			result = '#4CB050';
			break;
		case 'yellow': 
			result = '#FFF';
			break;
		case 'flatYellow': 
			result = '#FFE200';
			break;
		case 'gray': 
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
		case 'flatOrange': 
			result = '#FF9700';
			break;
	}
	return result;
};

const borderRadius = (size: Size): string => {
	let result: string = '14px';
    switch(size) {
		case 'small': 
			result = '11px';
			break;
		case 'medium': 
			result = '14px';
			break;
		case 'big': 
			result = '20px';
			break;
	}
	return result;
};

const fontSize = (size: Size): string => {
	let result: string = '14px';
	switch(size) {
		case 'small': 
			result = '11px';
			break;
		case 'medium': 
			result = '14px';
			break;
		case 'big': 
			result = '20px';
			break;
	}
	return result;
};

const height = (size: Size): string => {
	let result: string = '28px';
	switch(size) {
		case 'small': 
			result = '22px';
			break;
		case 'medium': 
			result = '28px';
			break;
		case 'big': 
			result = '40px';
			break;
	}
	return result;
};

const lineHeight = (size: Size): string => {
	let result: string = '24px';
	switch(size) {
		case 'small': 
			result = '20px';
			break;
		case 'medium': 
			result = '24px';
			break;
		case 'big': 
			result = '34px';
			break;
	}
	return result;
};

const padding = (size: Size, showCloseButton: boolean): string => {
	let result: string = '';
	switch(size) {
		case 'small': 
			result = showCloseButton ? '0px 4px 0px 10px' : '0px 10px';
			break;
		case 'medium': 
			result = showCloseButton ? '0px 5px 0px 15px' : '0px 15px';
			break;
		case 'big': 
			result = showCloseButton ? '0px 5px 0px 20px' : '0px 20px';
			break;
	}
	return result;
};

const iconSize = (size: Size): string => {
	let result: string = '20px';
	switch(size) {
		case 'small': 
			result = '15px';
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

interface ICloseButtonProps extends IIconProps {
	theme: Theme;
	size: Size;
};
//: StyledComponent<any, any, ICloseButtonProps & React.SVGProps<SVGSVGElement>, never>
const CloseButton: StyledComponent<"svg", any, ICloseButtonProps & React.SVGProps<SVGSVGElement>, never> = styled(Icon)`
	box-sizing: border-box;
	cursor: pointer;
	fill: ${(props: ICloseButtonProps) => color(props.theme)};
	height: ${(props: ICloseButtonProps) => iconSize(props.size)};
	margin: 3px 0px 0px 6px;
	width: ${(props: ICloseButtonProps) => iconSize(props.size)};

	&:hover {
		
	}

`;

//type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export interface IBadgeProps extends React.HTMLAttributes<HTMLLabelElement> {
	size: Size;
	theme: Theme;
	closeOnClick?: Function;
	showCloseButton?: boolean;
};
export const Badge: StyledComponent<'label', any, IBadgeProps, never> = styled((props: IBadgeProps) => {
	const { className, children, size, theme, closeOnClick, showCloseButton, ...rest } = props;
	return <label 
			className={className} 
			{...rest}>
			{children}
			{showCloseButton ? 
				<CloseButton 
					icon='solidTimesCircle' 
					theme={theme} 
					size={size} 
					onClick={(event) => { if(closeOnClick) closeOnClick(event); }}/> : null}
			</label>;
})`
	background-color: ${(props: IBadgeProps) => backgroundColor(props.theme)};
	border: ${(props: IBadgeProps) => border(props.theme)};
	border-radius: ${(props: IBadgeProps) => borderRadius(props.size)};
	box-sizing: border-box;
	color: ${(props: IBadgeProps) => color(props.theme)};
	display: inline-block;
	font-size: ${(props: IBadgeProps) => fontSize(props.size)};
	font-family: "Open Sans", sans-serif;	
	font-stretch: normal;
	font-style: normal;	
	font-weight: bold;
	height: ${(props: IBadgeProps) => height(props.size)};
	letter-spacing: normal;
	line-height: ${(props: IBadgeProps) => lineHeight(props.size)};
	padding: ${(props: IBadgeProps) => padding(props.size, props.showCloseButton || false)};
	text-align: center;
	width: auto;
	
	transition: all .3s;
	
	&:focus {
		outline: none;
	}
	
	${Icon} {
		fill: ${(props: IBadgeProps) => color(props.theme)};
		height: ${(props: IBadgeProps) => iconSize(props.size)};
		width: ${(props: IBadgeProps) => iconSize(props.size)};
	}
`;

// CCCC  OOO  N   N      IIIII  CCCC  OOO  N   N  OOO
//C     O   O NN  N        I   C     O   O NN  N O   O
//C     O   O N N N        I   C     O   O N N N O   O
//C     O   O N  NN        I   C     O   O N  NN O   O
// CCCC  OOO  N   N      IIIII  CCCC  OOO  N   N  OOO

//https://github.com/styled-components/styled-components/issues/305

//NOTA: Este componente está preparado para modificar los estilos que sean necesarios.
export interface IIconBadgeProps extends React.HTMLAttributes<HTMLLabelElement> {
	icon: string;
	size: Size;
	theme: Theme;
	closeOnClick?: Function;
	showCloseButton?: boolean;
};
//interface IIconBadgeProps extends IIconProps{};
export const IconBadge: StyledComponent<'label', any, IIconBadgeProps, never> = styled((props: IIconBadgeProps) => {
	let { className, theme, size, icon, closeOnClick, children, ...rest} = props;
	return <Badge className={className} theme={theme} size={size} closeOnClick={closeOnClick} {...rest}>{children}</Badge>;
})`
    padding: 0px 5px 0px 5px;
`;

const NotificationContainer: StyledComponent<'div', any, React.HTMLProps<HTMLDivElement>, never> = styled.div`
    box-sizing: border-box;    
    display: inline-block;
    height: auto;
    margin: 0px;
    padding: 0px;
    position: relative;
    width: auto;
`;

const NotificationBubble: StyledComponent<'div', any, React.HTMLProps<HTMLDivElement>, never> = styled.div`
    background-color: #FF456A;
    box-sizing: border-box;
    border-radius: 50%;
    color: #FFF;
    font-size: 11px;
	font-family: "Open Sans", sans-serif;	
	font-stretch: normal;
	font-style: normal;	
	font-weight: bold;
    height: 20px;
    line-height: 20px;
    margin: 0px;
    padding: 0px;
    position: absolute;
    right: -10px;
    text-align: center;
    top: -10px;
    width: 20px;
`;

//N   N  OOO  TTTTT IIIII FFFFF IIIII  CCCC  AAA   CCCC IIIII  OOO  N   N EEEEE  SSSS
//NN  N O   O   T     I   F       I   C     A   A C       I   O   O NN  N E     S
//N N N O   O   T     I   FFF     I   C     AAAAA C       I   O   O N N N EEE    SSS
//N  NN O   O   T     I   F       I   C     A   A C       I   O   O N  NN E         S
//N   N  OOO    T   IIIII F     IIIII  CCCC A   A  CCCC IIIII  OOO  N   N EEEEE SSSS

export interface INotificationBadgeProps {
	counter: string;
};
export const NotificationBadge: StyledComponent<'div', any, INotificationBadgeProps & React.HTMLProps<HTMLDivElement>, never> = styled((props: any) => {
	let { className, children, ...rest} = props;
    return <NotificationContainer className={className} {...rest}>
        <NotificationBubble>{props.counter}</NotificationBubble>
        {children}
    </NotificationContainer>;
})``;