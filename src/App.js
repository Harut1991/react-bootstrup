import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container pt-4">
        <Switch>
          <Route path={'/about'} component={About}/>
          <Route path={'/'} exect component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
