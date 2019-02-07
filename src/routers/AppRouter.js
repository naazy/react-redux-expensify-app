import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import Help from "../components/Help";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header /> {/* makes it appear on every page */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={AddExpensePage} />
        <Route exact path="/edit/:id" component={EditExpensePage} />
        <Route exact path="/help" component={Help} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
