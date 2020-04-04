import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import App from './aboutme';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={App} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;
