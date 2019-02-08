//Componentes generales.
import React, { HTMLProps, HTMLAttributes } from 'react';
import styled, { css, ThemeProvider, keyframes, Keyframes, StyledComponent } from 'styled-components';
import theme from 'styled-theming';

//Componentes locales.
import { Icon } from '../icons/icons';

const backgroundColor: theme.ThemeSet = theme('type', {
	success: '#4CB050',
	error: '#E51D24',
	warning: '#FF9700',
	information: '#1476FB'
});

const notificationIcon = (type: Type): string => {
	switch(type) {
		case 'success': return 'solidCheckCircle';
		case 'error': return 'solidTimesCircle';
		case 'warning': return 'solidExclamationCircle';
		case 'information': return 'solidQuestionCircle';
	}
};

//K   K EEEEE Y   Y FFFFF RRRR   AAA  M   M EEEEE  SSSS
//K  K  E      Y Y  F     R   R A   A MM MM E     S
//KKK   EEE     Y   FFF   RRRR  AAAAA M M M EEE    SSS
//K  K  E       Y   F     R   R A   A M   M E         S
//K   K EEEEE  YYY  F     R   R A   A M   M EEEEE SSSS

//Escritorio
const show = (from: From): Keyframes => keyframes`
	0% {
		${from}: -100%;
		opacity: 0;
	}
  	100% {
		${from}: 30px;
		opacity: 1;
	}
`;

const showWithBounce = (from: From): Keyframes => keyframes`
	0% {
		${from}: -100%;
		opacity: 0;
	}
	80% {
		${from}: 50px;
		opacity: 1;
	}
	90% {
		${from}: 20px;
		opacity: 1;
	}
  	100% {
		${from}: 30px;
		opacity: 1;
	}
`;

const hide = (from: From): Keyframes => keyframes`
	from {
        ${from}: 30px;
        opacity: 1;
	}
  	to {
        ${from}: -100%;
        opacity: 0;
	}
`;

//Móvil
const showMobile = (from: From): Keyframes => keyframes`
	0% {
		${from}: -100%;
		opacity: 0;
	}
  	100% {
		${from}: 0px;
		opacity: 1;
	}
`;

const showWithBounceMobile = (from: From): Keyframes => keyframes`
	0% {
		${from}: -100%;
		opacity: 0;
	}
	80% {
		${from}: 20px;
		opacity: 1;
	}
	90% {
		${from}: -10px;
		opacity: 1;
	}
  	100% {
		${from}: 0px;
		opacity: 1;
	}
`;

const hideMobile = (from: From): Keyframes => keyframes`
	from {
		${from}: 0px;
		opacity: 1;
	}
	to {
		${from}: -100%;
		opacity: 0;
	}
`;

const animationShow = (props: ILayoutProps) => css`
	${show(props.from)} 0.6s ease forwards;
`;

const animationHide = (props: ILayoutProps) => css`
	${hide(props.from)} 0.6s ease forwards;
`;

const mobileAnimationShow = (props: ILayoutProps) => css`
	${showMobile(props.from)} 0.6s ease forwards;
`;

const mobileAnimationHide = (props: ILayoutProps) => css`
	${hideMobile(props.from)} 0.6s ease forwards;
`;

//EEEEE  SSSS TTTTT IIIII L      OOO   SSSS
//E     S       T     I   L     O   O S
//EEE    SSS    T     I   L     O   O  SSS
//E         S   T     I   L     O   O     S
//EEEEE SSSS    T   IIIII LLLLL  OOO  SSSS

interface ILayoutProps extends HTMLProps<HTMLDivElement> {
	from: From;
	hide: boolean;
	show: boolean;
	side: Side;
	showWithBounce: boolean;
};
//${(props: ILayoutProps) => props.show ? (props.showWithBounce ? `animation: ${showWithBounce(props.from)} 0.6s ease forwards;` : `animation: ${show(props.from)} 0.6s ease forwards;`) : ``}
//${(props: ILayoutProps) => props.hide ? `animation: ${hide(props.from)} 0.6s ease forwards;` : ``}
const Layout: StyledComponent<'div', any, ILayoutProps, never> = styled.div`
    background-color: ${backgroundColor};
	border-radius: 5px;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
	max-width: 420px;
    min-width: 250px;
    opacity: 0;
	padding: 15px;
	position: fixed;
    z-index: 996;
    
    ${(props: ILayoutProps) => props.side}: 30px;
    ${(props: ILayoutProps) => props.from}: -100%;
	
	animation: ${(props: ILayoutProps) => props.show ? animationShow : animationHide};
    
	@media screen and (max-width: 767px) {
		border-radius: 0px;
		left: 0px;
		width: 100%;
		
		animation: ${(props: ILayoutProps) => props.show ? mobileAnimationShow : mobileAnimationHide};
	}
	
	@media screen and (min-width: 768px) and (max-width: 991px) {
		border-radius: 0px;
		left: 0px;
	    width: 100%;
		
		animation: ${(props: ILayoutProps) => props.show ? mobileAnimationShow : mobileAnimationHide};
	}
`;

