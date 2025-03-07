import React from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import StoreContext from './Components/Store/StoreContext';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
{/* 
    <Provider value={Store}> */}
      <StoreContext>
        <Header/>
        <Outlet/>
        <Footer/>
      </StoreContext> 


    {/* </Provider> */}



    </div>
  );
}

export default App;
