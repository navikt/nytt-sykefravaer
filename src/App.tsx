import './App.less';
import './basic.less';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BeslutningFraNav from './pages/BeslutningerFraNav/BeslutningFraNav';
import DataFetcher from './components/DataFetcher';
import DineSykmeldinger from './pages/DineSykmeldinger';
import DittSykefravaer from './pages/DittSykefravaer/DittSykefravaer';
import Inntektsmelding from './pages/Inntektsmelding';
import Soknad from './pages/Soknad';
import Sykmelding from './pages/Sykmelding';
import SykmeldingOversikt from './pages/SykmeldingOversikt';
import TidslinjeSide from './pages/TidslinjeSide/TidslinjeSide';
import useAppStore from './store/useAppStore';

const App = () => {
    return (
        <useAppStore.Provider>
            <DataFetcher>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={DittSykefravaer} />
                        <Route exact path="/sykmeldinger/" component={DineSykmeldinger} />
                        <Route exact path="/tidslinjen/" component={TidslinjeSide} />
                        <Route exact path="/sykmeldinger/:id/" component={SykmeldingOversikt} />
                        <Route exact path="/sykmeldinger/:id/inntektsmelding/" component={Inntektsmelding} />
                        <Route exact path="/sykmeldinger/:id/vis/" component={Sykmelding} />
                        <Route exact path="/sykmeldinger/:id/soknad/" component={Soknad} />
                        <Route exact path="/sykmeldinger/:id/beslutning/" component={BeslutningFraNav} />
                    </Switch>
                </BrowserRouter>
            </DataFetcher>
        </useAppStore.Provider>
    );
};

export default App;
