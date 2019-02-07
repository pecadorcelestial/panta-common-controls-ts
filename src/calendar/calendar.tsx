//Componentes generales.
import React, { Component, HTMLProps } from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

import Month from './month';
import Months from './months';
import Years from './years';

//EEEEE  SSSS TTTTT IIIII L      OOO   SSS
//E     S       T     I   L     O   O S
//EEE    SSS    T     I   L     O   O  SSS
//E         S   T     I   L     O   O     S
//EEEEE SSSS    T   IIIII LLLLL  OOO  SSSS

const Layout: AnyStyledComponent<HTMLProps<HTMLDivElement>, any> = styled.div`
    box-sizing: border-box;
    margin: 0px;
    min-height: 195px;
    overflow: hidden;
    padding: 0px;
    width: 185px;
`;

interface ICalendarProps {
    //Opcionales.
    language?: string;
    minDate?: string;
    mode: 'month' | 'months' | 'years';
    selectedDate?: string;
    theme?: string;
    //Funciones.
    onChange: (date: Date) => void;
};
interface ICalendarState {
    innerDate: Date;
    minDate: Date;
    mode: 'month' | 'months' | 'years';
    selectedDate: Date;
};
export class Calendar extends Component<ICalendarProps, ICalendarState> {
    //*** CONSTRUCTOR ***
    constructor(props: ICalendarProps & HTMLProps<HTMLDivElement>) {
        super(props);
        //Se inicializan las variables necesarias.
        //Fecha seleccionada.
        let selectedDate: any;
        if(this.props.selectedDate) selectedDate = new Date(this.props.selectedDate);
        if(!(selectedDate instanceof Date) || isNaN(selectedDate.getDate())) selectedDate = new Date();
        //Fecha mínima.
        let minDate: any
        if(this.props.minDate) minDate = new Date(this.props.minDate);
        if(!(minDate instanceof Date) || isNaN(minDate.getDate())) minDate = undefined;
        //Se configura el estado inicial.
        this.state = {
            mode: this.props.mode,
            selectedDate,               //Fecha seleccionada, se inicializa con la fecha proporcionada en las propiedades.
            innerDate: selectedDate,    //Fecha interna, se utiliza para todas las modificaciones en meses y años, es decir, es de uso intero hasta seleccionar una fecha final.
            minDate
        };
    }
    //*** HANDLERS ***

    //DDDD  IIIII  AAA
    //D   D   I   A   A
    //D   D   I   AAAAA
    //D   D   I   A   A
    //DDDD  IIIII A   A

    handleMonthOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        this.setState({ mode: 'months' });
    }
    //NOTA:Esta función se manda llamar cuando se recorre un mes hacía delante o atrás.
    handleDayOnInnerChange = (date: Date): void => {
        this.setState({ innerDate: date });
    }
    //NOTA: Es la única función que va a modificar la fecha seleccionada.
    handleDayOnChange = (date: Date): void => {
        this.setState({ selectedDate: date, innerDate: date }, () => {
            this.props.onChange(date);
        });
    }

    //M   M EEEEE  SSSS
    //MM MM E     S
    //M M M EEE    SSS
    //M   M E         S
    //M   M EEEEE SSSS

    handleMonthOnChange = (date: Date): void => { 
        this.setState({ innerDate: date, mode: 'month' });
    }
    handleYearOnClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        this.setState({ mode: 'years' });
    }

    // AAA    ~~~  OOO
    //A   A ~~    O   O
    //AAAAA n nn  O   O
    //A   A nn  n O   O
    //A   A n   n  OOO

    handleYearOnChange = (date: Date): void => {
        this.setState({ innerDate: date, mode: 'months' });
    }

    //*** RESULTADO ***
    render() {

		//PPPP  RRRR   OOO  PPPP  IIIII EEEEE DDDD   AAA  DDDD  EEEEE  SSSS
		//P   P R   R O   O P   P   I   E     D   D A   A D   D E     S
		//PPPP  RRRR  O   O PPPP    I   EEE   D   D AAAAA D   D EEE    SSS
		//P     R   R O   O P       I   E     D   D A   A D   D E         S
		//P     R   R  OOO  P     IIIII EEEEE DDDD  A   A DDDD  EEEEE SSSS

		let { language, minDate, mode, selectedDate, theme, onChange, ...rest } = this.props;
		
        // CCCC  OOO  N   N TTTTT EEEEE N   N IIIII DDDD   OOO
        //C     O   O NN  N   T   E     NN  N   I   D   D O   O
        //C     O   O N N N   T   EEE   N N N   I   D   D O   O
        //C     O   O N  NN   T   E     N  NN   I   D   D O   O
        // CCCC  OOO  N   N   T   EEEEE N   N IIIII DDDD   OOO

        let content: any;
        switch(this.state.mode) {
            case 'month':
                content = <Month innerDate={this.state.innerDate} minDate={this.state.minDate} selectedDate={this.state.selectedDate} theme={theme} onChange={this.handleDayOnChange} onInnerChange={this.handleDayOnInnerChange} monthOnClick={this.handleMonthOnClick}/>;
                break;
            case 'months':
                content = <Months innerDate={this.state.innerDate} minDate={this.state.minDate} selectedDate={this.state.selectedDate} theme={theme} onChange={this.handleMonthOnChange} yearOnClick={this.handleYearOnClick}/>;
                break;
            case 'years':
                content = <Years innerDate={this.state.innerDate} minDate={this.state.minDate} selectedDate={this.state.selectedDate} theme={theme} onChange={this.handleYearOnChange}/>;
                break;
        }

        //RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
        //R   R E     S     U   U L       T   A   A D   D O   O
        //RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
        //R   R E         S U   U L       T   A   A D   D O   O
        //R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO

        return(
            <Layout>
                {content}
            </Layout>
        );
    }
}