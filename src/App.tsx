import './App.less';
import './basic.less';

import React from 'react';
import ScrollMemory from 'react-router-scroll-memory';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BeslutningFraNav from './pages/BeslutningerFraNav/BeslutningFraNav';
import DataFetcher from './components/DataFetcher';
import DittSykefravaer from './pages/DittSykefravaer/DittSykefravaer';
import DokumentOversikt from './pages/DokumentOversikt/DokumentOversikt';
import FravaersOversikt from './pages/FravaersOversikt/FravaersOversikt';
import Inntektsmelding from './pages/Inntektsmelding';
import Soknad from './pages/Soknad';
import Sykmelding from './pages/Sykmelding';
import TidslinjeSide from './pages/TidslinjeSide/TidslinjeSide';
import useAppStore from './store/useAppStore';

const App = () => {
    return (
        <useAppStore.Provider>
            <DataFetcher>
                <BrowserRouter>
                    <ScrollMemory />
                    <Switch>
                        <Route exact path="/" component={DittSykefravaer} />
                        <Route exact path="/fravaer/" component={FravaersOversikt} />
                        <Route exact path="/fravaer/:fravaerId/" component={DokumentOversikt} />
                        <Route exact path="/fravaer/:fravaerId/:sykmeldingId/" component={Sykmelding} />
                        <Route
                            exact
                            path="/fravaer/:fravaerId/:sykmeldingId/inntektsmelding/"
                            component={Inntektsmelding}
                        />
                        <Route exact path="/fravaer/:fravaerId/:sykmeldingId/soknad/" component={Soknad} />
                        <Route
                            exact
                            path="/fravaer/:fravaerId/:sykmeldingId/beslutning/"
                            component={BeslutningFraNav}
                        />

                        <Route exact path="/tidslinjen/" component={TidslinjeSide} />
                    </Switch>
                </BrowserRouter>
            </DataFetcher>
        </useAppStore.Provider>
    );
};

export default App;
