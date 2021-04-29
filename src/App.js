
import './App.css';
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NavigationBar from 'C:/Users/dell/Documents/projects/react/newreact/reactpro/src/components/NavigationBar.js';
import {Home} from './Home';
import {About} from './About';
import { CoursesPage } from './CoursesPage';
import { ManageCoursePage } from 'C:/Users/dell/Documents/projects/react/newreact/reactpro/src/ManageCoursePage.js';
import { NoMatch } from './NoMatch';
import { ToastContainer }  from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/course/:slug"  component={ManageCoursePage} />
            <Route path="/course"  component={ManageCoursePage} />
            <Route path="/courses" component={CoursesPage} />
            <Redirect from ="/about-page" to="about" />
            <Route component={NoMatch} />
          </Switch>
          <NavigationBar />
        </Router>
    </React.Fragment>
  </div>
  );
}

export default App;
