//Componentes generales.
import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

const Input: StyledComponent<'label', any, React.HTMLProps<HTMLLabelElement>, never> = styled.label`
    box-sizing: border-box;
    color: #242424;
    cursor: pointer;
    display: inline-block;
	height: 30px;
	font-family: "Open Sans", sans-serif;
	font-size: 16px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	letter-spacing: normal;
	margin: 0px;
	padding: 5px 0px 0px 25px;
	position: relative;
	text-align: left;
	width: auto;
    white-space: nowrap;
`;

interface ICheckMarkProps extends React.HTMLAttributes<HTMLDivElement> {
    checked: boolean;
};
const CheckMark: StyledComponent<'div', any, ICheckMarkProps, never> = styled.div`
    background-color: ${(props: ICheckMarkProps) => props.checked ? `#1476FB`: `#BFBFBF`};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    height: 20px;
    left: 0;
    margin: 0px;
    position: absolute;
    top: 5px;
    width: 20px;
    
	transition: all .3s;
	
    ${Input}:hover & {
        background-color: ${(props: ICheckMarkProps) => props.checked ? `#11AAFF`: `#A7A7A7`};
    }

    ${(props: ICheckMarkProps) => props.checked ? `
        &:after {
            border: solid white;
            border-width: 0px 3px 3px 0px;
            content: "";
            display: block;
            height: 10px;
            left: 6px;
            position: absolute;
            top: 2px;
            width: 5px;

            transform: rotate(45deg);
        }` : ``}
`;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
interface IRadioButtonProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
    checked: boolean;
    value: string | number;
    onChange?: (event: string | number) => void;
};
export class RadioButton extends React.Component<IRadioButtonProps, {}> {
    render() {
        let { checked, value, onChange, children, ...rest } = this.props;
        return(
            <Input {...rest} onClick={() => { if(onChange) { onChange(value); } }}>
                <CheckMark checked={checked}/>
                {children}
            </Input>
        );
    }
}

// GGGG RRRR  U   U PPPP   OOO
//G     R   R U   U P   P O   O
//G  GG RRRR  U   U PPPP  O   O
//G   G R   R U   U P     O   O
// GGGG R   R  UUU  P      OOO

const Layout: StyledComponent<'div', any, React.HTMLProps<HTMLDivElement>, never> = styled.div`
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: auto;
`;

const Buttons: StyledComponent<'div', any, React.HTMLProps<HTMLDivElement>, never> = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

interface IOption {
    name: string;
    value: string | number;
};
interface IRadioButtonsGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    options: Array<IOption>;
    selectedValue: string | number;
    onChange?: Function;
};
interface IRadioButtonsGroupState {
    selectedValue: string | number;
};
export class RadioButtonsGroup extends React.Component<IRadioButtonsGroupProps, IRadioButtonsGroupState> {
    //*** CONSTRUCTOR ***
    constructor(props: IRadioButtonsGroupProps) {
        super(props);
        this.state = {
            selectedValue: this.props.selectedValue
        };
    }
    //*** MÉTODOS ***
    getValue = (): string | number => {
        return this.state.selectedValue;
    }
    setValue = (value: string | number): void => {
        this.setState({ selectedValue: value });
    }
    //*** RESULTADO ***
    render() {
        let { options, selectedValue, onChange, ...rest } = this.props;
        return(
            <Layout {...rest}>
                <Buttons>
                    {
                        options.map((option, index) => <RadioButton key={`rbt-opt-${index}`} value={option.value} checked={option.value == this.state.selectedValue} onChange={(value: string | number) => { this.setState({ selectedValue: value }); if(onChange) { onChange(value); } }}>{option.name}</RadioButton>)
                    }
                </Buttons>
            </Layout>
        );
    }
}