import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pools from "./pages/Pools";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Pools} />
        <Route exact path="/pools" component={Pools} />
        <Route exact path="/pools/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
