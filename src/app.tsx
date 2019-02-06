//Módulos generales.
import React, { Component } from 'react';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router-dom';

//Rutas.
import Routes from './routes';

interface IAppClassProps extends RouteComponentProps<any> {};
interface IAppClassState {};
class App extends Component<IAppClassProps, IAppClassState> {
    //*** RESULTADO ***
    render() {

		//RRRR  EEEEE  SSSS U   U L     TTTTT  AAA  DDDD   OOO
		//R   R E     S     U   U L       T   A   A D   D O   O
		//RRRR  EEE    SSS  U   U L       T   AAAAA D   D O   O
		//R   R E         S U   U L       T   A   A D   D O   O
		//R   R EEEEE SSSS   UUU  LLLLL   T   A   A DDDD   OOO
		
        return(
            <Switch>
                {
                    Routes.map((route: any, index: number) => {
                        return <Route key={`route-${index}`} {...route} render={() => <route.componentToRender {...this.props}/>}/>
                    })
                }
            </Switch>
        );
    }
}

export default withRouter(App);