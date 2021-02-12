import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyles from './globalStyles';

// Pages
import HomePage from './pages/HomePage/HomePage';
import StatisticsPage from './pages/StatisticsPage/StatisticsPage';

// Components
import Navbar from './components/NavbarComponent/Navbar.component';
import Footer from './components/FooterComponent/Footer.component';
import ScrollToTop from './components/ScrollToTopComponent/ScrollToTop';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route exact path='/statistics' component={StatisticsPage} />
          <Route exact path='/' component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
