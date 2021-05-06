import React, { useState } from 'react';
import Switch from "react-switch";
import UserCard from '../../Components/UserCard'
import HistoryHome from '../../Components/HistoryHome'

const Dashboard = () => {


  const [open, setOpen] = useState(false);


  return (
    <div style={{
      display: 'flex', flex: 1,
      borderRadius: '10px 0px 0px 10px', background: `linear-gradient(120deg, #276678, #1687A7)`, padding: 40
    }}>
      <div style={{ display: 'flex', flex: 1, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '85%', height: '30%', backgroundColor: 'white', borderRadius: 15, margin: 20, padding: 20 }}>
            <p style={{ display: 'flex', fontSize: 25, margin: 5, color: '#276678' }}>Porta</p>
            <div style={{ display: 'flex', flex: 1, height:'80%', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 15 }}>
                  <p style={{ display: 'flex', fontSize: 25, margin: 5, color: '#276678' }}>Fechada</p>
                </div>
                <div>
                  <Switch
                    onChange={() => setOpen(!open)}
                    checked={open}
                    onColor="#9CFF6D"
                    offColor="#FF7979"
                    handleDiameter={60}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={80}
                    width={160}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 15 }}>
                  <p style={{ display: 'flex', fontSize: 25, margin: 5, color: '#276678' }}>Aberta</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '85%', height: '70%', backgroundColor: 'white', borderRadius: 15, margin: 20, padding: 20 }}>
            <p style={{ display: 'flex', fontSize: 25, margin: 5, color: '#276678' }}>Usuários</p>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
          <div style={{ width: '90%', height: '90%', backgroundColor: 'white', borderRadius: 15, margin: 20, padding: 20 }}>
            <p style={{ display: 'flex', fontSize: 25, margin: 5, marginBottom: 25, color: '#276678' }}>Histórico</p>
            <div>
            <HistoryHome />
            <HistoryHome />
            <HistoryHome />
            <HistoryHome />
            <HistoryHome />
            <HistoryHome />
            <HistoryHome />
            <HistoryHome />
            <HistoryHome />
            <HistoryHome />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;