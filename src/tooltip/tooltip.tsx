//Componentes generales.
import React, { createRef, HTMLProps, HTMLAttributes } from 'react';
import styled, { withTheme, StyledComponent } from 'styled-components';

//FFFFF U   U N   N  CCCC IIIII  OOO  N   N EEEEE  SSSS
//F     U   U NN  N C       I   O   O NN  N E     S
//FFF   U   U N N N C       I   O   O N N N EEE    SSS
//F     U   U N  NN C       I   O   O N  NN E         S
//F      UUU  N   N  CCCC IIIII  OOO  N   N EEEEE SSSS

export type Elevation = 4 | 8 | 10 | 14 | 18 | 32;
const getTooltipBoxShadow = (elevation: Elevation): string => {
	switch(elevation) {
		case 4:
			return `box-shadow:  0px 0px 4px 1px rgba(0, 0, 0, 0.05);`;
		case 8:
			return `box-shadow:  0px 0px 8px 1px rgba(0, 0, 0, 0.05);`;
		case 10:
			return `box-shadow:  0px 0px 10px 1px rgba(0, 0, 0, 0.1);`;
		case 14:
			return `box-shadow:  0px 0px 14px 1px rgba(0, 0, 0, 0.1);`;
		case 18:
			return `box-shadow:  0px 0px 18px 1px rgba(0, 0, 0, 0.1);`;
		case 32:
			return `box-shadow:  0px 0px 32px 1px rgba(0, 0, 0, 0.1);`;
		default:
			return `box-shadow: unset;`;
	}
};

