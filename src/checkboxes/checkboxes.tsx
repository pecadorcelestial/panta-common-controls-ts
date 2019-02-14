//Componentes generales.
import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

const Layout = styled.div`
    box-sizing: border-box;
	display: inline-block;
	height: 30px;
	margin: 0px;
	padding: 0px;
    width: auto;
`;

interface ICheckMarkProps extends React.HTMLAttributes<HTMLDivElement> {
    checked: boolean;
};
const CheckMark: StyledComponent<'div', any, ICheckMarkProps, never> = styled.div`
    background-color: ${(props: ICheckMarkProps) => props.checked ? `#1476FB`: `#BFBFBF`};
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 20px;
    margin: 5px 0px 0px 0px;
    width: 20px;
    
    ${Layout}:hover & {
        background-color: ${(props: ICheckMarkProps) => props.checked ? `#11AAFF`: `#A7A7A7`};
    }

    ${(props: ICheckMarkProps) => props.checked ? `
        &:after {
            border: solid white;
            border-width: 0px 3px 3px 0px;
            content: "";
            display: block;
            height: 10px;
            margin: 2px 0px 0px 6px;
            width: 5px;

            transform: rotate(45deg);
        }` : ``}
`;

const Title: StyledComponent<'label', any, React.HTMLProps<HTMLLabelElement>, never> = styled.label`
    box-sizing: border-box;
    color: #242424;
    cursor: pointer;
    display: inline-block;
    float: left;
	height: 30px;
	font-family: "Open Sans", sans-serif;
	font-size: 16px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	letter-spacing: normal;
	margin: 0px;
	padding: 4px 0px 0px 5px;
	text-align: left;
	width: auto;
    white-space: nowrap;
`;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
interface ICheckBoxProps extends Omit<ICheckMarkProps, 'onChange'> {
    onChange?: Function;
};
interface ICheckBoxState {
    checked: boolean;
};
export class CheckBox extends React.Component<ICheckBoxProps, ICheckBoxState> {
    //*** CONSTRUCTOR ***
    constructor(props: ICheckBoxProps) {
        super(props);
        this.state = {
            checked: this.props.checked
        };
    }
    //*** MÉTODOS ***
    getValue = (): boolean => {
        return this.state.checked;
    }
    setValue = (value: boolean): void => {
        this.setState({ checked: value });
    }
    //*** RESULTADO ***
    render() {
        let { checked, onChange, ...rest} = this.props;
        return(
            <Layout {...rest} onClick={() => { let checked = !this.state.checked; this.setState({ checked }); if(this.props.onChange) this.props.onChange(checked); }}>
                <CheckMark checked={this.state.checked}/>
                <Title checked={this.state.checked}>{this.props.children}</Title>
            </Layout>
        );
    }
}