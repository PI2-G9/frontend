import React, {useState, useEffect} from 'react';
import Style from './style';
import { MdAddAPhoto } from "react-icons/md";
import { RiImageAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";


import users from '../../service/data/users';

const EditUser = () => {

  const userIndex = 0;

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAdress] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [district, setDistrict] = useState('');

  useEffect(()=>{
    setName(users[userIndex].name);
    setCpf(users[userIndex].cpf);
    setBirthDate('1980-03-21');
    setPhone(users[userIndex].phone);
    setAdress(users[userIndex].address);
    setNumber(users[userIndex].number);
    setCity(users[userIndex].city);
    setUf(users[userIndex].uf);
    setDistrict(users[userIndex].district);
  }, []); 


  return (
    <div style={Style.container}>
      <div style={Style.card}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <p style={{ fontSize: 28, color: '#515151' }}>Editar</p>
          </div>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: "60%" }}>
              <div style={{ margin: 10 }}>
                <p style={{ fontSize: 18, margin: 5 }}>Nome:</p>
                <input style={Style.input}  value={name} onChange={(input) => setName(input.value)}/>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                <div style={{ width: '53%' }}>
                  <p style={{ fontSize: 18, margin: 5 }}>CPF:</p>
                  <input style={Style.input} value={cpf} onChange={(input) => setCpf(input.value)}/>
                </div>
                <div style={{ width: '41%' }}>
                  <p style={{ fontSize: 18, margin: 5 }}>Data de Nascimento:</p>
                  <input style={Style.input}
                    placeholder="01/01/1999"
                    type="date"
                    value={birthDate}
                    onChange={(input) => setBirthDate(input.value)}
                  />
                </div>
              </div>
              <div style={{ margin: 10 }}>
                <p style={{ fontSize: 18, margin: 5 }}>Telefone:</p>
                <input style={Style.input} value={phone} onChange={(input) => setPhone(input.value)}/>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                <div style={{ width: "70%" }}>
                  <p style={{ fontSize: 18, margin: 5 }}>Endereço:</p>
                  <input style={Style.input} value={address} onChange={(input) => setAdress(input.value)}/>
                </div>
                <div style={{ width: "23%" }}>
                  <p style={{ fontSize: 18, margin: 5 }}>Número:</p>
                  <input style={Style.input} value={number} onChange={(input) => setNumber(input.value)}/>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                <div style={{ width: "70%" }}>
                  <p style={{ fontSize: 18, margin: 5 }}>Cidade:</p>
                  <input style={Style.input} value={city} onChange={(input) => setCity(input.value)}/>
                </div>
                <div style={{ width: "23%" }}>
                  <p style={{ fontSize: 18, margin: 5 }}>UF:</p>
                  <input style={Style.input} value={uf} onChange={(input) => setUf(input.value)}/>
                </div>
              </div>
              <div style={{ width: "68%", margin: 10 }}>
                <p style={{ fontSize: 18, margin: 5 }}>Bairro:</p>
                <input style={Style.input} value={district} onChange={(input) => setDistrict(input.value)}/>
              </div>
            </div>
            <div style={{ display: 'flex', margin: 10, justifyContent: 'center', alignItems: 'center', width: '40%', flexDirection: 'column' }}>
              <div>
                <MdAddAPhoto style={{ fontSize: 200, color: '#276678' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <RiImageAddFill style={{ color: '#276678', fontSize: 18, margin: 10 }} />
                <p style={{ color: '#276678', fontSize: 18 }}>Alterar foto</p>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Link to="/">
              <button style={Style.secondaryButton}>
                Cancelar
              </button>
            </Link>
            <button style={Style.primaryButton}>
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EditUser;