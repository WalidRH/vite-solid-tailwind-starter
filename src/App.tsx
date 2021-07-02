import { Component, lazy } from 'solid-js';
import { Router, Route } from 'solid-app-router';

import Nav from './components/Nav';

const routes = [
  {
    path: '/',
    component: lazy(() => import('./views/Home'))
  },
  {
    path: '/about',
    component: lazy(() => import('./views/About'))
  },
  {
    path: "*all",
    component: lazy(() => import('./views/NotFound'))
  }
];

const App: Component = () => {
  return (
    <Router routes={routes}>
      <Nav />
      <Route />
    </Router>
  );
};

export default App;