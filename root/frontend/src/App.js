import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Mainpage from "./mainpage/mainpage";
import Journal from "./journal/journal";
import Errorpage from "./errorpage/errorpage";

function App() {
  return (
    <Switch>
      <Route path="/" component={Mainpage} exact />
      <Route path="/journal" component={Journal} />
      <Route component={Errorpage} />
    </Switch>
  );
}

export default App;
