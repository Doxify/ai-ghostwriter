import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Page Components
import Home from './components/home/Home';
import Reader from './components/reader/Reader';
import About from './components/about/About';

function App() {
  return (
    <Switch>
      <Route path="/reader/:id" component={Reader} />
      <Route path="/about" component={About} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
