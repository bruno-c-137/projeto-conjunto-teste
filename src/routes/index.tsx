import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
 import LayoutBase from "layout/base";
  
  
  export default function Routes() {
    return (
      <Router>
        <LayoutBase>
          <Switch>
            
          </Switch>
        </LayoutBase>
      </Router>
    );
  }