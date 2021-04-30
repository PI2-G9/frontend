import React from 'react';

const Dashboard = () => {
  return (
    <div style={{
      display: 'flex', flex: 1,
      borderRadius: '10px 0px 0px 10px', background: `linear-gradient(120deg, #276678, #1687A7)`, padding: 40
    }}>
      <div style={{ display: 'flex', flex: 1, flexWrap: 'wrap'}}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <div style={{ width: '85%', height: '40%', backgroundColor: 'white', borderRadius: 15, margin: 20, padding: 20}}>
            <p style={{ display: 'flex', fontSize: 25, margin: 5, color: '#276678' }}>Porta</p>
          </div>
          <div style={{ width: '85%', height: '50%', backgroundColor: 'white', borderRadius: 15, margin: 20, padding: 20 }}>
            <p style={{ display: 'flex', fontSize: 25, margin: 5, color: '#276678' }}>Usuários</p>
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1,  alignItems: 'center'}}>
          <div style={{ width: '90%', height: '90%', backgroundColor: 'white', borderRadius: 15, margin: 20, padding: 20 }}>
            <p style={{ display: 'flex', fontSize: 25, margin: 5, color: '#276678' }}>Histórico</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;