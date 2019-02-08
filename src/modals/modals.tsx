//Componentes generales.
import React, { HTMLAttributes, HTMLProps } from 'react';
import styled, { css, keyframes, Keyframes, StyledComponent, BaseThemedCssFunction } from 'styled-components';

//Componentes locales.
import { RoundButton } from '../buttons/buttons';

interface ILayoutProps {
	lock: boolean;
};
const Layout: StyledComponent<'div', any, ILayoutProps & HTMLProps<HTMLDivElement>, never> = styled.div`
	background-color: rgba(0,0,0,0.4);
    display: ${(props: ILayoutProps) => props.lock ? `block` : `none`};
	height: 100%;
	left: 0px;
	overflow: auto;
	position: fixed;
	top: 0px;
	width: 100%;
	z-index: 997;
`;

const Mask: StyledComponent<'div', any, HTMLProps<HTMLDivElement>, never> = styled.div`
	background-color: rgba(0,0,0,0.4);
    display: block;
	height: 100%;
	left: 0px;
	overflow: auto;
	position: fixed;
	top: 0px;
	width: 100%;
	z-index: 998;
`;

const show: Keyframes = keyframes`
	from {
		opacity: 0;
		top: -100%;
	}
  	to {
		opacity: 1;
		top: 0px;
	}
`;

const showWithBounce: Keyframes = keyframes`
	0% {
		top: -100%;
		opacity: 0;
	}
	80% {
		top: 50px;
		opacity: 0.8;
	}
	90% {
		top: 20px;
		opacity: 0.9;
	}
  	100% {
		top: 30px;
		opacity: 1;
	}
`;

const hide: Keyframes = keyframes`
	0% {
		opacity: 1;
		top: 0px;
	}
  	100% {
		opacity: 0;
		top: -100%;
	}
`;

const animationShow = css`
	${show} 0.6s ease-in-out forwards;
`;

const animationHide = css`
	${hide} 0.6s ease-in-out forwards;
`;

interface IContentProps extends HTMLProps<HTMLDivElement> {
	hide: boolean;
	show: boolean;
	showWithBounce: boolean;
};
const Content: StyledComponent<'div', any, IContentProps, never> = styled.div`
	background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0 1px 8px rgba(0,0,0,0.05);	
    height: auto;
    margin: 50px auto;
    overflow: hidden;
	padding: 0px;
	position: relative;
	width: 600px;
	z-index: 999;
	
	animation: ${(props: IContentProps) => (props.show && !props.hide) ? animationShow : ((!props.show && props.hide) ? animationHide : 'unset')};
    
	@media screen and (max-width: 767px) {
		width: 90%;
	}
	
	@media screen and (min-width: 768px) and (max-width: 991px) {
		width: 90%;
	}
`;

export const ModalHeader: StyledComponent<'div', any, HTMLProps<HTMLDivElement>, never> = styled.div`
	background-color: #1476FB;
    box-sizing: border-box;
    display: inline-block;
    float: left;
    height: 45px;
	margin: 0px;
	padding: 10px;
    width: 100%;
`;

export const ModalTitle: StyledComponent<'label', any, HTMLProps<HTMLLabelElement>, never> = styled.label`
    box-sizing: border-box;
	color: #FFF;	
	height: 24px;
	font-family: "Open Sans", sans-serif;
	font-size: 18px;
	font-stretch: normal;
	font-style: normal;
	font-weight: bold;
	letter-spacing: normal;
	margin: 0px;
	padding: 3px 10px;
	text-align: left;
	width: 100%;
	
	@media screen and (max-width: 767px) {
		font-size: 12px;
		padding: 0px;
		width: calc(100% - 15px);
	}
	
	@media screen and (min-width: 768px) and (max-width: 991px) {
		font-size: 12px;
		padding: 0px;
		width: calc(100% - 15px);
	}
`;

export const ModalBody: StyledComponent<'div', any, HTMLProps<HTMLDivElement>, never> = styled.div`
    background-color: #FFF;
    box-sizing: border-box;
    display: inline-block;
    float: left;
    height: auto;
	margin: 0px;
	padding: 10px;
    width: 100%;
`;

export const ModalFooter: StyledComponent<'div', any, HTMLProps<HTMLDivElement>, never> = styled.div`
    background-color: #FFF;
    border-top: 1px solid #A7A7A7;
    box-sizing: border-box;
    display: inline-block;
    float: left;
    height: 40px;
	margin: 0px;
	padding: 10px;
    width: 100%;
`;

interface IModalProps extends HTMLAttributes<HTMLDivElement> {
	showWithBounce?: boolean;
};
interface IModalState {
	hide: boolean;
	lock: boolean;
	show: boolean;
};
export class Modal extends React.Component<IModalProps, IModalState> {
	//*** CONSTRUCTOR ***
	constructor(props: IModalProps) {
		super(props);
		this.state = {
            show: false,
            hide: false,
            lock: false
		};
	}
	//*** MÉTODOS ***
	show = (): void => {
		this.setState({ show: true, hide: false, lock: true });
	}
	hide = (): void => {
		this.setState({ show: false, hide: true }, () => {
            setTimeout(() => { this.setState({ lock: false }); }, 600);
        });
	}
	//*** RESULTADOS ***
	render() {
		let { showWithBounce, children, ...rest } = this.props;
		return(
			<Layout lock={this.state.lock} {...rest}>
				<Content show={this.state.show} hide={this.state.hide} showWithBounce={showWithBounce || false}>
					{children}
					<RoundButton type='button' theme='flatWhite' size='small' icon='solidTimesCircle' style={{ position: 'absolute', right: '5px', top: '8px' }} onClick={(event: React.MouseEvent<HTMLButtonElement>) => { event.preventDefault(); this.hide(); }}/>
				</Content>
                {
                    this.state.lock ?
                    <Mask/> :
                    null
                }
			</Layout>
		);
	}
}