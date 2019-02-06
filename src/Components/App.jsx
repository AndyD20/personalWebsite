import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../Styles/App.css';
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";

const App = () => {
  return (
    <Router>
      <div className="App h-100">
        <div className="d-inline-flex ml-0 pl-0 h-100 w-100">
          <div className="row ml-0 pr-0 mr-0 Menu mw-25">
            <div className="ml-0 pl-0 w-100">
              <Menu/>
            </div>
          </div>
          <div className="Force-Page-Height Overflow-Container w-100">
            <Switch>
              <Route exact={true} path="/" component={Home}/>
              <Route path="/Home" component={Home}/>
              <Route path="/About" component={About}/>
              <Route path="/Blog" component={Blog}/>
              <Route component={Home}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
