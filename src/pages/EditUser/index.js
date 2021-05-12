import React from 'react';
import Style from './style';
import { MdAddAPhoto } from "react-icons/md";
import { RiImageAddFill } from "react-icons/ri";

const EditUser = () => {

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
                <input style={Style.input} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                <div style={{ width: '53%' }}>
                  <p style={{ fontSize: 18, margin: 5 }}>CPF:</p>
                  <input style={Style.input} />
                </div>
                <div style={{ width: '41%' }}>
                  <p style={{ fontSize: 18, margin: 5 }}>Data de Nascimento:</p>
                  <input style={Style.input}
                    placeholder="01/01/1999"
                    type="date"
                  />
                </div>
              </div>
              <div style={{ margin: 10 }}>
                <p style={{ fontSize: 18, margin: 5 }}>Telefone:</p>
                <input style={Style.input} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                <div style={{ width: "70%" }}>
                  <p style={{ fontSize: 18, margin: 5 }}>Endereço:</p>
                  <input style={Style.input} />
                </div>
                <div style={{ width: "23%" }}>
                  <p style={{ fontSize: 18, margin: 5 }}>Número:</p>
                  <input style={Style.input} />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                <div style={{ width: "70%" }}>
                  <p style={{ fontSize: 18, margin: 5 }}>Cidade:</p>
                  <input style={Style.input} />
                </div>
                <div style={{ width: "23%" }}>
                  <p style={{ fontSize: 18, margin: 5 }}>UF:</p>
                  <input style={Style.input} />
                </div>
              </div>
              <div style={{ width: "68%", margin: 10 }}>
                <p style={{ fontSize: 18, margin: 5 }}>Bairro:</p>
                <input style={Style.input} />
              </div>
            </div>
            <div style={{ display: 'flex', margin: 10, justifyContent: 'center', alignItems: 'center', width: '40%', flexDirection: 'column' }}>
              <div>
                <MdAddAPhoto style={{ fontSize: 200, color: '#276678' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <RiImageAddFill style={{ color: '#276678', fontSize: 18, margin: 10 }} />
                <p style={{ color: '#276678', fontSize: 18 }}>Adicionar foto</p>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
            <button style={Style.secondaryButton}>
              Cancelar
            </button>
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