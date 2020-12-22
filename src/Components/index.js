import React from "react";
// import styles from "./index.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import TinderCards from "./TinderCards";
import Footer from "./Footer";

export default function TinderApp() {
  return (
    <div className="tinderApp">
      <Router>
        <Header />
        <Switch>
          <Route path="/chat">Lets chat here!</Route>
          <Route path="/" exact>
            <TinderCards />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
