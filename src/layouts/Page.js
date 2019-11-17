import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/HomePage.js";
import CruisesPage from "../pages/CruisesPage.js";
import ShipsPage from "../pages/ShipsPage.js";
import SalePage from "../pages/SalePage.js";
import ContactPage from "../pages/ContactPage.js";
import ErrorPage from "../pages/ErrorPage.js";

function Page() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/cruises" component={CruisesPage} />
      <Route path="/ships" component={ShipsPage} />
      <Route path="/sale" component={SalePage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={ErrorPage} />>
    </Switch>
  );
}

export default Page;
