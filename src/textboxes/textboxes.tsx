//Componentes generales.
import * as React from 'react';
import styled, { ThemeProvider, StyledComponent } from 'styled-components';
import theme from 'styled-theming';

//Componentes locales.
import { Icon } from '../icons/icons';
import { Calendar } from '../calendar/calendar';
import { ToolTip } from '../tooltip/tooltip';

//Funciones.
import { getFormattedDate } from '../scripts/date-functions';

//TTTTT EEEEE M   M  AAA   SSSS
//  T   E     MM MM A   A S
//  T   EEE   M M M AAAAA  SSS
//  T   E     M   M A   A     S
//  T   EEEEE M   M A   A SSSS

const titleColor: theme.ThemeSet = theme('status', {
	normal: '#A7A7A7',
	complete: '#A7A7A7',
	valid: '#09BA8A',
	error: '#EF2525',
	disabled: '#BFBFBF'
});

const titleBorderColor: theme.ThemeSet = theme('status', {
	normal: '#BFBFBF',
	complete: '#242424',
	valid: '#09BA8A',
	error: '#EF2525',
	disabled: '#BFBFBF'
});

const textboxColor: theme.ThemeSet = theme('status', {
	normal: '#242424',
	complete: '#242424',
	valid: '#242424',
	error: '#242424',
	disabled: '#BFBFBF'
});

//EEEEE  SSSS TTTTT IIIII L      OOO   SSSS
//E     S       T     I   L     O   O S
//EEE    SSS    T     I   L     O   O  SSS
//E         S   T     I   L     O   O     S
//EEEEE SSSS    T   IIIII LLLLL  OOO  SSSS

const Layout: StyledComponent<'div', any, React.HTMLProps<HTMLDivElement>, never> = styled.div`
	display: inline-block;
	height: 60px;
	margin: 0px;
	min-width: 250px;
	padding: 0px;
	position: relative;
	width: auto;

	@media screen and (max-width: 767px) {
		/*min-width: unset;*/
	}
	
	@media screen and (min-width: 768px) and (max-width: 991px) {
		/*min-width: unset;*/
	}
`;

interface ITitleProps extends React.HTMLAttributes<HTMLLabelElement> {
	notEmpty: boolean;
};
const Title: StyledComponent<'label', any, ITitleProps, never> = styled.label`
	border-bottom: 1px solid ${titleBorderColor};
	box-sizing: border-box;
	color: ${titleColor};
	height: 45px;
	font-family: "Open Sans", sans-serif;
	font-size: ${(props: ITitleProps) => !props.notEmpty ? `16px` : `11px`};
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	left: 0px;
	letter-spacing: normal;
	margin: 0px;
	padding: ${(props: ITitleProps) => !props.notEmpty ? `15px 0px 0px 0px` : `0px`};
	position: absolute;
	text-align: left;
	top: 0px;
	width: 100%;
	white-space: nowrap;
	z-index: 1;
	
	transition: color 0.3s ease-in-out, font 0.1s linear, padding 0.1s linear;
	
	&:after {
		background: #1476FB;
		bottom: -1px;
		content: '';
		height: 1px;
		left: 50%;
		position: absolute;
		transition: all 0.3s linear;
		width: 0px;
	}	
`;

const Textbox: StyledComponent<'input', any, React.HTMLProps<HTMLInputElement>, never> = styled.input`
	background-color: transparent;
	border: 0px solid transparent;
	border-radius: 0px;
	color: ${textboxColor};
	display: inline-block;
	font-size: 16px;
	height: 30px;
	left: 0px;
	outline: none;
	padding: 0px;
	position: absolute;
	top: 15px;
	width: 100%;
	z-index: 2;
	
	&:focus ~ ${Title} {
		color: #1476FB;
		font-size: 11px;
		padding: 0px;
		
		&:after {
			left: 0px;
			width: 100%;
		}
	}
`;

