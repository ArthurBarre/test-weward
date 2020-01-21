import React from 'react';
import Render from './components/Render';
import Form from './components/Form';
import logo from './assets/images/logo-light.png'

const Nav = () => {
  return(
    <div class='nav'>
      <img src={logo} alt="logo"/>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <div className='app-wrapper'>
        <Form/> 
        <Render/> 
      </div>
    </div>
  );
}

export default App;
