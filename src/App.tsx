import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.less";
import "./basic.less";

import useAppStore from "./store/useAppStore";
import DataFetcher from "./components/DataFetcher";
import Test from "./pages/Test";

const App = () => {
  return (
    <useAppStore.Provider>
      <DataFetcher>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Test} />
          </Switch>
        </BrowserRouter>
      </DataFetcher>
    </useAppStore.Provider>
  );
};

export default App;
