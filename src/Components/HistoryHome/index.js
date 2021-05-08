import React from 'react';
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";

const HistoryHome = ({name, phone, temperature, hour, date, exit}) => { 
  return (
    <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-between', alignContent: 'center', margin:10}}>
      <div style={{display: 'flex', width:'15%', flexDirection:'column' ,justifyContent: 'center'}}>
        {exit && <FaSignOutAlt style={{color: '#276678', fontSize: 40, margin: 4}} />}
        {!exit && <FaSignInAlt style={{color: '#276678', fontSize: 40, margin: 4}} />}
      </div>
      <div style={{display: 'flex',  width:'50%', flexDirection: 'column', justifyContent: 'center'}}>
        <p style={{color: '#276678', fontSize: 20, margin: 4}}>{name}</p>
        <p style={{color: '#276678', fontSize: 16, margin: 4}}>{phone}</p>
      </div>
      <div style={{display: 'flex', width:'25%', flexDirection:'column' ,justifyContent: 'center'}}>
          <p style={{color: '#276678', fontSize: 30, margin: 4}}>{temperature}</p>
      </div>
      <div style={{display: 'flex', width:'20%', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
        <p style={{color: '#276678', fontSize: 20, margin: 4, alignSelf:'center'}}>{hour}</p>
        <p style={{color: '#276678', fontSize: 20, margin: 4, alignSelf:'center'}}>{date}</p>
      </div >
    </div>
  )
}

export default HistoryHome;
