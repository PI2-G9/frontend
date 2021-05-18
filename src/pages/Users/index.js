import React from 'react';
import Style from './style';
import { FaSignOutAlt, FaTrash, FaUser, FaEdit } from "react-icons/fa";


const Users = () => {
  return (
    <div style={Style.container}>
      <div style={Style.card}>
        <div style={{
          display: 'flex', backgroundColor: '#F6F5F5', borderRadius: '10px 10px 0px 0px', flexDirection: 'row',
          justifyContent: 'space-between', alignItems: 'center'
        }}>
          <p style={{ fontSize: 28, color: '#276678', marginLeft: 25 }}>Usuários</p>
          <button style={Style.primaryButton}>
            {"+ Novo Usuário"}
          </button>
        </div>
        <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '0px 0px 15px 15px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
            <div style={{ ...Style.historyHeader, width: "10%" }}>
              <p style={Style.textHeader}>Foto</p>
            </div>
            <div style={{ ...Style.historyHeader, width: "30%" }}>
              <p style={Style.textHeader}>Nome</p>
            </div>
            <div style={Style.historyHeader}>
              <p style={Style.textHeader}>Telefone</p>
            </div>
            <div style={Style.historyHeader}>
              <p style={Style.textHeader}>Status</p>
            </div>
            <div style={Style.historyHeader}>
              <p style={Style.textHeader}>Ações</p>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex' }}>
            <div style={{ ...Style.historyHeader, width: '15%' }}>
              <img
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
                alt='pic'
                src="https://www.mktesportivo.com/wp-content/uploads/2021/05/690685.jpg" />
            </div>
            <div style={{ ...Style.historyHeader, width: '30%' }}>
              <p style={Style.textHeader}>Ayrton Senna</p>
            </div>
            <div style={Style.historyHeader}>
              <p style={Style.textHeader}>(11) 9999-9999</p>
            </div><div style={Style.historyHeader}>
              <p style={Style.status}>Aprovado</p>
            </div>
            <div style={{ ...Style.historyHeader, flexDirection: 'row' }}>
              <FaEdit style={Style.icon} />
              <FaUser style={Style.icon} />
              <FaTrash style={Style.icon} />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Users;