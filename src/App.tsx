import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyles from './globalStyles';

// Pages
import HomePage from './pages/HomePage/HomePage';

// Components
import Navbar from './components/NavbarComponent/Navbar.component';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