export type At = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
interface Theme {
    content: {
        backgroundColor: string;
        borderColor: string;
    },
    arrow: {
        backgroundColor: string;
        borderColor: string;
    }
};
//NOTA: No se está tomando en cuenta cualquier posible offSet que se mande por propiedades :(.
const getArrowPosition = (at: At, theme: Theme): string => {
    switch(at) {
        case 'top':
            return `                        
                &:before {
                    border-bottom: 10px solid transparent;
                    border-top: 10px solid ${theme.arrow.borderColor};
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    bottom: -15px;
                    content: '';
                    height: 0px;
                    pointer-events: none;
                    position: absolute;
                    right: calc(50% - 10px);
                    width: 0px;
                }

                &:after {
                    border-bottom: 9px solid transparent;
                    border-top: 9px solid ${theme.arrow.backgroundColor};
                    border-left: 9px solid transparent;
                    border-right: 9px solid transparent;
                    bottom: -13px;
                    content: '';
                    height: 0px;
                    pointer-events: none;
                    position: absolute;
                    right: calc(50% - 9px);
                    width: 0px;
                }
            `;
        case 'bottom':
            return `                        
                &:before {
                    border-bottom: 10px solid ${theme.arrow.borderColor};
                    border-top: 10px solid transparent;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    bottom: 100%;
                    content: '';
                    height: 0px;
                    pointer-events: none;
                    position: absolute;
                    right: calc(50% - 10px);
                    width: 0px;
                }

                &:after {
                    border-bottom: 9px solid ${theme.arrow.backgroundColor};
                    border-top: 9px solid transparent;
                    border-left: 9px solid transparent;
                    border-right: 9px solid transparent;
                    bottom: 100%;
                    content: '';
                    height: 0px;
                    pointer-events: none;
                    position: absolute;
                    right: calc(50% - 9px);
                    width: 0px;
                }
            `;
        case 'left':
            return `                        
                &:before {
                    border-bottom: 10px solid transparent;
                    border-top: 10px solid transparent;
                    border-left: 10px solid ${theme.arrow.borderColor};
                    border-right: 10px solid transparent;
                    bottom: calc(50% - 10px);
                    content: '';
                    height: 0px;
                    left: calc(100% - 1px);
                    pointer-events: none;
                    position: absolute;
                    width: 0px;
                }

                &:after {
                    border-bottom: 9px solid transparent;
                    border-top: 9px solid transparent;
                    border-left: 9px solid ${theme.arrow.backgroundColor};
                    border-right: 9px solid transparent;
                    bottom: calc(50% - 9px);
                    content: '';
                    height: 0px;
                    left: calc(100% - 1px);
                    pointer-events: none;
                    position: absolute;
                    width: 0px;
                }
            `;
        case 'right':
            return `                        
                &:before {
                    border-bottom: 10px solid transparent;
                    border-top: 10px solid transparent;
                    border-left: 10px solid transparent;
                    border-right: 10px solid ${theme.arrow.borderColor};
                    bottom: calc(50% - 10px);
                    content: '';
                    height: 0px;
                    pointer-events: none;
                    position: absolute;
                    right: calc(100% - 1px);
                    width: 0px;
                }

                &:after {
                    border-bottom: 9px solid transparent;
                    border-top: 9px solid transparent;
                    border-left: 9px solid transparent;
                    border-right: 9px solid ${theme.arrow.backgroundColor};
                    bottom: calc(50% - 9px);
                    content: '';
                    height: 0px;
                    pointer-events: none;
                    position: absolute;
                    right: calc(100% - 1px);
                    width: 0px;
                }
            `;
        case 'top-left':
            return `                        
                &:before {
                    border-bottom: 10px solid transparent;
                    border-top: 10px solid ${theme.arrow.borderColor};
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    top: calc(100% - 5px);
                    content: '';
                    height: 0px;
                    pointer-events: none;
                    position: absolute;
                    right: 10px;
                    width: 0px;
                }

                &:after {
                    border-bottom: 9px solid transparent;
                    border-top: 9px solid ${theme.arrow.backgroundColor};
                    border-left: 9px solid transparent;
                    border-right: 9px solid transparent;
                    top: calc(100% - 5px);
                    content: '';
                    height: 0px;
                    pointer-events: none;
                    position: absolute;
                    right: 11px;
                    width: 0px;
                }
            `;
        case 'top-right':
            return `                        
                &:before {
                    border-bottom: 10px solid transparent;
                    border-top: 10px solid ${theme.arrow.borderColor};
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    top: calc(100% - 5px);
                    content: '';
                    height: 0px;
                    pointer-events: none;
                    position: absolute;
                    left: 10px;
                    width: 0px;
                }

                &:after {
                    border-bottom: 9px solid transparent;
                    border-top: 9px solid ${theme.arrow.backgroundColor};
                    border-left: 9px solid transparent;
                    border-right: 9px solid transparent;
                    top: calc(100% - 5px);
                    content: '';
                    height: 0px;
                    pointer-events: none;
                    position: absolute;
                    left: 11px;
                    width: 0px;
                }
            `;
        case 'bottom-left':
            return `                        
                &:before {
                    border-bottom: 10px solid ${theme.arrow.borderColor};
                    border-top: 10px solid transparent;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    bottom: calc(100% - 1px);
                    content: '';
                    height: 0px;
                    pointer-events: none;
                    position: absolute;
                    right: 10px;
                    width: 0px;
                }

                &:after {
                    border-bottom: 9px solid ${theme.arrow.backgroundColor};
                    border-top: 9px solid transparent;
                    border-left: 9px solid transparent;
                    border-right: 9px solid transparent;
                    bottom: calc(100% - 1px);
                    content: '';
                    height: 0px;
                    pointer-events: none;
                    position: absolute;
                    right: 11px;
                    width: 0px;
                }
            `;
        case 'bottom-right':
            return `                        
                &:before {
                    border-bottom: 10px solid ${theme.arrow.borderColor};
                    border-top: 10px solid transparent;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    bottom: calc(100% - 1px);
                    content: '';
                    height: 0px;
                    pointer-events: none;
                    position: absolute;
                    left: 10px;
                    width: 0px;
                }

                &:after {
                    border-bottom: 9px solid ${theme.arrow.backgroundColor};
                    border-top: 9px solid transparent;
                    border-left: 9px solid transparent;
                    border-right: 9px solid transparent;
                    bottom: calc(100% - 1px);
                    content: '';
                    height: 0px;
                    pointer-events: none;
                    position: absolute;
                    left: 11px;
                    width: 0px;
                }
            `;
    }
};

