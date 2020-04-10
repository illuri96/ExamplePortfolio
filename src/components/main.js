import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Interviews from './interviews';
import Projects from './projects';
import PlayerMovies from './movies';
import Music from './music';
import Photos from './gallery';



const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/gallery" component={Photos} />
    <Route path="/interviews" component={Interviews} />
    <Route path="/projects" component={Projects} />
    <Route path="/movies" component={PlayerMovies} />
    <Route path="/music" component={Music} />
  </Switch>
)

export default Main;
