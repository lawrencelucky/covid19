import React from 'react';
import GlobalStyles from './globalStyles';

// Components
import Navbar from './components/NavbarComponent/Navbar.component';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
    </>
  );
};

export default App;
