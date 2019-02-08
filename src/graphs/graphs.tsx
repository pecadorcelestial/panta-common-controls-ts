//Modulos generales.
import React, { Component, HTMLProps, HTMLAttributes } from 'react';
import styled, { css, keyframes, Keyframes, StyledComponent } from 'styled-components';

type Theme = 'red' | 'blue' | 'green' | 'yellow' | 'gray' | 'orange' | 'black' | 'IENTC';
const backgroundColor = (theme: Theme): string => {
	switch(theme) {
		case 'red': return '#FF456A';
		case 'blue': return '#1476FB';
		case 'green': return '#4CB050';
		case 'yellow': return '#FFE200';
		case 'gray': return '#858585';
        case 'orange': return '#FF9700';
		case 'black': return '#242424';
        case 'IENTC': return '#FF0000';
	}
};

const Layout: StyledComponent<'div', any, HTMLProps<HTMLDivElement>, never> = styled.div`
    justify-content: space-around;
    width: 200px;
`;

const SVG: StyledComponent<'svg', any, HTMLProps<SVGSVGElement>, never> = styled.svg`
    display: block;
    margin: 10px auto;
    max-height: 200px;
    max-width: 200px;
`;

const OutterPath: StyledComponent<'path', any, HTMLProps<SVGPathElement>, never> = styled.path`
    fill: none;
    stroke: #EEE;
    stroke-width: 2.8;
`;

const progress = (percent: number): Keyframes => keyframes`
    0% {
        stroke-dasharray: 0 100;
    }
    100% {
        stroke-dasharray: ${percent} 100;
    }
`;

const animationF = (props: IInnerPathProps) => css`
	${progress(props.percent)} 0.6s ease-out forwards;
`;

interface IInnerPathProps {
    theme: Theme;
    percent: number;
};
const InnerPath: StyledComponent<'path', any, IInnerPathProps & HTMLProps<SVGPathElement>, never> = styled.path`
    fill: none;
    stroke-linecap: round;
    stroke: ${(props: IInnerPathProps) => backgroundColor(props.theme)};
    stroke-width: 2.8;

    animation: ${animationF};
`;

const Text: StyledComponent<'text', any, IInnerPathProps & HTMLProps<HTMLTextAreaElement>, never> = styled.text`
    fill: #666;
    font-family: "Open Sans", sans-serif;
    font-size: 0.5em;
	font-stretch: normal;
	font-style: normal;	
	font-weight: bold;
    text-anchor: middle;
`;

interface ICircularGraphProps extends HTMLAttributes<HTMLDivElement> {
    theme: Theme;
    percent: number;
};
export class CircularGraph extends Component<ICircularGraphProps, {}> {
    render() {
        let { theme, percent, ...rest } = this.props;
        return(
            <Layout {...rest}>
                <SVG viewBox="0 0 36 36">
                    <OutterPath
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <InnerPath
                        percent={percent}
                        theme={theme}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <Text x="18" y="20.35" percent={percent}>{`${percent}%`}</Text>
                </SVG>
            </Layout>
        );
    }
}