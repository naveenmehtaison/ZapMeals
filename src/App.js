import React from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import StoreContext from './Components/Store/StoreContext';

function App() {
  return (
    <div>
{/* 
    <Provider value={Store}> */}
      <StoreContext>
        <Header/>
        <Outlet/>
      </StoreContext> 


    {/* </Provider> */}



    </div>
  );
}

export default App;
