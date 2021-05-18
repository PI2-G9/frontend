import React from 'react';
import Style from './style';
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";


const History = () => {
  return (
    <div style={Style.container}>
      <div style={Style.card}>
        <div style={{
          display: 'flex', backgroundColor: '#F6F5F5', borderRadius: '10px 10px 0px 0px', flexDirection: 'row',
          justifyContent: 'space-between', alignItems: 'center'
        }}>
          <p style={{ fontSize: 28, color: '#276678', marginLeft: 25 }}>Histórico</p>
          <button style={Style.primaryButton}>
            {"< Filtrar"}
          </button>
        </div>
        <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '0px 0px 15px 15px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
            <div style={{ ...Style.historyHeader, width: "10%" }}>
              <p style={Style.textHeader}>Status</p>
            </div>
            <div style={{ ...Style.historyHeader, width: "30%" }}>
              <p style={Style.textHeader}>Nome</p>
            </div>
            <div style={Style.historyHeader}>
              <p style={Style.textHeader}>Telefone</p>
            </div>
            <div style={Style.historyHeader}>
              <p style={Style.textHeader}>Temperatura</p>
            </div>
            <div style={Style.historyHeader}>
              <p style={Style.textHeader}>Data</p>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex' }}>
            <div style={{...Style.historyHeader, width: '10%'}}>
              <FaSignOutAlt style={Style.icon} />
            </div>
            <div style={{ ...Style.historyHeader, width: '30%' }}>
              <p style={Style.textHeader}>Ayrton Senna</p>
            </div>
            <div style={Style.historyHeader}>
              <p style={Style.textHeader}>35 °C</p>
            </div><div style={Style.historyHeader}>
              <p style={Style.textHeader}>(11) 9999-9999</p>
            </div>
            <div style={{ ...Style.historyHeader, flexDirection: 'column' }}>
              <p style={Style.textHeader}>10:01</p>
              <p style={Style.textHeader}>10/04/2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History;