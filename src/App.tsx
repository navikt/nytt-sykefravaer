import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.less';
import './basic.less';

import useAppStore from './store/useAppStore';
import DataFetcher from './components/DataFetcher';
import DittSykefravaer from './pages/DittSykefravaer/DittSykefravaer';
import FravaersOversikt from './pages/FravaersOversikt/FravaersOversikt';
import Sykmelding from './pages/Sykmelding';
import Soknad from './pages/Soknad';
import BeslutningFraNav from './pages/BeslutningerFraNav/BeslutningFraNav';
import DokumentOversikt from './pages/DokumentOversikt/DokumentOversikt';
import Inntektsmelding from './pages/Inntektsmelding';
import TidslinjeSide from './pages/TidslinjeSide/TidslinjeSide';

const App = () => {
    return (
        <useAppStore.Provider>
            <DataFetcher>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={DittSykefravaer} />
                        <Route exact path="/fravaer/" component={FravaersOversikt} />
                        <Route exact path="/fravaer/:id/" component={DokumentOversikt} />
                        <Route exact path="/fravaer/:id/inntektsmelding/" component={Inntektsmelding} />
                        <Route exact path="/fravaer/:id/vis/" component={Sykmelding} />
                        <Route exact path="/fravaer/:id/soknad/" component={Soknad} />
                        <Route exact path="/fravaer/:id/beslutning/" component={BeslutningFraNav} />

                        <Route exact path="/tidslinjen/" component={TidslinjeSide} />
                    </Switch>
                </BrowserRouter>
            </DataFetcher>
        </useAppStore.Provider>
    );
};

export default App;
