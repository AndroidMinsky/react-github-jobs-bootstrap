import React from "react";
import JobView from "./JobView";
import ModalView from "./ModalView";
import Jobs from "./Jobs";
import Navigation from "./Navigation";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navigation />
      <ModalSwitch />
      <Footer />
    </Router>
  );
}

function ModalSwitch() {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" children={<Jobs />} />
        <Route path="/job/:id" children={<JobView />} />
      </Switch>

      {background && <Route path="/job/:id" children={<ModalView />} />}
    </div>
  );
}
