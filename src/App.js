import React, { createContext, useEffect, useState } from 'react'
import './App.css';
import AppLoading from './component/AppLoading';
import RouterPage from './routerPage';


function App() {

  return (
    
      <React.Suspense fallback={<AppLoading />}>
        <RouterPage />
      </React.Suspense>  
  );
}

export default App;
