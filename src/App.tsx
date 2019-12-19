import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.less';
import './basic.less';

import useAppStore from './store/useAppStore';
import DataFetcher from './components/DataFetcher';
import DittSykefravaer from './pages/DittSykefravaer/DittSykefravaer';
import DineSykmeldinger from './pages/DineSykmeldinger/DineSykmeldinger';
import Sykmelding from './pages/Sykmelding';
import Soknad from './pages/Soknad';
import BeslutningFraNav from './pages/BeslutningerFraNav/BeslutningFraNav';
import SykmeldingOversikt from './pages/SykmeldingOversikt/SykmeldingOversikt';
import Inntektsmelding from './pages/Inntektsmelding';
import TidslinjeSide from './pages/TidslinjeSide/TidslinjeSide';

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
