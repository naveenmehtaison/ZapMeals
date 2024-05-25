import React from 'react';
import Header from './Components/Header';
import Restaurant_Card from './Components/Restaurant_card';
import DataContext from './Components/Store/auth-context';
import { Outlet } from 'react-router-dom';
import Body from './Components/Body';
import { obj } from './Components/Utilities/mockdata';
import StoreContext from './Components/Store/StoreContext';

function App() {
  return (
    <div>

    
    <StoreContext>
    
      <Header/>
      <Outlet/>
    </StoreContext> 



    </div>
  );
}

export default App;
