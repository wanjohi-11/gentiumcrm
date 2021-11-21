import { appendFile } from "gulp-append-prepend";
import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
    return (

<div className="app">
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </Router>
</div>

)}


