import React from "react";
import { Switch, Route } from "react-router-dom";
import Exercise1 from "./Exercise1";
// import Exercise2 from "./Exercise2";

class Routes extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Exercise1} />
          {/* <Route path="/exercise2" render={() => <Exercise2 />} /> */}
        </Switch>
      </div>
    );
  }
}

export default Routes;
