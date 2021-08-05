import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { parse } from "query-string";

import { Get } from "./pages/get";
import { GetAll } from "./pages/get-all";
import { GetLatest } from "./pages/get-latest";

import styles from "./app.module.css";

export const App: FunctionComponent = () => (
  <Router>
    <div className={styles.app}>
      <Switch>
        <Route
          exact
          path="/"
          render={({ location }) => (
            <GetAll speed={Number(parse(location.search).speed)} />
          )}
        />

        <Route exact path="/latest" render={() => <GetLatest />} />

        <Route
          path="/:index"
          render={({ match }) => <Get index={Number(match.params.index)} />}
        />
      </Switch>
    </div>
  </Router>
);
