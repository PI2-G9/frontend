import React from 'react';

const UserCard = () => {
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
        src="https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1"
      />
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <p style={{color: '#276678', fontSize: 20, margin: 4}}>Vinicius Cardoso Rocha</p>
        <p style={{color: '#276678', fontSize: 16, margin: 2}}>(40) 45068-1965</p>
      </div>
    </div>
  )
}

export default UserCard;
