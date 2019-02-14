//Módulos generales.
import * as React from 'react';
import styled, { css, keyframes, Keyframes, StyledComponent } from 'styled-components';

//Componentes locales.
import { Animate } from '../animations/animations';
import { Theme, RoundButton } from '../buttons/buttons';

//TTTTT EEEEE M   M  AAA
//  T   E     MM MM A   A
//  T   EEE   M M M AAAAA
//  T   E     M   M A   A
//  T   EEEEE M   M A   A

//type Theme = 'IENTC' | 'default';
const headerBackgroundColor = (theme: Theme): string => {
	switch(theme) {
		case 'IENTC': return '#242424';
		default: return '#FFF';
	}
};

const titleColor = (theme: Theme): string => {
	switch(theme) {
		case 'IENTC': return '#FFF';
		default: return '#242424';
	}
};

const buttonTheme = (theme: Theme): string => {
    switch(theme) {
		case 'IENTC': return 'IENTC';
		default: return 'blue';
	}
};

//EEEEE  SSSS TTTTT IIIII L      OOO   SSS
//E     S       T     I   L     O   O S
//EEE    SSS    T     I   L     O   O  SSS
//E         S   T     I   L     O   O     S
//EEEEE SSSS    T   IIIII LLLLL  OOO  SSSS

const Layout: StyledComponent<'div', any, React.HTMLProps<HTMLDivElement>, never> = styled.div`
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

interface IHeaderProps {
    theme: Theme;
};
const Header: StyledComponent<'div', any, IHeaderProps & React.HTMLProps<HTMLDivElement>, never> = styled.div`
    background-color: ${props => headerBackgroundColor(props.theme)};
    box-sizing: border-box;
    display: inline-block;
    float: left;
    height: 50px;
    margin: 0px;
    padding: 10px;
    width: 100%;
`;

const IconWrapper: StyledComponent<'div', any, React.HTMLProps<HTMLDivElement>, never> = styled.div`
    cursor: pointer;
    float: left;
    height: 30px;
    margin: 0px;
    padding: 1px 0px 0px 0px;
    width: 30px;
`;

const Title: StyledComponent<'h1', any, IHeaderProps & React.HTMLProps<HTMLTitleElement>, never> = styled.h1`
    color: ${props => titleColor(props.theme)};
    float: left;
    font-family: "Open Sans", sans-serif;	
    font-size: 20px;
	font-stretch: normal;
	font-style: normal;	
    font-weight: bold;
    height: 30px;
    margin: 0px 0px 0px 10px;
	overflow: hidden;
    padding: 5px 0px 0px 0px;
    text-overflow: ellipsis;
	white-space: nowrap;
    width: calc(100% - 40px);
`;

const ZoomIn = (): Keyframes => keyframes`
    0% {
        opacity: 0;
        transform: scale(0);
	}
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

const ZoomOut = (): Keyframes => keyframes`
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0);
    }
`;

const animationZoomIn = () => css`
	${ZoomIn} 0.1s ease-out forwards;
`;

const animationZoomOut = () => css`
	${ZoomOut} 0.1s ease-out forwards;
`;

interface IOptionsProps {
    hide: boolean;
    show: boolean;
};
const Options: StyledComponent<'div', any, IOptionsProps & React.HTMLProps<HTMLDivElement>, never> = styled.div`
    background-color: transparent;
    box-sizing: border-box;
    display: block;
    height: auto;
    margin: 50px 0px 0px 0px;
    min-width: 300px;
    opacity: 0;
    padding: 0px;
    position: absolute;
    z-index: 999;

    transform: scale(0);
    transform-origin: 0px 0px;

    animation: ${(props: IOptionsProps) => (props.show && !props.hide) ? animationZoomIn: ((props.hide && !props.show) ? animationZoomOut : 'unset')};

	@media screen and (max-width: 767px) {
        min-width: unset;
		width: 80%;
	}
	
	@media screen and (min-width: 768px) and (max-width: 991px) {
		min-width: unset;
		width: 80%;
	}
`;

const Blur = (): Keyframes => keyframes`
    0% {
        filter: blur(0px);
    }
    100% {
        filter: blur(10px);
    }
`;

const Unblur = (): Keyframes => keyframes`
    0% {
        filter: blur(10px);
    }
    100% {
        filter: blur(0px);
    }
`;

