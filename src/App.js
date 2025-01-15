import React from 'react';
import Header from './Components/Header';
import Restaurant_Card from './Components/Restaurant_card';
import DataContext from './Components/Store/auth-context';
import { Outlet } from 'react-router-dom';
import Body from './Components/Body';
import { obj } from './Components/Utilities/mockdata';
import StoreContext from './Components/Store/StoreContext';
import HeroBanner from './Components/HeroBanner';
import { Provider } from 'react-redux';
import Store from './Components/Utilities/ReduxStore';

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
