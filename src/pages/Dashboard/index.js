import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
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
            <div style={{ display: 'flex', flex: 1, height: '80%', justifyContent: 'center', alignItems: 'center' }}>
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
            <div style={{display:'flex', flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
              <p style={{ display: 'flex', fontSize: 25, margin: 5, color: '#276678' }}>Usuários</p>
              <FaPlus style={{color: '#276678', fontSize: 25, margin: 4}}/>
            </div>
            <UserCard name={'Catarina Ferraz Mata'} phone={'(38) 23684-6383'} />
            <UserCard name={'Henry Nolasco Reis'} phone={'(65) 81367-9817'} />
            <UserCard name={'Fátima Silveira Guerreiro'} phone={'(79) 24487-1699'} />
            <UserCard name={'Marcel Martins Natal'} phone={'(76) 47421-0605'} />
            <UserCard name={'Ester Lalanda Portela'} phone={'(38) 84042-2949'} />
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
          <div style={{ width: '90%', height: '90%', backgroundColor: 'white', borderRadius: 15, margin: 20, padding: 20 }}>
            <p style={{ display: 'flex', fontSize: 25, margin: 5, marginBottom: 25, color: '#276678' }}>Histórico</p>
            <div>
              <HistoryHome name={'Catarina Ferraz Mata'} phone={'(38) 23684-6383'} temperature={'35 °C'} hour={'11:30'} date={'10/04/2021'} exit />
              <HistoryHome name={'Ester Lalanda Portela'} phone={'(38) 84042-2949'} temperature={'35 °C'} hour={'11:00'} date={'10/04/2021'} />
              <HistoryHome name={'Marcel Martins Natal'} phone={'(76) 47421-0605'} temperature={'36 °C'} hour={'10:10'} date={'10/04/2021'} />
              <HistoryHome name={'Fátima Silveira Guerreiro'} phone={'(79) 24487-1699'} temperature={'35 °C'} hour={'10:01'} date={'10/04/2021'} exit />
              <HistoryHome name={'Henry Nolasco Reis'} phone={'(65) 81367-9817'} temperature={'35 °C'} hour={'10:00'} date={'10/04/2021'} />
              <HistoryHome name={'Catarina Ferraz Mata'} phone={'(38) 23684-6383'} temperature={'35 °C'} hour={'09:40'} date={'10/04/2021'} />
              <HistoryHome name={'Fátima Silveira Guerreiro'} phone={'(79) 24487-1699'} temperature={'35 °C'} hour={'09:20'} date={'10/04/2021'} />
              <HistoryHome name={'Marcel Martins Natal'} phone={'(76) 47421-0605'} temperature={'36 °C'} hour={'09:12'} date={'10/04/2021'} exit />
              <HistoryHome name={'Ester Lalanda Portela'} phone={'(38) 84042-2949'} temperature={'35 °C'} hour={'09:10'} date={'10/04/2021'} exit />
              <HistoryHome name={'Catarina Ferraz Mata'} phone={'(38) 23684-6383'} temperature={'35 °C'} hour={'09:10'} date={'10/04/2021'} exit />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;