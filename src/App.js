import React from 'react';
import Header from './Components/Header';
import Restaurant_Card from './Components/Restaurant_card';
//HEader with navigation bar
//search item
//cart element
//Footer
//*
import { Outlet } from 'react-router-dom';
import Body from './Components/Body';
import { obj } from './Components/Utilities/mockdata';

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>


    </div>
  );
}

export default App;