const Error: StyledComponent<'label', any, React.HTMLProps<HTMLLabelElement>, never> = styled.label`
	bottom: 0px;
	color: #EF2525;
	height: 15px;
	font-family: "Open Sans", sans-serif;
	font-size: 11px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	left: 0px;
	letter-spacing: normal;
	margin: 0px;
	padding: 0px;
	position: absolute;
	text-align: left;
	width: 100%;
	white-space: nowrap;
	z-index: 1;
`;

interface IIconProps extends React.HTMLAttributes<SVGSVGElement> {
	disabled: boolean;
}
const ShowPasswordIcon: StyledComponent<'svg', any, IIconProps, never> = styled(Icon)`
	cursor: pointer;
	fill: ${(props: IIconProps) => props.disabled ? `#BFBFBF` : `#242424`};
	pointer-events: ${(props: IIconProps) => props.disabled ? `none` : `all`};
	position: absolute;
	right: 10px;
	top: 20px;
	z-index: 3;
`;

const CalendarIcon: StyledComponent<'svg', any, IIconProps, never> = styled(Icon)`
	cursor: pointer;
	fill: ${(props: IIconProps) => props.disabled ? `#BFBFBF` : `#242424`};
	pointer-events: ${(props: IIconProps) => props.disabled ? `none` : `all`};
	position: absolute;
	right: 10px;
	top: 20px;
	z-index: 3;
