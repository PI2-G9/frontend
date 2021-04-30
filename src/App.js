import React from 'react';
import Routes from './Routes';
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div style={{display:'flex', flex:1, flexDirection:'row'}}>
      <Sidebar /> 
      <Routes />
    </div>
  );
}

export default App;
