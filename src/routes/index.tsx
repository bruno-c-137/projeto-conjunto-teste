import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Desktop1 from "pages/desktop1";
import LayoutBase from "layout/base";


export default function Routes() {
  return (
    <Router>
      <LayoutBase>
        <Switch>
          <Route exact path='/' component={Desktop1} />
        </Switch>
      </LayoutBase>
    </Router>
  );
}