`;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
interface ITextBoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'|'onFocus'|'onKeyPress'> {
	//Obligatorios.
	title: string;
	error: string;
	maxLength: number;
	//Opcionales.
	backgroundImage?: string;
	disabled?: boolean;
	id?: string;
	inputType?: 'text' | 'password' | 'email' | 'number' | 'date';
	valueType: 'number' | 'decimal' | 'text';
	//Validación.
	isRequired?: boolean;
	validRegEx?: string | any;
	//Tipo: Fecha.
	language?: string;
	minDate?: string;
	dateFormat?: string;
	//Funciones.
	onChange?: Function;
	onFocus?: Function;
	onKeyPress?: Function;
};
interface ITextBoxState {
	correct: boolean;
	complete: boolean;
	errors: {
		isEmpty: boolean;
		invalidRegEx: boolean;
		error: boolean;
		errorMessage: string;
	};
	text: string;
	inputType?: 'text' | 'password' | 'email' | 'number' | 'date';
	showPassword: boolean;
};
export class TextBox extends React.Component<ITextBoxProps, ITextBoxState> {
	//*** PROPIEDADES ***
	private TextBoxInnerRef: React.RefObject<HTMLInputElement>;
	private ErrorRef: React.RefObject<HTMLLabelElement>;
	private ToolTipInnerRef: React.RefObject<HTMLDivElement & ToolTip>;
	//*** CONSTRUCTOR ***
	constructor(props: ITextBoxProps) {
		super(props);
		//Se crean las referencias.
		this.TextBoxInnerRef = React.createRef();
		this.ErrorRef = React.createRef();
		this.ToolTipInnerRef = React.createRef();
		//Se define el estado inicial.
		this.state = {
			correct: false,
			complete: false,
			errors: {
				isEmpty: false,
				invalidRegEx: false,
				error: false,
				errorMessage: ''
			},
			text: '',
			inputType: this.props.inputType !== 'date' ? this.props.inputType : 'text',
			showPassword: false
		};
	}
	//*** FUNCIONES DEL COMPONENTE ***
	componentWillReceiveProps(nextProps: ITextBoxProps) {
		//Aquí sólo se revisa la propiedad "inputType", ya que es la única que se cambia en el estado.
		if(nextProps.inputType != this.props.inputType) {
			let inputType = nextProps.inputType !== 'date' ? nextProps.inputType : 'text';
			this.setState({ inputType });
		}
	}
	//*** FUNCIONES ***
	textIsValid = (originalText: string, regex: string | any): boolean => {
		let newRegEx: RegExp = RegExp(regex);
		if(String(originalText).match(newRegEx)) {
			return true;
		} else {
			return false;
		}
	}
	//*** MÉTODOS ***
	focus = (): void => {
		let node: HTMLInputElement | null = this.TextBoxInnerRef.current;
		if(node) node.focus();
		if(this.props.onFocus) this.props.onFocus();
	}
	validate = (): boolean => {
		//Error.
		let errors = {
			isEmpty: false,
			invalidRegEx: false,
			error: false,
			errorMessage: ''
		};
		
		//RRRR  EEEEE  GGGG EEEEE X   X
		//R   R E     G     E      X X
		//RRRR  EEE   G  GG EEE     X
		//R   R E     G   G E      X X
		//R   R EEEEE  GGGG EEEER X   X

		//NOTA: Si se eligió como tipo de dato "email" o "fecha" se puede agregar una expresión regular ya definida.
		let emailRegEx: string = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-]+)\\.([a-zA-Z]{2,4})+$';
		//NOTA: La expresión para la fecha es algo "triki", ya que el usuario es quien define el formato que desea para la fecha:
		//      Ejemplos:
		//      dd/mm/yyyy
		//      mm-dd-yyyy
		//      ddth of mmm yyyy
		//Pero siempre es dd/DD = día (2 dígitos); mm/MM = mes (2 dígitos); mmm/MMM = mes (nombre); yyyy/YYYY = año (4 dígitos).
		let dateRegEx: string = 'DD/MM/YYYY';
		if(this.props.inputType === 'date' && this.props.dateFormat != '') {
			dateRegEx = this.props.dateFormat || '';
			//Diagonales, guiones y demás.
			dateRegEx = dateRegEx.replace('/', '\/');
			dateRegEx = dateRegEx.replace('.', '\\.');
			//Día (2 dígitos).
			dateRegEx = dateRegEx.replace(/(dd|DD)/g, '(\\d){2}');
			//Mes (nombre).
			dateRegEx = dateRegEx.replace(/(mmm|MMM)/g, '([a-zA-Z])+');
			//Mes (2 dígitos).
			dateRegEx = dateRegEx.replace(/(mm|MM)/g, '(\\d){2}');
			//Año (4 dígitos).
			dateRegEx = dateRegEx.replace(/(yyyy|YYYY)/g, '(\\d){4}');
		}
		//Se selecciona la expresión regular a utilizar.
		let regEx: string = '';
		switch(this.props.inputType) {
			case 'date':
				regEx = dateRegEx;
				break;
			case 'email':
				regEx = emailRegEx;
				break;
			default:
				regEx = this.props.validRegEx;
				break;
		}
		//console.log('[COMÚN][TEXTBOX][validate] RegEx (Propiedades): ', this.props.validRegEx); 
		//console.log('[COMÚN][TEXTBOX][validate] RegEx (Local): ', regEx); 
		//Se valida por Expresión Regular.
		if((this.props.inputType === 'date' || this.props.inputType === 'email' || this.props.validRegEx != '') && this.state.text != '') {
			//¿Es válido?
			if(this.textIsValid(this.state.text, regEx)) {
				errors = {
					isEmpty: false,
					invalidRegEx: false,
					error: false,
					errorMessage: ''
				};
				this.setState({ correct: true, errors, complete: false });
				return true;
			} else {
				errors = {
					isEmpty: false,
					invalidRegEx: true,
					error: false,
					errorMessage: ''
				};
				this.setState({ correct: false, errors, complete: false });
				return false;
			}
		}
		//Validar campo si así se requirió.
		if(this.props.isRequired && this.state.text != '') {
			errors = {
				isEmpty: false,
				invalidRegEx: false,
				error: false,
				errorMessage: ''
			};
			this.setState({ correct: true, errors, complete: false });
			return true;
		} else if(this.props.isRequired && this.state.text == '') {
			errors = {
				isEmpty: true,
				invalidRegEx: false,
				error: false,
				errorMessage: ''
			};
			this.setState({ correct: false, errors, complete: false });
			return false;
		}
		//En este punto sólo se revisa si hay información.
		if(this.state.text != '') {
			errors = {
				isEmpty: false,
				invalidRegEx: false,
				error: false,
				errorMessage: ''
			};
			this.setState({ correct: false, errors, complete: true });
			return true;
		} else {
			errors = {
				isEmpty: false,
				invalidRegEx: false,
				error: false,
				errorMessage: ''
			};
			this.setState({ correct: false, errors, complete: false });
			return true;
		}
	}
	reset = (): void => {
		this.setState({
			correct: false,
			complete: false,
			errors: {
				isEmpty: false,
				invalidRegEx: false,
				error: false,
				errorMessage: ''
			},
			text: '',
			inputType: this.props.inputType !== 'date' ? this.props.inputType : 'text',
			showPassword: false
		});
		let node: HTMLInputElement | null = this.TextBoxInnerRef.current;
		if(node) node.value = '';
	}
	setError = (errorMessage: string): void => {
		let errors = {
			isEmpty: false,
			invalidRegEx: false,
			error: true,
			errorMessage
		};
		this.setState({ correct: false, errors, complete: false });
	}
	getValue = (): string => {
		return this.state.text;
	}
	setValue = (value: string): void => {
		let node: HTMLInputElement | null = this.TextBoxInnerRef.current;
		if(node) node.value = value;
		this.setState({ text: value });
	}
	//*** RESULTADO ***
	render() {
		
		//PPPP  RRRR   OOO  PPPP  IIIII EEEEE DDDD   AAA  DDDD  EEEEE  SSSS
		//P   P R   R O   O P   P   I   E     D   D A   A D   D E     S
		//PPPP  RRRR  O   O PPPP    I   EEE   D   D AAAAA D   D EEE    SSS
		//P     R   R O   O P       I   E     D   D A   A D   D E         S
		//P     R   R  OOO  P     IIIII EEEEE DDDD  A   A DDDD  EEEEE SSSS
		
		//Obligatorios.
		let { title, error, maxLength, backgroundImage, disabled, id, inputType, valueType, isRequired, validRegEx, language, minDate, dateFormat, onChange, onFocus, onKeyPress, ...rest } = this.props;

		const textboxProps = {
			disabled,
			id,
			maxLength,
			type: this.state.inputType,
			//value: this.state.text,
			onChange: (event: React.FormEvent<HTMLInputElement>) => {
				this.setState({ text: (event.target as HTMLInputElement).value });
				if(onChange) onChange(event);
			},
			onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => {
				if(valueType != 'text') {
					//45 = guión (-)
					//46 = punto (.)
					let validInput = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
					switch(valueType) {
						case 'decimal':
							validInput.push(45);
							validInput.push(46);
							break;
					}
					//Se evita que se tecleé un valor no numérico.
					if (validInput.indexOf(event.which) < 0) {
						event.preventDefault();
					}
				}
				//Se manda la información al padre, por si se desea capturar el ENTER.
				if(onKeyPress) onKeyPress(event);
			},
			onFocus: () => {
				let errors = {
					isEmpty: false,
					invalidRegEx: false,
					error: false,
					errorMessage: ''
				};
				this.setState({ correct: false, errors, complete: false });
				if (onFocus) onFocus();
			},
			onBlur: () => {this.validate();}
		};
		
		const showPasswordIconProps = {
			disabled: disabled || false,
			height: '20px',
			icon: this.state.inputType === 'password' ? 'eye' : 'eyeSlash',
			id: 'svg-show-password-icon',
			width: '20px',
			onMouseDown: () => {
				this.setState({ inputType: 'text' });
			},
			onMouseUp: () => {
				this.setState({ inputType: 'password' });
			},
			onMouseLeave: () => {
				this.setState({ inputType: 'password' });
			},
			onTouchStart: () => {
				this.setState({ inputType: 'text' });
			},
			onTouchEnd: () => {
				this.setState({ inputType: 'password' });
			}
		};

		const calendarIconProps = {
			disabled: disabled || false,
			height: '20px',
			icon: 'calendar',
			id: `${id}-svg-calendar-icon`,
			width: '20px',
			onClick: () => {
				let node: HTMLDivElement & ToolTip | null = this.ToolTipInnerRef.current;
				if(node) node.show();
			}
		};

		const calendarProps = {
			selectedDate: this.state.text,
			language,
			minDate,
			theme: 'default',
			onChange: (date: Date) => {
				let value = getFormattedDate(date, dateFormat || 'DD/MM/YYYY', language);
				//console.log('[COMÚN][TEXTBOX][render][CALENDARIO][OnChange] Fecha: ', value); 
				this.setState({ text: value }, () => {
					let textboxNode: HTMLInputElement | null = this.TextBoxInnerRef.current;
					if(textboxNode) textboxNode.value = value; 
					this.validate();
					let event = {
						target: {
							value
						}
					};
					//event.target = this.TextBoxInnerRef;
					//event.target.value = value;
					//this.TextBoxInnerRef.dispatchEvent(event);
					//console.log('[COMÚN][TEXTBOX][render][CALENDARIO][OnChange] Evento: ', event); 
					if(onChange) onChange(event);
				});
				let tooltipNode: HTMLDivElement & ToolTip | null = this.ToolTipInnerRef.current;
				if(tooltipNode) tooltipNode.hide(); 
			}
		};

		//EEEEE RRRR  RRRR   OOO  RRRR
		//E     R   R R   R O   O R   R
		//EEE   RRRR  RRRR  O   O RRRR
		//E     R   R R   R O   O R   R
		//EEEEE R   R R   R  OOO  R   R

		let errorMessage: string;
		if(this.state.errors.isEmpty) {
			errorMessage = 'El campo es requerido.';
		} else if(this.state.errors.invalidRegEx) {
			errorMessage = error;
		} else if(this.state.errors.error) {
			errorMessage = this.state.errors.errorMessage;
		} else {
			errorMessage = '';
		}

		let _error: any;
		if(!disabled && (this.state.errors.isEmpty || this.state.errors.invalidRegEx || this.state.errors.error)) {
			_error = <Error ref={this.ErrorRef}>{errorMessage}</Error>;
		} else {
			_error = null;
		}

		//EEEEE  SSSS TTTTT IIIII L      OOO
		//E     S       T     I   L     O   O
		//EEE    SSS    T     I   L     O   O
		//E         S   T     I   L     O   O
		//EEEEE SSSS    T   IIIII LLLLL  OOO

		let status: 'disabled' | 'error' | 'complete' | 'valid' | 'normal';
		if(disabled) {
			status = 'disabled';
		} else if(this.state.errors.isEmpty || this.state.errors.invalidRegEx || this.state.errors.error) {
			status = 'error';
		} else if(this.state.complete) {
			status = 'complete';
		} else if(this.state.correct) {
			status = 'valid';
		} else {
			status = 'normal';
		}

		let tooltipTheme = {
			content: {
				//backgroundColor: '#1476FB',
				backgroundColor: 'transparent',
				borderColor: '#1476FB'
			},
			arrow: {
				backgroundColor: '#1476FB',
				borderColor: '#1476FB'
			}
		};

		//BBBB   OOO  TTTTT  OOO  N   N EEEEE  SSSS
		//B   B O   O   T   O   O NN  N E     S
		//BBBB  O   O   T   O   O N N N EEE    SSS
		//B   B O   O   T   O   O N  NN E         S
		//BBBB   OOO    T    OOO  N   N EEEEE SSSS

		//Mostrar password.
		let showPasswordButton: any;
		if(inputType === 'password') {
			showPasswordButton = <ShowPasswordIcon {...showPasswordIconProps}/>
		} else {
			showPasswordButton = null;
		}
		//Calendario.
		let calendarButton: any;
		if(inputType === 'date') {
			calendarButton = <CalendarIcon {...calendarIconProps}/>;
		} else {
			calendarButton = null;
		}
		
		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO
		
		return (
			<ThemeProvider theme={{ status }}>
				<Layout {...rest}>
					<Textbox {...textboxProps} ref={this.TextBoxInnerRef}/>
					<Title notEmpty={this.state.text != ''}>{title}</Title>
					{showPasswordButton}
					{calendarButton}
					{_error}
					{
						inputType === 'date' ?
						<ToolTip elevation={14} anchorID={`${id}-svg-calendar-icon`} theme={tooltipTheme} at='bottom-left' ref={this.ToolTipInnerRef}>
							<Calendar mode={'month'} {...calendarProps}/>
						</ToolTip> :
						null
					}
				</Layout>
			</ThemeProvider>
		);
	}
}