import React from 'react';
import Style from './style';
import { FaTrash, FaUser, FaEdit } from "react-icons/fa";
import users from '../../service/data/users';


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
          {users.map((user) => {
            return (
              <div style={{ flex: 1, display: 'flex' }}>
                <div style={{ ...Style.historyHeader, width: '15%' }}>
                  <img
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      overflow: "hidden",
                      margin: 15
                    }}
                    alt='pic'
                    src={user.img} />
                </div>
                <div style={{ ...Style.historyHeader, width: '30%' }}>
                  <p style={Style.textHeader}>{user.name}</p>
                </div>
                <div style={Style.historyHeader}>
                  <p style={Style.textHeader}>{user.phone}</p>
                </div><div style={Style.historyHeader}>
                  <p style={Style.status}>{user.status}</p>
                </div>
                <div style={{ ...Style.historyHeader, flexDirection: 'row' }}>
                  <FaEdit style={Style.icon} />
                  <FaUser style={Style.icon} />
                  <FaTrash style={Style.icon} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div >
  )
}

export default Users;