import React from 'react';
import DisplayControl from './DisplayControl';
import { AppProvider } from './../AppContext';


function App() {
  return (
    <>
      <AppProvider>
        <DisplayControl/>
      </AppProvider>
    </>
  );
}

export default App;
