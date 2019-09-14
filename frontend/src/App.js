import React from 'react';
import GlobalStyle from './styles/Global'
import Header from './components/Header';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle/>
        <Header/>
        <Routes/>
      </BrowserRouter>
    </>
  );
}

export default App;
