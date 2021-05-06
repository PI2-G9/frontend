import React from 'react';
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";

const HistoryHome = () => { 
  return (
    <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-between',alignContent: 'center', margin:10}}>
      <div style={{display: 'flex', width:'15%', flexDirection:'column' ,justifyContent: 'center'}}>
        <FaSignOutAlt style={{color: '#276678', fontSize: 40, margin: 4}} />
      </div>
      <div style={{display: 'flex',  width:'50%', flexDirection: 'column', justifyContent: 'center'}}>
        <p style={{color: '#276678', fontSize: 20, margin: 4}}>Vinicius Cardoso Rocha</p>
        <p style={{color: '#276678', fontSize: 16, margin: 4}}>(40) 45068-1965</p>
      </div>
      <div style={{display: 'flex', width:'25%', flexDirection:'column' ,justifyContent: 'center'}}>
        <p style={{color: '#276678', fontSize: 30, margin: 4}}>25 °C</p>
      </div>
      <div style={{display: 'flex', width:'20%', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
        <p style={{color: '#276678', fontSize: 20, margin: 4, alignSelf:'center'}}>17:15</p>
        <p style={{color: '#276678', fontSize: 20, margin: 4, alignSelf:'center'}}>05/05/2021</p>
      </div >
    </div>
  )
}

export default HistoryHome;
