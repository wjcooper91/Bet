import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pools from "./pages/Pools";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from  "./pages/login/Login";
import Results from "./pages/Results/Results"

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/userHome" component={Pools} />
        <Route exact path="/pools/:id" component={Detail} />
        <Route path="/results" component={Results} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
