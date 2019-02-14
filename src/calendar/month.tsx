//Componentes generales.
import * as React from 'react';
import styled, { ThemeProvider, StyledComponent } from 'styled-components';
import theme from 'styled-theming';

//Funciones.
import { getMonthName, getAllDaysInMonth } from '../scripts/date-functions';

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

const Layout: StyledComponent<'div', any, React.HTMLProps<HTMLDivElement>, never> = styled.div`
    box-sizing: border-box;
    min-height: 195px;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
    width: 185px;
`;

const Header: StyledComponent<'div', any, React.HTMLProps<HTMLDivElement>, never> = styled.div`
    background-color: ${headerBackgroundColor};
    box-sizing: border-box;
    height: 60px;
    margin: 0px;
    padding: 5px;
    position: relative;
    text-align: center;
    width: 100%;
`;

const MonthYearButton: StyledComponent<'button', any, React.HTMLProps<HTMLButtonElement>, never> = styled.button`
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

const Row: StyledComponent<'div', any, React.HTMLProps<HTMLDivElement>, never> = styled.div`
    display: flex;
    height: auto;
    justify-content: space-between;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const WeekDayName: StyledComponent<'label', any, React.HTMLProps<HTMLLabelElement>, never> = styled.label`
    box-sizing: border-box;
    color: ${headerFontColor};
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    font-weight: bold;
    height: 20px;
    margin: 0px;
    padidng: 2px;
    width: 20px;
`;

/*
background: repeating-linear-gradient(
    45deg,
    #999,
    #999 10px,
    #555 10px,
    #555 20px
);
*/
//135px
const Body: StyledComponent<'div', any, React.HTMLProps<HTMLDivElement>, never> = styled.div`
    background-color: #FFF;
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    padding: 5px;
    width: 100%;
`;

const Previous: StyledComponent<'button', any, React.HTMLProps<HTMLButtonElement>, never> = styled.button`
    background-color: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjkycHgiIGhlaWdodD0iMjkycHgiIHZpZXdCb3g9IjAgMCAyOTIuMzU5IDI5Mi4zNTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5Mi4zNTkgMjkyLjM1OTsgZmlsbDogd2hpdGU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxODAsIDE0NiwgMTQ2KSI+PHBhdGggZD0iTTIyMi45NzksMTMzLjMzMUw5NS4wNzMsNS40MjRDOTEuNDU2LDEuODA3LDg3LjE3OCwwLDgyLjIyNiwwYy00Ljk1MiwwLTkuMjMzLDEuODA3LTEyLjg1LDUuNDI0Yy0zLjYxNywzLjYxNy01LjQyNCw3Ljg5OC01LjQyNCwxMi44NDd2MjU1LjgxM2MwLDQuOTQ4LDEuODA3LDkuMjMyLDUuNDI0LDEyLjg0N2MzLjYyMSwzLjYxNyw3LjkwMiw1LjQyOCwxMi44NSw1LjQyOGM0Ljk0OSwwLDkuMjMtMS44MTEsMTIuODQ3LTUuNDI4bDEyNy45MDYtMTI3LjkwN2MzLjYxNC0zLjYxMyw1LjQyOC03Ljg5Nyw1LjQyOC0xMi44NDdDMjI4LjQwNywxNDEuMjI5LDIyNi41OTQsMTM2Ljk0OCwyMjIuOTc5LDEzMy4zMzF6Ii8+PC9nPjwvc3ZnPg==");
    background-position: 1px center;
    background-repeat: no-repeat;
    background-size: 15px 15px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    height: 22px;
    left: 5px;
    position: absolute;
    top: 5px;
    width: 22px;
    
    &:hover {
        background-color: ${headerButtonsHover};
    }
    
	&:focus {
		outline: none;
	}
`;

const Next: StyledComponent<'button', any, React.HTMLProps<HTMLButtonElement>, never> = styled.button`
    background-color: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjkycHgiIGhlaWdodD0iMjkycHgiIHZpZXdCb3g9IjAgMCAyOTIuMzU5IDI5Mi4zNTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5Mi4zNTkgMjkyLjM1OTsgZmlsbDogd2hpdGU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNMjIyLjk3OSwxMzMuMzMxTDk1LjA3Myw1LjQyNEM5MS40NTYsMS44MDcsODcuMTc4LDAsODIuMjI2LDBjLTQuOTUyLDAtOS4yMzMsMS44MDctMTIuODUsNS40MjRjLTMuNjE3LDMuNjE3LTUuNDI0LDcuODk4LTUuNDI0LDEyLjg0N3YyNTUuODEzYzAsNC45NDgsMS44MDcsOS4yMzIsNS40MjQsMTIuODQ3YzMuNjIxLDMuNjE3LDcuOTAyLDUuNDI4LDEyLjg1LDUuNDI4YzQuOTQ5LDAsOS4yMy0xLjgxMSwxMi44NDctNS40MjhsMTI3LjkwNi0xMjcuOTA3YzMuNjE0LTMuNjEzLDUuNDI4LTcuODk3LDUuNDI4LTEyLjg0N0MyMjguNDA3LDE0MS4yMjksMjI2LjU5NCwxMzYuOTQ4LDIyMi45NzksMTMzLjMzMXoiLz48L2c+PC9zdmc+");
    background-position: right 1px center;
    background-repeat: no-repeat;
    background-size: 15px 15px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    height: 22px;
    position: absolute;
    right: 5px;
    top: 5px;
    width: 22px;
    
    &:hover {
        background-color: ${headerButtonsHover};
    }
    
	&:focus {
		outline: none;
	}
`;

