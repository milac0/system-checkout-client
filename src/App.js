import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/basket" component={Basket} />
      </Switch>
    </Router>
  );
};

export default App;
