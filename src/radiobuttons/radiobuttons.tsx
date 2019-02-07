//Componentes generales.
import React, { Component, HTMLProps } from 'react';
import PropTypes from 'prop-types';
import styled, { AnyStyledComponent } from 'styled-components';

const Input: AnyStyledComponent<HTMLProps<HTMLLabelElement>, any> = styled.label`
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

interface ICheckMarkProps {
    checked: boolean;
};
const CheckMark: AnyStyledComponent<ICheckMarkProps & HTMLProps<HTMLDivElement>, any> = styled.div`
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

interface IRadioButtonProps extends ICheckMarkProps {
    value: string | number;
    onChange?: Function;
};
export class RadioButton extends Component<IRadioButtonProps, {}> {
    render() {
        return(
            <Input {...this.props} onClick={() => { if(this.props.onChange) { this.props.onChange(this.props.value); } }}>
                <CheckMark checked={this.props.checked}/>
                {this.props.children}
            </Input>
        );
    }
}

// GGGG RRRR  U   U PPPP   OOO
//G     R   R U   U P   P O   O
//G  GG RRRR  U   U PPPP  O   O
//G   G R   R U   U P     O   O
// GGGG R   R  UUU  P      OOO

const Layout: AnyStyledComponent<HTMLProps<HTMLDivElement>, any> = styled.div`
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: auto;
`;

const Buttons: AnyStyledComponent<HTMLProps<HTMLDivElement>, any> = styled.div`
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
interface IRadioButtonsGroupProps {
    options: Array<IOption>;
    selectedValue: string | number;
    onChange?: Function;
};
interface IRadioButtonsGroupState {
    selectedValue: string | number;
};
export class RadioButtonsGroup extends Component<IRadioButtonsGroupProps, IRadioButtonsGroupState> {
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
        return(
            <Layout>
                <Buttons>
                    {
                        this.props.options.map((option, index) => <RadioButton key={`rbt-opt-${index}`} value={option.value} checked={option.value == this.state.selectedValue} onChange={(value: string | number) => { this.setState({ selectedValue: value }); if(this.props.onChange) { this.props.onChange(value); } }}>{option.name}</RadioButton>)
                    }
                </Buttons>
            </Layout>
        );
    }
}