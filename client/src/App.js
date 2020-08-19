import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Page Components
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
