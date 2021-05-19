import React from 'react';
import { FaRegEdit } from "react-icons/fa";

const UserCard = ({name, phone, pic}) => {
  return (
    <div style={{display:'flex', flexDirection: 'row'}}>
      <img
        style={{
          width:80,
          height:80,
          borderRadius: 40,
          overflow: "hidden",
          margin: 10
        }}
        alt="user"
        src={pic}
      />
      {console.log(pic)}
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <p style={{color: '#276678', fontSize: 20, margin: 4}}>{name}</p>
        <p style={{color: '#276678', fontSize: 16, margin: 2}}>{phone}</p>
      </div>
      <div style={{display: 'flex', flex: 1, flexDirection: 'row', alignItems:'center', justifyContent: 'flex-end', margin:20}}>
        <FaRegEdit style={{color: '#276678', fontSize: 25, margin: 4, justifyContent: 'center'}}/>
      </div>
    </div>
  )
}

export default UserCard;
