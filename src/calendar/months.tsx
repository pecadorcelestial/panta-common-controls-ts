//Componentes generales.
import React, { Component, HTMLProps } from 'react';
import styled, { ThemeProvider, AnyStyledComponent } from 'styled-components';
import theme from 'styled-theming';

//Funciones.
import { getMonthName } from '../scripts/date-functions';

//TTTTT EEEEE M   M  AAA   SSSS
//  T   E     MM MM A   A S
//  T   EEE   M M M AAAAA  SSS
//  T   E     M   M A   A     S
//  T   EEEEE M   M A   A SSSS

const headerBackgroundColor: theme.ThemeSet = theme('theme', {
    default: '#1476FB'
});

const headerFontColor: theme.ThemeSet = theme('theme', {
    default: '#FFF'
});

const headerButtonsHover: theme.ThemeSet = theme('theme', {
    default: '#0960D3'
});

//EEEEE  SSSS TTTTT IIIII L      OOO   SSS
//E     S       T     I   L     O   O S
//EEE    SSS    T     I   L     O   O  SSS
//E         S   T     I   L     O   O     S
//EEEEE SSSS    T   IIIII LLLLL  OOO  SSSS

const Layout: AnyStyledComponent<HTMLProps<HTMLDivElement>, any> = styled.div`
    box-sizing: border-box;
    min-height: 195px;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
    width: 185px;
`;

const Header: AnyStyledComponent<HTMLProps<HTMLDivElement>, any> = styled.div`
    background-color: ${headerBackgroundColor};
    box-sizing: border-box;
    height: 35px;
    margin: 0px;
    padding: 5px;
    position: relative;
    text-align: center;
    width: 100%;
`;

const YearButton: AnyStyledComponent<HTMLProps<HTMLButtonElement>, any> = styled.button`
    background-color: transparent;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    color: ${headerFontColor};
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: bold;
    height: 25px;
    margin: 0px 0px 5px 0px;
    padding: 2px 15px;
    width: auto;
    
    &:hover {
        background-color: ${headerButtonsHover};
        text-decoration: none;
    }
    
	&:focus {
		outline: none;
	}
`;

const Body: AnyStyledComponent<HTMLProps<HTMLDivElement>, any> = styled.div`
    background-color: #FFF;
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    padding: 5px;
    width: 100%;
`;

interface IMonthsProps {
    //Obligatorios.
    selectedDate: Date;
    innerDate: Date;
    //Opcionales.
    language?: string;
    minDate?: Date;
    theme?: string;
    //Funciones.
    yearOnClick: Function;
    onChange: (date: Date) => void;
};
export default class Months extends Component<IMonthsProps, {}> {
    //*** CONSTRUCTOR ***
    /*
    constructor(props) {
        super(props);
        let months = getAllMonthsName(this.props.language);
        this.state = {
            months
        };
    }
    */
    //*** HANDLERS ***
    handleMonthOnClick = (event: React.MouseEvent<HTMLButtonElement>, month: number): void => {
        let date: Date = new Date(this.props.innerDate);
        date.setMonth(month);
        this.props.onChange(date);
    }
    //*** RESULTADO ***
    render() {
        let { selectedDate, innerDate, language, minDate, theme, yearOnClick, onChange, ...rest } = this.props;
        const months: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        return(
            <ThemeProvider theme={{ theme: this.props.theme }}>
                <Layout {...rest}>
                    <Header>
                        <YearButton type='button' id='btn-years' onClick={() => this.props.yearOnClick()}>{`${this.props.innerDate.getFullYear()}`}</YearButton>
                    </Header>
                    <Body>
                        {
                            months.map((month, index) => {
                                let date: Date = new Date();
                                date.setMonth(month, 1);
                                date.setFullYear(innerDate.getFullYear());
                                const selected: boolean = (month === selectedDate.getMonth() && date.getFullYear() === selectedDate.getFullYear());
                                const disabled: boolean | undefined = (minDate && (month < minDate.getMonth() && date.getFullYear() <= minDate.getFullYear()));
                                const state: 'selected' | 'disabled' | 'normal' = selected ? 'selected' : (disabled ? 'disabled' : 'normal');
                                const monthProps: any = {
                                    key: `month-${month}-${index}`,
                                    state,
                                    disabled,
                                    onClick: (event: React.MouseEvent<HTMLButtonElement>) => this.handleMonthOnClick(event, index)
                                };
                                return(<Month type='button' {...monthProps}>{getMonthName(date)}</Month>);
                            })
                        }
                    </Body>
                </Layout>
            </ThemeProvider>
        );
    }
}

const getYearButtonTheme = (state: 'selected' | 'disabled' | 'normal'): string => {
    switch(state) {
        case 'selected':
            return `
                background-color: #1476FB;
                color: #FFF;

                &:hover {
                    background-color: #0960D3;
                    color: #FFF;
                    text-decoration: none;
                }
            `;
        case 'disabled':
            return `
                background-color: transparent;
                color: #BFBFBF;
                cursor: default;
                pointer-events: none;

                &:hover {
                    background-color: transparent;
                    color: #BFBFBF;
                    text-decoration: none;
                }
            `;
        case 'normal':
        default:
            return `
                background-color: transparent;
                color: #242424;

                &:hover {
                    background-color: #BFBFBF;
                    color: #000;
                    text-decoration: none;
                }
            `;
    }
}

interface IMonthProps {
    state: 'selected' | 'disabled' | 'normal';
};
const Month: AnyStyledComponent<IMonthProps & HTMLProps<HTMLButtonElement>, any> = styled.button`
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: bold;
    height: 25px;
    margin: 0px;
    padding: 0px;
    width: 50%;
    
    ${(props: IMonthProps) => getYearButtonTheme(props.state)}

    &:focus {
		outline: none;
	}
`;