const animationBlur = () => css`
	${Blur} 0.2s ease forwards;
`;

const animationUnblur = () => css`
	${Unblur} 0.2s ease forwards;
`;

interface IContentProps {
    blur: boolean;
};
const Content: StyledComponent<'div', any, IContentProps & React.HTMLProps<HTMLDivElement>, never> = styled.div`
    box-sizing: border-box;
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;

    animation: ${(props: IContentProps) => props.blur ? animationBlur : animationUnblur};
`;

interface IMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    //Obligatorios.
    options: Array<any>;
    title: string;
    //Opcionales.
    theme?: Theme;
}
interface IMenuState {
    hide: boolean;
    show: boolean;
};
export class MenuWithBlur extends React.Component<IMenuProps, IMenuState> {
    //*** PROPIEDADES ***
    private OptionsRef: Array<any> = [];
    private OptionsInnerRef: React.RefObject<HTMLDivElement>;
    private HeaderInnerRef: React.RefObject<HTMLDivElement>;
    //*** CONSTRUCTOR ***
    constructor(props: IMenuProps) {
        super(props);
        //Se crean las referencias.
        //this.OptionsRef[0] = React.createRef();
        this.OptionsInnerRef = React.createRef();
        this.HeaderInnerRef = React.createRef();
        this.state = {
            show: false,
            hide: false
        };
    }
    //*** FUNCIONES DEL CICLO DE VIDA DEL COMPONENTE ***
    componentDidMount() {
        //1. Se agrega el "event listener".
        window.addEventListener('mousedown', this.handleMouseDown);
    }
	componentWillUnmount() {
        window.removeEventListener('mousedown', this.handleMouseDown);
	}
    //*** HANDLERS ***
    handleMouseDown = (event: MouseEvent): void => {
        let optionsNode: HTMLDivElement | null = this.OptionsInnerRef.current;
        let headerNode: HTMLDivElement | null = this.HeaderInnerRef.current;
        if((optionsNode && optionsNode.contains(event.target as Node)) || (headerNode && headerNode.contains(event.target as Node))) {
            return;
        } else {
            this.hide();
        }
    }
    handleIconOnClick = (event: any): void => {
        this.show();
    }
    //*** MÉTODOS ***
    show = (): void => {
        this.setState({ show: true, hide: false }, () => {
            this.OptionsRef.forEach((element: any) => {
                if(element) {
                    element.triggerEntranceAnimation();
                }
            });
        });
    }
    hide = (): void => {
        this.OptionsRef.forEach((element: any) => {
            if(element) {
                element.triggerExitAnimation();
            }
        });
        let delay = (this.props.options.length * 100) + 400;
        setTimeout(() => {
            this.setState({ show: false, hide: true });
        }, delay);
    }
    //*** RESULTADO ***
    //NOTA: Falta hacer dinámica la altura de cada componente, ahora está forzada a 40px.
    render() {
        let { options, title, theme, children, ... rest } = this.props;
        return(
            <Layout {...rest}>
                <Header theme={theme} ref={this.HeaderInnerRef}>
                    <IconWrapper>
                        <RoundButton id='btn-menu-options' icon='solidTh' theme={buttonTheme(theme || 'blue')} size='small' onClick={this.handleIconOnClick}/>
                    </IconWrapper>
                    <Title theme={theme}>{title}</Title>
                </Header>
                <Options show={this.state.show} hide={this.state.hide} ref={this.OptionsInnerRef}>
                    {
                        options.map((option, index) => {
                            let animationDelay = (index * 2) / 10;
                            let animationTop = index * 40;
                            return(<Animate 
                                        key={`a-${index}`}
                                        enterWithBounce={false}
                                        executeWhen={'onDemand'}
                                        from={'left'}
                                        type={'fade'}
                                        style={{ animationDelay: `${animationDelay}s`, height: '40px', top: `${animationTop}px`, width: '100%' }} 
                                        ref={(animate) => { 
                                            if(animate) {
                                                //let newOption: RefObject<Animate> | null;
                                                //newOption = React.createRef();
                                                //newOption = animate;
                                                this.OptionsRef.push(animate);
                                            }
                                        }} 
                                        onClick={() => { this.hide(); }}>{option}</Animate>);
                        })
                    }
                </Options>
                <Content blur={this.state.show}>
                    {children}
                </Content>
            </Layout>
        );
    }
}