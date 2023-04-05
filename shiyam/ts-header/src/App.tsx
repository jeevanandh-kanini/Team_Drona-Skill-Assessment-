import React, {FC} from 'react';
//import './App.css';
import TopBar from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import D from './components/SideBar/tabs';
function App(){
  return (
    <div className='App'>
      <TopBar></TopBar>
      <SideBar></SideBar>
      {/* <D></D> */}
    </div>
  )
}

export default App;




