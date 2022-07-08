import React from 'react'
import ReactGA from 'react-ga';

import { Helmet } from "react-helmet";
import Main from './components/Main'

import { BrowserRouter } from 'react-router-dom'

function App() {
  const TRACKING_ID = "UA-157385072-1";
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview("/")
  // document.body.style.background = "rgb(23, 30, 43)";
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Aadit Tambe's portfolio</title>
        <link rel="canonical" href="https://aadittambe.com/" />
        <meta name="description" content="Aadit Tambe is a journalist and developer who tells data-driven stories visually — with code." />
        <meta name="author" content='Aadit Tambe' />
      </Helmet>
      <div className="App">

        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