//EEEEE  SSSS TTTTT IIIII L      OOO   SSS
//E     S       T     I   L     O   O S
//EEE    SSS    T     I   L     O   O  SSS
//E         S   T     I   L     O   O     S
//EEEEE SSSS    T   IIIII LLLLL  OOO  SSSS

interface IPosition {
    left: number;
    top: number;
};
interface IWrapperProps {
    position: IPosition;
};
const PositionWrapper: StyledComponent<'div', any, IWrapperProps & HTMLProps<HTMLDivElement>, never> = styled.div`
    left: ${(props: {position: IPosition}) => props.position.left}px;
    position: fixed;
    top: ${(props: {position: IPosition}) => props.position.top}px;
    z-index: 97;

	&:focus {
		outline: none;
	}
`;

interface ILayoutProps extends HTMLAttributes<HTMLDivElement> {
    at: At;
    show: boolean;
    theme: Theme;
};
const Layout: StyledComponent<'div', any, ILayoutProps, never> = styled.div`
    background-color: ${(props: ILayoutProps) => props.theme.content.backgroundColor};
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    display: ${(props: ILayoutProps) => props.show ? `inline-block` : `none`};
    height: auto;
    margin: 0px;
    padding: 0px;
    position: relative;
    width: auto;

    transition: all .3s;
    
    ${(props: ILayoutProps) => getArrowPosition(props.at, props.theme)}

    @media screen and (max-width: 767px) {
        
    }

    @media screen and (min-width: 768px) and (max-width: 991px) {
        
    }
`;

interface IContentProps {
    elevation: Elevation;
    theme: Theme;
};
const Content: StyledComponent<'div', any, IContentProps & HTMLProps<HTMLDivElement>, never> = styled.div`
    background-color: ${(props: IContentProps) => props.theme.content.backgroundColor};
    border: 1px solid ${(props: IContentProps) => props.theme.content.borderColor};
    border-radius: 5px;
    display: inline-block;
    height: auto;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
    width: auto;
    z-index: 98;

    ${(props: IContentProps) => getTooltipBoxShadow(props.elevation)}

`;

export const addToolTipSize = (tooltip: any, position: IPosition, anchor: any, at: At, offSet: number): { top: number; left: number; } => {

    /*
       TOP-LEFT         TOP          TOP-RIGHT
                ┌──────────────────┐
                │                  │
           LEFT │                  │ RIGHT
                │                  │
                └──────────────────┘
    BOTTOM-LEFT        BOTTOM        BOTTOM-RIGHT
    */

    //Se le suman / restan las cooredenadas del tooltip dependiendo de la posición deseada.
    //let top: number = position.top;
    //let left: number = position.left;
    let top: number = anchor.top;
    let left: number = anchor.left;
    switch(at) {
        case 'top':
            top -= (tooltip.height + 10 + offSet);
            if(anchor.width >= tooltip.width) {
                left += ((anchor.width / 2) - (tooltip.width / 2));
            } else {
                left -= ((tooltip.width / 2) - (anchor.width / 2));
            }
            break;
        case 'bottom':
            //top += (anchor.height + 10 + offSet);
            top = (anchor.top + anchor.height + 10 + offSet);
            if(anchor.width >= tooltip.width) {
                left += ((anchor.width / 2) - (tooltip.width / 2));
            } else {
                left -= ((tooltip.width / 2) - (anchor.width / 2));
            }
            break;
        case 'left':
            left -= (tooltip.width + 10 + offSet);
            if(anchor.height >= tooltip.height) {
                top += ((anchor.height / 2) - (tooltip.height / 2));
            } else {
                top -= ((tooltip.height / 2) - (anchor.height / 2));
            }
            break;
        case 'right':
            left += (anchor.width + 10 + offSet);
            if(anchor.height >= tooltip.height) {
                top += ((anchor.height / 2) - (tooltip.height / 2));
            } else {
                top -= ((tooltip.height / 2) - (anchor.height / 2));
            }
            break;
        case 'top-left':
            top -= (tooltip.height + 10 + offSet);
            left -= (tooltip.width - (anchor.width / 2) - 20);
            break;
        case 'top-right':
            top -= (tooltip.height + 10 + offSet);
            left += (anchor.width - (anchor.width / 2) - 20);
            break;
        case 'bottom-left':
            //top += (anchor.height + 10 + offSet);
            top = (anchor.top + anchor.height + 10 + offSet);
            //left -= (tooltip.width - (anchor.width / 2) - 20);
            left -= (tooltip.width - (anchor.width / 2) - 20);
            break;
        case 'bottom-right':
            top += (anchor.height + 10 + offSet);
            left += (anchor.width - (anchor.width / 2) - 20);
            break;
    }
    //Se devuelve la posición del ancla.
    return { top, left };
}

