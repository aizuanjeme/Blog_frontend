import React, { createContext, useEffect, useState, Suspense } from 'react'
import './App.css';
import AppLoading from './component/AppLoading';
import RouterPage from './routerPage';


function App() {

  return (
    
      <Suspense fallback={<AppLoading />}>
        <RouterPage />
      </Suspense>  
  );
}

export default App;
