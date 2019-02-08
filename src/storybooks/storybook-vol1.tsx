//Módulos generales.
import React, { Component, HTMLProps, createRef, RefObject } from 'react';
import styled from 'styled-components';

//Componentes locales.
import { Loading, Animate } from '../animations/animations';
import { Badge, IconBadge, NotificationBadge } from '../badges/badges';
import { Button, IconButton, RoundButton } from '../buttons/buttons';
import { Calendar } from '../calendar/calendar';
import { Card } from '../cards/cards';
import { CheckBox } from '../checkboxes/checkboxes';
import { BasicSelect, AdvancedSelect } from '../dropdownlists/dropdownlists';
import { CircularGraph } from '../graphs/graphs';
import { Icon } from '../icons/icons';
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from '../modals/modals';
import { RadioButton, RadioButtonsGroup } from '../radiobuttons/radiobuttons';
import { Tabs } from '../tabs/tabs';
import { ToastNotification } from '../toastnotifications/toastnotifications';

const Layout = styled.div`
    display: inline-block;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const Row = styled.div`
    box-sizing: border-box;
    display: inline-block;
    height: auto;
    margin: 0px;
    padding: 10px;
    width: 100%;
`;

const LeftColumn = styled.div`
    border-right: 3px solid #BFBFBF;
    box-sizing: border-box;
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 10px;
    width: 300px;

	@media screen and (max-width: 767px) {
		width: 100%;
	}
	
	@media screen and (min-width: 768px) and (max-width: 991px) {
		width: 100%;
	}
`;

const RightColumn = styled.div`
	box-sizing: border-box;
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 10px;
    width: calc(100% - 300px);

	@media screen and (max-width: 767px) {
		width: 100%;
	}
	
	@media screen and (min-width: 768px) and (max-width: 991px) {
		width: 100%;
	}
`;

const Control = styled.div`
    display: inline-block;
    float: left;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const AnimationWrapper = styled.div`
    height: 100px;
    margin: 10px 0px 0px 0px;
    padding: 0px;
    position: relative;
    width: 100px;
`;

const Option = styled.div`
    display: inline-block;
    height: auto;
    margin: 5px 0px;
    padding: 0px;
    width: 100%;
`;

const Title = styled.label`
	color: #000;
    display: inline-block;
	height: 35px;
	font-family: "Open Sans", sans-serif;
	font-size: 20px;
	font-weight: bold;
	font-style: normal;
	font-stretch: normal;
	letter-spacing: normal;
	margin: 0px;
	padding: 0px;
    text-align: left;
	width: 100%;
`;

const ColoredDiv = styled.div`
    background-color: ${props => props.color};
    height: 100px;
    width: 100px;
`;

//type Size = 'small' | 'medium' | 'big';

interface ISBVol1ClassState {
    fadeFrom: 'left' | 'right' | 'top' | 'bottom';
    flipFrom: 'vertical' | 'horizontal';
    checked: boolean;
};
class StorybookVol1 extends Component<any, ISBVol1ClassState> {
    //*** PROPIEDADES ***
    private AnimateFadeRef: Animate;
    private AnimateFlipRef: Animate;
    private AnimateZoomRef: Animate;

    private SuccessToastNotificationRef: RefObject<HTMLDivElement & ToastNotification>;
    private ErrorToastNotificationRef: RefObject<HTMLDivElement & ToastNotification>;
    private WarningToastNotificationRef: RefObject<HTMLDivElement & ToastNotification>;
    private InformationToastNotificationRef: RefObject<HTMLDivElement & ToastNotification>;

