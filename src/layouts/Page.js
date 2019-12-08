import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/HomePage.js";
import CruisesPage from "../pages/CruisesPage.js";
import ShipsPage from "../pages/ShipsPage.js";
import SalePage from "../pages/SalePage.js";
import ContactPage from "../pages/ContactPage.js";
import ErrorPage from "../pages/ErrorPage.js";
import CruisePage from "../pages/CruisePage.js";
import NotFoundPage from "../pages/NotFoundPage.js"

function Page() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/cruises" component={CruisesPage} />
      <Route path="/ships" component={ShipsPage} />
      <Route path="/sale" component={SalePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/cruise/:id" component={CruisePage} />
      <Route path="/404" component={NotFoundPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default Page;
