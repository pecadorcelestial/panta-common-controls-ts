//Componentes generales.
import React, { HTMLProps } from 'react';
import styled, { AnyStyledComponent } from 'styled-components';

//Funciones.
import { capitalizeString } from '../scripts/string-functions';

//Componentes locales.
import { IconButton } from '../buttons/buttons';

const TabIconButton: AnyStyledComponent<HTMLProps<HTMLButtonElement>, any> = styled(IconButton)`
    border-radius: unset;
    float: left;
`;

//TTTTT EEEEE M   M  AAA
//  T   E     MM MM A   A
//  T   EEE   M M M AAAAA
//  T   E     M   M A   A
//  T   EEEEE M   M A   A

type Theme = 'red' | 'blue' | 'green' | 'yellow' | 'gray' | 'orange' | 'black' | 'IENTC';
const border = (theme: Theme): string => {
	switch(theme) {
		case 'red': return '1px solid #FF456A';
		case 'blue': return '1px solid #1476FB';
		case 'green': return '1px solid #4CB050';
		case 'yellow': return '1px solid #FFE200';
		case 'gray': return '1px solid #858585';
		case 'orange': return '1px solid #FF9700';
		case 'black': return '1px solid #242424';
		case 'IENTC': return '1px solid #FF0000';
	}
};

//EEEEE  SSSS TTTTT IIIII L      OOO   SSS
//E     S       T     I   L     O   O S
//EEE    SSS    T     I   L     O   O  SSS
//E         S   T     I   L     O   O     S
//EEEEE SSSS    T   IIIII LLLLL  OOO  SSSS

const Layout: AnyStyledComponent<HTMLProps<HTMLDivElement>, any> = styled.div`
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    padding: 0px;
    width: 100%;
`;

const TabsHeader: AnyStyledComponent<ITabsProps & HTMLProps<HTMLDivElement>, any> = styled.div`
    border: ${(props: ITabsProps) => border(props.theme)};
    border-radius: 5px 5px 0px 0px;
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
    text-align: left;
    width: 100%;
`;

const TabsContent: AnyStyledComponent<ITabsProps & HTMLProps<HTMLDivElement>, any> = styled.div`
    border: ${(props: ITabsProps) => border(props.theme)};
    border-radius: 0px 0px 5px 5px;
    border-top: unset;
    box-sizing: border-box;
    height: auto;
    margin: 0px;
    overflow: hidden;
    padding: 10px;
    width: 100%;
`;

// CCCC  OOO  M   M PPPP   OOO  N   N EEEEE N   N TTTTT EEEEE
//C     O   O MM MM P   P O   O NN  N E     NN  N   T   E
//C     O   O M M M PPPP  O   O N N N EEE   N N N   T   EEE
//C     O   O M   M P     O   O N  NN E     N  NN   T   E
// CCCC  OOO  M   M P      OOO  N   N EEEEE N   N   T   EEEEE

interface ITab {
    id: string;
    title: string;
    icon: string;
    content: any;
};
interface ITabsProps {
    tabs: Array<ITab>
    theme: Theme;
    onTabChange?: Function;
};
interface ITabsState {
    activeTab: string;
};
export class Tabs extends React.Component<ITabsProps & HTMLProps<HTMLDivElement>, ITabsState> {
    //*** CONSTRUCTOR ***
    constructor(props: ITabsProps) {
        super(props);
        //Pestaña activa.
        let activeTab = '';
        if(this.props.tabs.length > 0) {
            activeTab = this.props.tabs[0].id;
        }
        //Estado.
        this.state = {
            activeTab
        };
    }
    //*** MÉTODOS ***
    getSelectedTab = (): number => {
        if(this.props.tabs.length > 0 && this.state.activeTab != '') {
            let selectedTab: number = -1;
            this.props.tabs.forEach((tab, index) => {
                if(tab.id === this.state.activeTab) {
                    selectedTab = index;
                    //break;
                }
            });
            return selectedTab;
        } else {
            return -1;
        }
    }
    setSelectedTab = (tabID: string | number): void => {
        if(typeof tabID === "string") {
            let activeTab: Array<ITab> = this.props.tabs.filter(tab => tab.id === tabID);
            if(activeTab.length > 0) {
                this.setState({ activeTab: activeTab[0].id });
            }
        } else if(typeof tabID === "number") {
            if(this.props.tabs.length > 0 && parseInt(tabID.toString()) < this.props.tabs.length) {
                this.setState({ activeTab: this.props.tabs[tabID].id });
            }
        }
    }
    //*** RESULTADO ***
    render() {

		//PPPP  RRRR   OOO  PPPP  IIIII EEEEE DDDD   AAA  DDDD  EEEEE  SSSS
		//P   P R   R O   O P   P   I   E     D   D A   A D   D E     S
		//PPPP  RRRR  O   O PPPP    I   EEE   D   D AAAAA D   D EEE    SSS
		//P     R   R O   O P       I   E     D   D A   A D   D E         S
		//P     R   R  OOO  P     IIIII EEEEE DDDD  A   A DDDD  EEEEE SSSS
        
        let { tabs, theme, onTabChange, ...rest } = this.props;

		//EEEEE L     EEEEE M   M EEEEE N   N TTTTT  OOO   SSSS
		//E     L     E     MM MM E     NN  N   T   O   O S
		//EEE   L     EEE   M M M EEE   N N N   T   O   O  SSS
		//E     L     E     M   M E     N  NN   T   O   O     S
		//EEEEE LLLLL EEEEE M   M EEEEE N   N   T    OOO  SSSS
		
        let selectedTab: Array<ITab> = this.props.tabs.filter(tab => tab.id === this.state.activeTab);
        let selectedTabContent: any = selectedTab.length > 0 ? selectedTab[0].content : null;

		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO

        return(
            <Layout {...rest}>
                <TabsHeader theme={theme}>
                    {
                        tabs.map((tab, index) => {
                            if(this.state.activeTab === tab.id) {
                                return(<TabIconButton key={`tab-${tab.id}-${index}`} icon={tab.icon} theme={theme} size='medium' /*onClick={(event) => { event.preventDefault(); this.setState({ activeTab: tab.id}); }}*/>{tab.title}</TabIconButton>);
                            } else {
                                let newTheme = `flat${capitalizeString(theme)}`;
                                return(<TabIconButton key={`tab-${tab.id}-${index}`} icon={tab.icon} theme={newTheme} size='medium' onClick={(event: React.MouseEvent<HTMLElement>) => { event.preventDefault(); this.setState({ activeTab: tab.id}, () => { if(onTabChange) onTabChange(index); }); }}>{tab.title}</TabIconButton>);
                            }
                        })
                    }
                </TabsHeader>
                <TabsContent theme={theme}>
                    {selectedTabContent}
                </TabsContent>
            </Layout>
        );
    }
}