    private ModalRef: RefObject<HTMLDivElement & Modal>;
    //*** CONSTRUCTOR ***
    constructor(props: HTMLProps<HTMLDivElement>) {
        super(props);

        this.SuccessToastNotificationRef = createRef();
        this.ErrorToastNotificationRef = createRef();
        this.WarningToastNotificationRef = createRef();
        this.InformationToastNotificationRef = createRef();

        this.ModalRef = createRef();

        this.state = {
            //Animaciones.
            fadeFrom: 'right',
            flipFrom: 'vertical',
            //Checkbox.
            checked: true
        };
    }
    //*** RESULTADO ***
    render() {

        //V   V  AAA  L      OOO  RRRR  EEEEE  SSSS
        //V   V A   A L     O   O R   R E     S
        //V   V AAAAA L     O   O RRRR  EEE    SSS
        // V V  A   A L     O   O R   R E         S
        //  V   A   A LLLLL  OOO  R   R EEEEE SSSS

        const inputTypes = [
            {
                id: 'text',
                description: 'Text'
            },
            {
                id: 'password',
                description: 'Password'
            },
            {
                id: 'email',
                description: 'Email'
            },
            {
                id: 'number',
                description: 'Number'
            },
            {
                id: 'date',
                description: 'Date'
            }
        ];

        const simpleSelectOptions = [
            {
                id: 1,
                description: 'React'
            },
            {
                id: 2,
                description: 'PlayStation',
                disabled: true
            }
        ];
      
        const advancedSelectOptions = [
            {
                id: 1,
                icon: 'brandReact',
                title: 'React',
                description: 'Javascript Framework.'
            },
            {
                id: 2,
                icon: 'brandPlaystation',
                title: 'PlayStation',
                description: 'One of the best consoles.',
                disabled: true
            }
        ];

        const radioButtons = [
            {
                name: 'Option #1',
                value: 1
            },
            {
                name: 'Option #2',
                value: 2
            },
            {
                name: 'Option #3',
                value: 3
            }
        ];
      
        const tabs = [
            {
                id: 'tab-1',
                title: 'Tab #1',
                icon: 'brandWhatsappSquare',
                content: <Title>Whatsapp</Title>
            },
            {
                id: 'tab-2',
                title: 'Tab #2',
                icon: 'brandFacebookSquare',
                content: <Title>Facebook</Title>
            },
            {
                id: 'tab-3',
                title: 'Tab #3',
                icon: 'brandReact',
                content: <Title>React</Title>
            }
        ];
  
		//PPPP  RRRR   OOO  PPPP  IIIII EEEEE DDDD   AAA  DDDD  EEEEE  SSSS
		//P   P R   R O   O P   P   I   E     D   D A   A D   D E     S
		//PPPP  RRRR  O   O PPPP    I   EEE   D   D AAAAA D   D EEE    SSS
		//P     R   R O   O P       I   E     D   D A   A D   D E         S
		//P     R   R  OOO  P     IIIII EEEEE DDDD  A   A DDDD  EEEEE SSSS
		
        const selectProps = {
            title: 'Data type:',
            error: 'You must select an option.',
            options: inputTypes,
            selectedOption: 'email',
            onChange: event => {
                console.log('[EXAMPLE][SELECT][onChange] Value: ', event.target.value);
            },
            id: 'ddl-example',
            placeHolder: 'Select a type',
            disabled: false,
            isRequired: false,
            idIsNumeric: false
        };
      
        const simpleSelectProps = {
            title: 'Advanced List (simple):',
            error: 'You must select an option.',
            options: simpleSelectOptions,
            selectedOption: -1,
                onChange: () => {},
            id: 'addl-example',
            itemsType: 'simple',
            placeHolder: 'Select a value',
            disabled: false,
            isRequired: false,
            idIsNumeric: true
        };
  
        const advancedSelectProps = {
            title: 'Advanced List:',
            error: 'You must select an option.',
            options: advancedSelectOptions,
            selectedOption: -1,
                onChange: () => {},
            id: 'addl-example',
            itemsType: 'image-title-description',
            placeHolder: 'Select a value',
            disabled: false,
            isRequired: false,
            idIsNumeric: true
        };
  
		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO
		
        return(
            <Layout>
                <LeftColumn>
                    <Title>Animations:</Title>
                    <Option>
                        <Loading size={{ height: 60, width: 60 }}/>
                    </Option>
                    <Control>
                        <AnimationWrapper>
                            <Animate type='fade' from={this.state.fadeFrom} executeWhen='isVisible' enterWithBounce={true} ref={(animate: Animate) => { this.AnimateFadeRef = animate; }}>
                                <ColoredDiv color='#800080'/>
                            </Animate>
                        </AnimationWrapper>
                    </Control>
                    <Control>
                        <AnimationWrapper>
                            <Animate type='flip' from={this.state.flipFrom} executeWhen='isVisible' enterWithBounce={true} ref={(animate: Animate) => { this.AnimateFlipRef = animate; }}>
                                <ColoredDiv color='#FF0033'/>
                            </Animate>
                        </AnimationWrapper>
                    </Control>
                    <Control>
                        <AnimationWrapper>
                            <Animate type='zoom' from='top' executeWhen='isVisible' enterWithBounce={true} ref={(animate: Animate) => { this.AnimateZoomRef = animate; }}>
                                <ColoredDiv color='#00FF7F'/>
                            </Animate>
                        </AnimationWrapper>
                    </Control>
                </LeftColumn>
                <RightColumn>
                    <Title>Badges:</Title>
                    <Row>
                        <Badge theme='red' size='small' style={{ marginRight: '10px' }}>Red badge</Badge>
                        <Badge theme='blue' size='small' style={{ marginRight: '10px' }}>Blue badge</Badge>
                        <Badge theme='green' size='small' style={{ marginRight: '10px' }}>Green badge</Badge>
                        <Badge theme='yellow' size='small' style={{ marginRight: '10px' }}>Yellow badge</Badge>
                        <Badge theme='gray' size='small' style={{ marginRight: '10px' }}>Gray badge</Badge>
                    </Row>
                    <Row>
                        <Badge theme='flatRed' size='small' style={{ marginRight: '10px' }}>Red badge</Badge>
                        <Badge theme='flatBlue' size='small' style={{ marginRight: '10px' }}>Blue badge</Badge>
                        <Badge theme='flatGreen' size='small' style={{ marginRight: '10px' }}>Green badge</Badge>
                        <Badge theme='flatYellow' size='small' style={{ marginRight: '10px' }}>Yellow badge</Badge>
                        <Badge theme='flatGray' size='small' style={{ marginRight: '10px' }}>Gray badge</Badge>
                    </Row>
                    <Row>
                        <Badge theme='blue' size='small' showCloseButton={true} closeOnClick={() => { console.log('[STORYBOOK][BADGE][closeOnClick] Cerrado.'); }} style={{ marginRight: '10px' }}>Small badge</Badge>
                        <Badge theme='blue' size='medium' showCloseButton={true} style={{ marginRight: '10px' }}>Medium badge</Badge>
                        <Badge theme='blue' size='big' showCloseButton={true} style={{ marginRight: '10px' }}>Big badge</Badge>
                    </Row>
                    <Row>
                        <IconBadge icon='solidGlobeAmericas' theme='green' size='small' showCloseButton={true} closeOnClick={() => { console.log('[STORYBOOK][BADGE][closeOnClick] Cerrado.'); }} style={{ marginRight: '10px' }}>Small badge</IconBadge>
                        <IconBadge icon='solidGlobeAmericas' theme='green' size='medium' showCloseButton={true} style={{ marginRight: '10px' }}>Medium badge</IconBadge>
                        <IconBadge icon='solidGlobeAmericas' theme='green' size='big' showCloseButton={true} style={{ marginRight: '10px' }}>Big badge</IconBadge>
                    </Row>
                    <Row>
                        <NotificationBadge counter='+9' style={{ marginRight: '20px' }}>
                            <Icon icon='comment' fill='#242424' height='40px' width='40px'/>
                        </NotificationBadge>
                        <NotificationBadge counter='+9' style={{ marginRight: '20px' }}>
                            <Icon icon='calendar' fill='#242424' height='40px' width='40px'/>
                        </NotificationBadge>
                        <NotificationBadge counter='2' style={{ marginRight: '20px' }}>
                            <Icon icon='user' fill='#242424' height='40px' width='40px'/>
                        </NotificationBadge>
                        <NotificationBadge counter='4' style={{ marginRight: '20px' }}>
                            <Title style={{ padding: '0px 10px' }}>Any given text</Title>
                        </NotificationBadge>
                    </Row>
                    <Title style={{ marginTop: '20px' }}>Calendar:</Title>
                    <Row>
                        <Calendar
                            selectedDate='08/15/2018'
                            language='en-EU'
                            mode='month'
                            theme='default'
                            onChange={(date: Date) => {
                                console.log('[EXAMPLE][render][CALENDAR][onChange] Date: ', date);
                            }}
                        />
                    </Row>
                    <Card elevation={32} width='auto' style={{ marginTop: '20px', padding: '10px' }}>
                        <Title>Buttons and Card:</Title>
                        <Row>
                            <Button theme='red' size='small' style={{ marginRight: '10px' }}>Red</Button>
                            <Button theme='blue' size='small' style={{ marginRight: '10px' }}>Blue</Button>
                            <Button theme='green' size='small' style={{ marginRight: '10px' }}>Green</Button>
                            <Button theme='yellow' size='small' style={{ marginRight: '10px' }}>Yellow</Button>
                            <Button theme='gray' size='small' style={{ marginRight: '10px' }}>Gray</Button>
                            <Button theme='orange' size='small' style={{ marginRight: '10px' }}>Orange</Button>
                            <Button theme='black' size='small' style={{ marginRight: '10px' }}>Black</Button>
                            <Button theme='IENTC' size='small' style={{ marginRight: '10px' }}>IENTC</Button>
                        </Row>
                        <Row>
                            <Button theme='secondaryRed' size='small' style={{ marginRight: '10px' }}>Red</Button>
                            <Button theme='secondaryBlue' size='small' style={{ marginRight: '10px' }}>Blue</Button>
                            <Button theme='secondaryGreen' size='small' style={{ marginRight: '10px' }}>Green</Button>
                            <Button theme='secondaryYellow' size='small' style={{ marginRight: '10px' }}>Yellow</Button>
                            <Button theme='secondaryGray' size='small' style={{ marginRight: '10px' }}>Gray</Button>
                            <Button theme='secondaryOrange' size='small' style={{ marginRight: '10px' }}>Orange</Button>
                            <Button theme='secondaryBlack' size='small' style={{ marginRight: '10px' }}>Black</Button>
                            <Button theme='secondaryIENTC' size='small' style={{ marginRight: '10px' }}>IENTC</Button>
                        </Row>
                        <Row>
                            <Button theme='flatRed' size='small' style={{ marginRight: '10px' }}>Red</Button>
                            <Button theme='flatBlue' size='small' style={{ marginRight: '10px' }}>Blue</Button>
                            <Button theme='flatGreen' size='small' style={{ marginRight: '10px' }}>Green</Button>
                            <Button theme='flatYellow' size='small' style={{ marginRight: '10px' }}>Yellow</Button>
                            <Button theme='flatGray' size='small' style={{ marginRight: '10px' }}>Gray</Button>
                            <Button theme='flatOrange' size='small' style={{ marginRight: '10px' }}>Orange</Button>
                            <Button theme='flatBlack' size='small' style={{ marginRight: '10px' }}>Black</Button>
                            <Button theme='flatIENTC' size='small' style={{ marginRight: '10px' }}>IENTC</Button>
                        </Row>
                    </Card>
                    <Title style={{ marginTop: '20px' }}>Checkboxes:</Title>
                    <Row>
                        <CheckBox checked={this.state.checked} onChange={(checked) => { this.setState({ checked }); }}>Disabled?</CheckBox>
                    </Row>
                    <Title style={{ marginTop: '20px' }}>Drop Down Lists:</Title>
                    <Row>
                        <BasicSelect {...selectProps} />
                    </Row>
                    <Row>
                        <AdvancedSelect {...simpleSelectProps} />
                    </Row>
                    <Row>
                        <AdvancedSelect {...advancedSelectProps} />
                    </Row>
                    <Title style={{ marginTop: '20px' }}>Graphs:</Title>
                    <Row style={{ display: 'flex', flexFlow: 'row nowrap' }}>
                        <CircularGraph percent={75} theme='green' style={{ width: '150px' }}/>
                        <CircularGraph percent={45} theme='orange'/>
                        <CircularGraph percent={10} theme='red'/>
                    </Row>
                    <Title style={{ marginTop: '20px' }}>Modal:</Title>
                    <Row>
                        <IconButton theme='red' size='small' icon='comment'
                            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                                let node: HTMLElement & Modal | null = this.ModalRef.current;
                                if(node) node.show();
                            }}>Show modal</IconButton>
                        <Modal ref={this.ModalRef}>
                            <ModalHeader>
                                <ModalTitle>Título del modal</ModalTitle>
                            </ModalHeader>
                            <ModalBody>
                                <Loading size={{ height: 60, width: 60 }} />
                            </ModalBody>
                            <ModalFooter>
                                <label>&#9400; Panda Corp. all rights reserved.</label>
                            </ModalFooter>
                        </Modal>
                    </Row>
                    <Title style={{ marginTop: '20px' }}>Radio Buttons:</Title>
                    <Row>
                        <RadioButtonsGroup
                            options={radioButtons}
                            selectedValue={2}
                            onChange={(value: string | number) => {
                                console.log('[EXAMPLE][RADIOBUTTONS][onChange] Value: ', value);
                            }}
                        />
                    </Row>
                    <Title style={{ marginTop: '20px' }}>Tabs:</Title>
                    <Row>
                        <Tabs tabs={tabs} theme='blue' />
                    </Row>
                    <Title style={{ marginTop: '20px' }}>Toast Notifications:</Title>
                    <Row>
                        <Button size='small' theme='green' style={{ margin: '5px' }} onClick={(event: React.MouseEvent<HTMLButtonElement>) => { let node: HTMLDivElement & ToastNotification | null = this.SuccessToastNotificationRef.current; if(node) node.show(); }}>Show success toast</Button>
                        <Button size='small' theme='red' style={{ margin: '5px' }} onClick={(event: React.MouseEvent<HTMLButtonElement>) => { let node: HTMLDivElement & ToastNotification | null = this.ErrorToastNotificationRef.current; if(node) node.show(); }}>Show error toast</Button>
                        <Button size='small' theme='orange' style={{ margin: '5px' }} onClick={(event: React.MouseEvent<HTMLButtonElement>) => { let node: HTMLDivElement & ToastNotification | null = this.WarningToastNotificationRef.current; if(node) node.show(); }}>Show warning toast</Button>
                        <Button size='small' theme='blue' style={{ margin: '5px' }} onClick={(event: React.MouseEvent<HTMLButtonElement>) => { let node: HTMLDivElement & ToastNotification | null = this.InformationToastNotificationRef.current; if(node) node.show(); }}>Show information toast</Button>
                        <ToastNotification notificationType='success' from='bottom' side='right' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={this.SuccessToastNotificationRef} showWithBounce={true}/>
                        <ToastNotification notificationType='error' from='bottom' side='left' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={this.ErrorToastNotificationRef}/>
                        <ToastNotification notificationType='warning' from='top' side='right' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={this.WarningToastNotificationRef} showWithBounce={true}/>
                        <ToastNotification notificationType='information' from='top' side='left' title='I am a toast notification' message='Yes! I am a toast notification.' timeout={0} ref={this.InformationToastNotificationRef}/>
                    </Row>
                </RightColumn>
            </Layout>
        );
    }
}

export default StorybookVol1;