const CloseButton: StyledComponent<'button', any, HTMLProps<HTMLButtonElement>, never> = styled.button`
    background-color: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzM5LjE3N3B4IiBoZWlnaHQ9IjMzOS4xNzdweCIgdmlld0JveD0iMCAwIDMzOS4xNzcgMzM5LjE3NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzM5LjE3NyAzMzkuMTc3OyBmaWxsOiB3aGl0ZTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGQ9Ik0yNDcuMjQ0LDE2OS41OWw4My45MzgtODMuOTM4YzUuMzMyLTUuMzI3LDcuOTk0LTExLjc5OCw3Ljk5NC0xOS40MTRjMC03LjYxNC0yLjY2OS0xNC4wODQtNy45OTQtMTkuNDE0TDI5Mi4zNTUsNy45OTNDMjg3LjAyNiwyLjY2NSwyODAuNTU2LDAsMjcyLjk0NCwwYy03LjYxNywwLTE0LjA4NSwyLjY2NS0xOS40MTcsNy45OTNMMTY5LjU5LDkxLjkzMUw4NS42NTEsNy45OTNDODAuMzI1LDIuNjY1LDczLjg1NCwwLDY2LjIzNywwYy03LjYxMSwwLTE0LjA4MywyLjY2NS0xOS40MTQsNy45OTNMNy45OTQsNDYuODI0QzIuNjY3LDUyLjE1LDAsNTguNjI0LDAsNjYuMjM4YzAsNy42MTYsMi42NjQsMTQuMDg0LDcuOTk0LDE5LjQxNGw4My45MzcsODMuOTM4TDcuOTk0LDI1My41MjhDMi42NjcsMjU4Ljg1OSwwLDI2NS4zMjcsMCwyNzIuOTQ1YzAsNy42MSwyLjY2NCwxNC4wODIsNy45OTQsMTkuNDFsMzguODMsMzguODI4YzUuMzMsNS4zMzIsMTEuODAzLDcuOTk0LDE5LjQxNCw3Ljk5NGM3LjYxNiwwLDE0LjA4NC0yLjY2OSwxOS40MTQtNy45OTRsODMuOTM5LTgzLjkzOGw4My45NDQsODMuOTM4YzUuMzI4LDUuMzMyLDExLjc5Myw3Ljk5NCwxOS40MTcsNy45OTRjNy42MTEsMCwxNC4wODItMi42NjksMTkuNDExLTcuOTk0bDM4LjgyLTM4LjgyOGM1LjMzMi01LjMyNCw3Ljk5NC0xMS44LDcuOTk0LTE5LjQxYzAtNy42MTgtMi42NjItMTQuMDg2LTcuOTk0LTE5LjQxN0wyNDcuMjQ0LDE2OS41OXoiLz48L2c+PC9zdmc+");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 10px 10px;
    border: none;
    cursor: pointer;
    height: 10px;
	padding: 0px;
	position: absolute;
	right: 10px;
    top: 10px;
    width: 10px;
`;

const LeftColumn: StyledComponent<'div', any, HTMLProps<HTMLDivElement>, never> = styled.div`
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 40px;
`;

const RightColumn: StyledComponent<'div', any, HTMLProps<HTMLDivElement>, never> = styled.div`
    box-sizing: border-box;
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 0px 0px 0px 15px;
    width: calc(100% - 40px);
`;

const Title: StyledComponent<'label', any, HTMLProps<HTMLLabelElement>, never> = styled.label`
	color: #FFF;
	display: block;
	font-family: "Open Sans", sans-serif;
	font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-right: 20px;
	text-align: left;
    white-space: nowrap;
    width: 100%;
`;

