import React from "react";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";
import { Menu } from "./components/organizms/menu";
import { DocumentationPage } from "./components/pages/documentation-page";
import {WithParamsListPage} from "./components/pages/with-params-list-page";

axios.defaults.baseURL = "https://swapi.co/api";

export const App = () => (
  <Menu>
    <Switch>
      <Redirect exact from="/" to="/documentation" />
      <Route path="/documentation">
        <DocumentationPage />
      </Route>
      <Route path="/pagination-with-params">
        <WithParamsListPage />
      </Route>
      {/* <Route path="/pagination-without-params">
        <ListWithoutParamsPaginationContainer />
      </Route> */}
    </Switch>
  </Menu>
);
