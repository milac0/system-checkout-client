import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Navbar from "./components/Navbar";
import axios from "axios";
import DataContextProvider from "./context/DataContext";

axios.defaults.baseURL = "http://localhost:3000";

const App = () => {
  return (
    <DataContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/basket" component={Basket} />
        </Switch>
      </Router>
    </DataContextProvider>
  );
};

export default App;