//NOTA: Implementar diferentes temas.

interface IMonthProps {
    innerDate: Date;
    language?: string;
    minDate?: Date;
    selectedDate: Date;
    theme?: string;
    //onChange: ((date: Date) => void) & ((event: React.FormEvent<HTMLDivElement>) => void);
    onChange: (date: Date) => void;
    onInnerChange: Function;
    monthOnClick: Function;
};
interface IMonthState {
    days: Array<Date>;
    month: string;
};
export default class Month extends React.Component<IMonthProps, IMonthState> {
    //*** CONSTRUCTOR ***
    constructor(props: IMonthProps & React.HTMLProps<HTMLDivElement>) {
        super(props);
        //NOTA: Los meses comienzan en 0, enero = 0.
        const month = getMonthName(this.props.innerDate, this.props.language);
        //Listado con los días del mes.
        const days = getAllDaysInMonth(this.props.innerDate);
        //Se inicializa el estado interno.
        this.state = {
            month,
            days
        };
    }
    //*** FUNCIONES ***
    updateMonth = (date: Date): void => {
        const month: string = getMonthName(date, this.props.language);
        const days: Array<Date> = getAllDaysInMonth(date);
        this.setState({ month, days }, () => {
            this.props.onInnerChange(date);
        });
    }
    //*** HANDLERS ***
    handleNextMonthOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        let nextMonth: Date = new Date(this.props.innerDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        this.updateMonth(nextMonth);
    }
    handlePreviousMonthOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        let previousMonth: Date = new Date(this.props.innerDate);
        previousMonth.setMonth(previousMonth.getMonth() - 1);
        this.updateMonth(previousMonth);
    }
    handleDayOnClick = (event: React.MouseEvent<HTMLButtonElement>, day: Date) => {
        this.props.onChange(day);
    }
    //*** RESULTADO ***
    render() {

        let { innerDate, language, minDate, selectedDate, theme, onChange, onInnerChange, monthOnClick, ...rest } = this.props;

        return(
            <ThemeProvider theme={{ theme: this.props.theme }}>
                <Layout {... rest}>
                    <Header>
                        <MonthYearButton type='button' id='btn-month-year' onClick={() => monthOnClick()}>{`${this.state.month} ${innerDate.getFullYear()}`}</MonthYearButton>
                        <Previous type='button' id='btn-previous-month' onClick={this.handlePreviousMonthOnClick}/>
                        <Next type='button' id='btn-next-month' onClick={this.handleNextMonthOnClick}/>
                        <Row>
                            <WeekDayName>Do</WeekDayName>
                            <WeekDayName>Lu</WeekDayName>
                            <WeekDayName>Ma</WeekDayName>
                            <WeekDayName>Mi</WeekDayName>
                            <WeekDayName>Ju</WeekDayName>
                            <WeekDayName>Vi</WeekDayName>
                            <WeekDayName>Sa</WeekDayName>
                        </Row>
                    </Header>
                    <Body>
                        {
                            this.state.days.map((day, index) => {
                                const selected: boolean = day.getDate() === selectedDate.getDate() && day.getMonth() === selectedDate.getMonth() && day.getFullYear() === selectedDate.getFullYear();
                                const different: boolean = day.getMonth() !== innerDate.getMonth();
                                const disabled: boolean | undefined = (minDate && day < minDate);
                                const state: 'selected' | 'different' | 'disabled' | 'normal' = selected ? 'selected' : (different ? 'different' : (disabled ? 'disabled' : 'normal'));
                                const dayProps: any = {
                                    key: `day-${day.getDate()}-${index}`,
                                    state,
                                    disabled,
                                    onClick: (event: React.MouseEvent<HTMLButtonElement>) => this.handleDayOnClick(event, day)
                                };
                                return(<Day type='button' {...dayProps}>{day.getDate()}</Day>);
                            })
                        }
                    </Body>
                </Layout>
            </ThemeProvider>
        );
    }
}

const getDayButtonTheme = (state: 'selected' | 'different' | 'disabled' | 'normal'): string => {
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
        case 'different':
            return `
                background-color: transparent;
                color: #BFBFBF;

                &:hover {
                    background-color: #BFBFBF;
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

interface IDayProps {
    state: 'selected' | 'different' | 'disabled' | 'normal';
};
const Day: StyledComponent<'button', any, IDayProps & React.HTMLProps<HTMLButtonElement>, never> = styled.button`
    border: none;
    border-radius: 50%;
    box-sizing: border-box;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: bold;
    height: 25px;
    margin: 0px;
    padding: 0px;
    width: 25px;
    
    ${(props: IDayProps) => getDayButtonTheme(props.state)}

    &:focus {
		outline: none;
	}
`;