interface IToolTipProps extends HTMLAttributes<HTMLDivElement> {
    //Obligatorios.
    anchorID: string;
    theme: Theme;
    //Opcionales.
    at?: At;
    elevation?: Elevation;
    offSet?: number;
};
interface IToolTipState {
    show: boolean;
    hide: boolean;
    position: IPosition;
};
export class ToolTip extends React.Component<IToolTipProps, IToolTipState> {
	//*** REFERENCIAS ***
	private ToolTipWrapperInnerRef: React.RefObject<HTMLDivElement>;
	//*** CONSTRUCTOR ***
	constructor(props: IToolTipProps & HTMLProps<HTMLDivElement>) {
        super(props);
        
		//Se crean las referencias.
		this.ToolTipWrapperInnerRef = createRef();

		this.state = {
            show: false,
            hide: false,
            position: {
                left: 0,
                top: 0
            }
		};
    }
    //*** FUNCIONES DEL CICLO DE VIDA DEL COMPONENTE ***
    componentDidMount() {
        //1. Se agrega el "event listener".
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('mousedown', this.handleMouseDown);
    }
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
		window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('mousedown', this.handleMouseDown);
	}
    //*** HANDLERS ***
    handleResize = (event: any): void => {
        //Se obtiene la posición del componente ancla.
        let anchorRef: HTMLElement | null = document.getElementById(this.props.anchorID);
        let node: HTMLDivElement | null = this.ToolTipWrapperInnerRef.current;
        if(anchorRef && node) {
            let position: { top: number; left: number; } = this.anchorPosition(anchorRef);
            //if(this.state.show) {
                let tooltip: ClientRect | DOMRect = node.getBoundingClientRect();
                let anchor: ClientRect | DOMRect = anchorRef.getBoundingClientRect();
                position = addToolTipSize(tooltip, position, anchor, this.props.at as At, this.props.offSet || 0);
            //}
            this.setState({ position });
        }
    }
	handleScroll = (event: any): void => {
		/*
		event: {
			path: [
				document,
				window: {
					innerHeight: ###,
					innerWidth: ###
				}
			]
		}
		*/
		//this.anchorRef.getBoundingClientRect());
		/*
			DOMRect: {
				bottom: 2173,
				height: 100,
				left: 618,
				right: 718,
				top: 2073,
				width: 100,
				x: 618,
				y: 2073
			}
		*/
        //Se obtiene la posición del componente ancla.
        let anchorRef: HTMLElement | null = document.getElementById(this.props.anchorID);
        let node: HTMLDivElement | null = this.ToolTipWrapperInnerRef.current;
        if(anchorRef && node) {
            let position = this.anchorPosition(anchorRef);
            //if(this.state.show) {
                let tooltip: ClientRect | DOMRect = node.getBoundingClientRect();
                let anchor: ClientRect | DOMRect = anchorRef.getBoundingClientRect();
                position = addToolTipSize(tooltip, position, anchor, this.props.at as At, this.props.offSet || 0);
                /*
                console.log('[TOOLTIP][handleScroll] ToolTip: ', tooltip);
                console.log('[TOOLTIP][handleScroll] Ancla: ', anchor);
                console.log('[TOOLTIP][handleScroll] Posición: ', position);
                */
            //}
            this.setState({ position });
        }
    }
    handleMouseDown = (event: any): void => {
        let node: HTMLDivElement | null = this.ToolTipWrapperInnerRef.current;
        if(node && node.contains(event.target as Node)) {
            return;
        } else {
            this.hide();
        }
    }
    //*** FUNCIONES ***
    anchorPosition = (anchor: any): { top: number; left: number; } => {
        //1. Se obtiene la pocisión del componente ancla en el documento y el scroll de la ventana.
        let rect: ClientRect | DOMRect = anchor.getBoundingClientRect();
        let scrollLeft: number = window.pageXOffset || document.documentElement.scrollLeft;
        let scrollTop: number = window.pageYOffset || document.documentElement.scrollTop;
        //2. Se obtiene la posición del componente con respecto a la ventana.
        let top: number = rect.top + scrollTop;
        let left: number = rect.left + scrollLeft;
        //3. Se devuelve la posición del ancla.
        return { top, left };
    }
	//*** MÉTODOS ***
	show = (): void => {
        if(!this.state.show) {
            //NOTA IMPORTATE (POR QUE SE ME OLVIDA): Se debe mostrar primero el control o si no no se puede obtener su altura.
            this.setState({ show: true, hide: false }, () => {
                let anchorRef: HTMLElement | null = document.getElementById(this.props.anchorID);
                let node: HTMLDivElement | null = this.ToolTipWrapperInnerRef.current;
                if(anchorRef && node) {
                    let position: { top: number; left: number; } = this.anchorPosition(anchorRef);
                    let tooltip: ClientRect | DOMRect = node.getBoundingClientRect();
                    let anchor: ClientRect | DOMRect = anchorRef.getBoundingClientRect();
                    position = addToolTipSize(tooltip, position, anchor, this.props.at as At, this.props.offSet || 0);
                    /*
                    console.log('[TOOLTIP][show] ToolTip: ', tooltip);
                    console.log('[TOOLTIP][show] Ancla: ', anchor);
                    console.log('[TOOLTIP][show] Posición: ', position);                
                    */
                    this.setState({ position });
                    node.focus();
                }
            });
        }
	}
	hide = (): void => {
		this.setState({ show: false, hide: true });
	}
	//*** RESULTADO ***
	render() {
        
		//PPPP  RRRR   OOO  PPPP  IIIII EEEEE DDDD   AAA  DDDD  EEEEE  SSSS
		//P   P R   R O   O P   P   I   E     D   D A   A D   D E     S
		//PPPP  RRRR  O   O PPPP    I   EEE   D   D AAAAA D   D EEE    SSS
		//P     R   R O   O P       I   E     D   D A   A D   D E         S
		//P     R   R  OOO  P     IIIII EEEEE DDDD  A   A DDDD  EEEEE SSSS
		
        let { anchorID, theme, at, elevation, offSet, children, ...rest } = this.props;

		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO
		
		return (
            <PositionWrapper position={this.state.position} ref={this.ToolTipWrapperInnerRef}>
                <Layout {...rest} at={at || 'top' as At} show={this.state.show} theme={theme}>
                    <Content elevation={elevation || 32 as Elevation} theme={theme}>
                        {children}
                    </Content>
                </Layout>
            </PositionWrapper>
		);
	}	
}

//export default withTheme(ToolTip);