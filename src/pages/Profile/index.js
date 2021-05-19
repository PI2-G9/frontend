import React from 'react';
import Style from './style';
import { FaRegEdit, FaRegTrashAlt, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import users from '../../service/data/users';
import history from '../../service/data/history';

const Profile = () => {

  const userIndex = 0;

  const userHistory = history.filter((his) => {
    return his.name === users[userIndex].name 
  });

  return (
    <div style={Style.container}>
      <div style={Style.card}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ fontSize: 28, color: '#515151' }}>Perfil</p>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>
            <FaRegEdit style={{ color: '#276678', fontSize: 24, margin: 10 }} />
            <FaRegTrashAlt style={{ color: '#276678', fontSize: 24, margin: 10 }} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 40 }}>
          <div style={{ dispĺay: 'flex', width: '30%', height: '100%', justifyContent: 'center', flexDirection: 'row' }}>
            <img
              style={{
                width: '65%',
                height: '90%',
                borderRadius: "50%",
                overflow: "hidden",
                margin: 0
              }}
              alt='pic'
              src={users[userIndex].img} />
          </div>
          <div style={{ width: '60%', display: 'flex', flexDirection: 'column' }}>
            <div style={Style.textContainer}>
              <h3 style={{ ...Style.text, fontWeight: 'bold' }}>Nome:</h3>
              <h3 style={Style.text}>{users[userIndex].name}</h3>
            </div>
            <div style={Style.textContainer}>
              <h3 style={{ ...Style.text, fontWeight: 'bold' }}>Data de Nascimento:</h3>
              <h3 style={Style.text}>21/03/1960</h3>
            </div>
            <div style={Style.textContainer}>
              <h3 style={{ ...Style.text, fontWeight: 'bold' }}>Telefone:</h3>
              <h3 style={Style.text}>{users[userIndex].phone}</h3>
            </div>
            <div style={Style.textContainer}>
              <h3 style={{ ...Style.text, fontWeight: 'bold' }}>CPF:</h3>
              <h3 style={Style.text}>{users[userIndex].cpf}</h3>
            </div>
            <div style={Style.textContainer}>
              <h3 style={{ ...Style.text, fontWeight: 'bold' }}>Endereço:</h3>
              <h3 style={Style.text}>{users[userIndex].address}</h3>
            </div>
            <div style={Style.textContainer}>
              <h3 style={{ ...Style.text, fontWeight: 'bold' }}>Bairro:</h3>
              <h3 style={Style.text}>{users[userIndex].district}</h3>
            </div>
            <div style={Style.textContainer}>
              <h3 style={{ ...Style.text, fontWeight: 'bold' }}>Cidade:</h3>
              <h3 style={Style.text}>{`${users[userIndex].city}-${users[userIndex].uf}`}</h3>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{
            flex: 1, display: 'flex', backgroundColor: '#F6F5F5',
            borderRadius: 20, width: '75%', flexDirection: 'column',
            boxShadow: '3px 3px 5px 6px #ccc'
          }} >
            <div>
              <p style={{ fontSize: 28, color: '#276678', margin: 15 }}>Histórico</p>
            </div>
            <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '0px 0px 15px 15px' }}>
              <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                <div style={Style.historyHeader}>
                  <p style={Style.textHeader}>Status</p>
                </div>
                <div style={{ width: '40%' }}>
                  <p style={Style.textHeader}>Nome</p>
                </div>
                <div style={Style.historyHeader}>
                  <p style={Style.textHeader}>Temperatura</p>
                </div>
                <div style={Style.historyHeader}>
                  <p style={Style.textHeader}>Data</p>
                </div>
              </div>
              {userHistory.map((history) => {
                return (
                  <div style={{ flex: 1, display: 'flex' }}>
                    <div style={Style.historyHeader}>
                      { history.exit? 
                      <FaSignOutAlt style={Style.icon} />
                      :
                      <FaSignInAlt style={Style.icon} />
                      }
                    </div>
                    <div style={{ ...Style.historyHeader, width: '40%' }}>
                      <p style={Style.textHeader}>{history.name}</p>
                    </div>
                    <div style={Style.historyHeader}>
                      <p style={Style.textHeader}>{history.temperature}</p>
                    </div>
                    <div style={{ ...Style.historyHeader, flexDirection: 'column' }}>
                      <p style={Style.textHeader}>{history.hour}</p>
                      <p style={Style.textHeader}>{history.date}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;