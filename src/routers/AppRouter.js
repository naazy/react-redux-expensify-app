import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import GiftsPage from "../components/GiftsPage";
import RsvpPage from "../components/RsvpPage";
import Help from "../components/Help";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header /> {/* makes it appear on every page */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gifts" component={GiftsPage} />
        <Route exact path="/rsvp" component={RsvpPage} />
        <Route exact path="/help" component={Help} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
