import React from 'react'
import { Helmet } from "react-helmet";
import Main from './components/Main'

import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Aadit's portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="Aadit Tambe" content="Aadit Tambe is a journalist and developer who tells data-driven stories visually — with code." />

      </Helmet>

      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