const Message: StyledComponent<'label', any, HTMLProps<HTMLLabelElement>, never> = styled.label`
	color: #FFF;
	display: block;
	font-family: "Open Sans", sans-serif;
    font-size: 12px;
    font-weight: normal;
	text-align: left;
	width: 100%;
`;

//NOTA 1: Al utilizar una animación o transformación en un componente con posición "fixed", esta se pierde y cambia por "absolute" (°~°).
//      Por ahora sólo en Chrome y en Safari.
//https://bugs.chromium.org/p/chromium/issues/detail?id=20574&desc=2
//NOTA 2: Parece que no lo van a arreglar (¬_¬').
type Type = 'success' | 'error' | 'warning' | 'information';
type From = 'top' | 'bottom';
type Side = 'left' | 'right';
interface IToastNotificationProps extends HTMLAttributes<HTMLDivElement> {
	//Obligatorios.
    notificationType: Type;
    title: string;
    //Opcionales.
    from?: From;
	message?: any;
	showWithBounce?: boolean;
    side?: Side;
    timeout?: number;
};
interface IToastNotificationState {
	hide: boolean;
	show: boolean;
};
export class ToastNotification extends React.Component<IToastNotificationProps, IToastNotificationState> {
	//*** CONSTRUCTOR ***
	constructor(props: IToastNotificationProps) {
		super(props);
		this.state = {
            show: false,
            hide: false
		};
	}
	//*** MÉTODOS ***
	public show = (): void => {
		this.setState({ show: true, hide: false }, () => {
            if(this.props.timeout && this.props.timeout > 0) setTimeout(() => { this.setState({ show: false, hide: true }); }, (this.props.timeout * 1000));
        });
	}
	public hide = (): void => {
		this.setState({ show: false, hide: true });
	}
	//*** RESULTADO ***
	render() {
		
		//M   M EEEEE N   N  SSSS  AAA  JJJJJ EEEEE       SSSS EEEEE  CCCC U   U N   N DDDD   AAA  RRRR  IIIII  OOO
		//MM MM E     NN  N S     A   A   J   E          S     E     C     U   U NN  N D   D A   A R   R   I   O   O
		//M M M EEE   N N N  SSS  AAAAA   J   EEE         SSS  EEE   C     U   U N N N D   D AAAAA RRRR    I   O   O
		//M   M E     N  NN     S A   A J J   E              S E     C     U   U N  NN D   D A   A R   R   I   O   O
		//M   M EEEEE N   N SSSS  A   A  J    EEEEE      SSSS  EEEEE  CCCC  UUU  N   N DDDD  A   A R   R IIIII  OOO
		
		let _message: any;
		if(this.props.message && typeof this.props.message === 'object') {
			_message = this.props.message;
		} else if(this.props.message && typeof this.props.message === 'string') {
			_message = <Message>{this.props.message}</Message>;
		} else {
			_message = null;
		}
		
		//PPPP  RRRR   OOO  PPPP  IIIII EEEEE DDDD   AAA  DDDD  EEEEE  SSSS
		//P   P R   R O   O P   P   I   E     D   D A   A D   D E     S
		//PPPP  RRRR  O   O PPPP    I   EEE   D   D AAAAA D   D EEE    SSS
		//P     R   R O   O P       I   E     D   D A   A D   D E         S
		//P     R   R  OOO  P     IIIII EEEEE DDDD  A   A DDDD  EEEEE SSSS
		
		let { notificationType, title, from, message, showWithBounce, side, timeout, /*ref, as,*/ ...rest } = this.props;

		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO
		
		return (
            <ThemeProvider theme={{ type: this.props.notificationType }}>
                <Layout {...rest} show={this.state.show} hide={this.state.hide} from={this.props.from || 'bottom'} side={this.props.side || 'left'} showWithBounce={this.props.showWithBounce || false}>
                    <CloseButton type='button' onClick={(event) => {this.setState({ show: false, hide: true });}}/>
                    <LeftColumn>
                        <Icon height='40px' width='40px' icon={notificationIcon(this.props.notificationType)}/>
                    </LeftColumn>
                    <RightColumn>
                        <Title>{this.props.title}</Title>
                        {_message}
                    </RightColumn>
                </Layout>
            </ThemeProvider>
		);
	}	
}