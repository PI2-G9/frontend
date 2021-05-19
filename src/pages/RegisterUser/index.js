import React from 'react';
import { MdAddAPhoto } from "react-icons/md";
import { RiImageAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  return (
    <div style={{
      display: 'flex', flex: 1,
      borderRadius: '10px 0px 0px 10px', background: `linear-gradient(120deg, #276678, #1687A7)`, padding: 40,
      justifyContent: 'center', alignItems: 'center',
    }}>
      <div style={{ display: 'flex', width: '90%', height: '90%', backgroundColor: 'white', flexDirection: 'column', borderRadius: 15, padding: 50 }}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <p style={{ fontSize: 28, color: '#515151' }}>Cadastro</p>
          </div>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: "60%" }}>
              <div style={{ margin: 10 }}>
                <p style={{ fontSize: 18, margin: 5 }}>Nome:</p>
                <input style={{
                  width: '90%', height: '50%', margin: 10, borderRadius: 10, fontSize: 18, textIndent: 10,
                  outline: 'none', backgroundColor: '#F9F9F9', borderColor: '#515151'
                }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                <div style={{ width: '53%' }}>
                  <p style={{ fontSize: 18, margin: 5 }}>CPF:</p>
                  <input style={{
                    width: '90%', height: '50%', margin: 10, borderRadius: 10, fontSize: 18, textIndent: 10,
                    outline: 'none', backgroundColor: '#F9F9F9', borderColor: '#515151'
                  }} />
                </div>
                <div style={{ width: '41%' }}>
                  <p style={{ fontSize: 18, margin: 5 }}>Data de Nascimento:</p>
                  <input style={{
                    width: '90%', height: '50%', margin: 10, borderRadius: 10, fontSize: 18, textIndent: 5,
                    outline: 'none', backgroundColor: '#F9F9F9', borderColor: '#515151'
                  }}
                    placeholder="01/01/1999"
                    type="date"
                  />
                </div>
              </div>
              <div style={{ margin: 10 }}>
                <p style={{ fontSize: 18, margin: 5 }}>Telefone:</p>
                <input style={{
                  width: '90%', height: '50%', margin: 10, borderRadius: 10, fontSize: 18, textIndent: 10,
                  outline: 'none', backgroundColor: '#F9F9F9', borderColor: '#515151'
                }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                <div style={{ width: "70%" }}>
                  <p style={{ fontSize: 18, margin: 5 }}>Endereço:</p>
                  <input style={{
                    width: '90%', height: '50%', margin: 10, borderRadius: 10, fontSize: 18, textIndent: 10,
                    outline: 'none', backgroundColor: '#F9F9F9', borderColor: '#515151'
                  }} />
                </div>
                <div style={{ width: "23%" }}>
                  <p style={{ fontSize: 18, margin: 5 }}>Número:</p>
                  <input style={{
                    width: '90%', height: '50%', margin: 10, borderRadius: 10, fontSize: 18, textIndent: 10,
                    outline: 'none', backgroundColor: '#F9F9F9', borderColor: '#515151'
                  }} />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                <div style={{ width: "70%" }}>
                  <p style={{ fontSize: 18, margin: 5 }}>Cidade:</p>
                  <input style={{
                    width: '90%', height: '50%', margin: 10, borderRadius: 10, fontSize: 18, textIndent: 10,
                    outline: 'none', backgroundColor: '#F9F9F9', borderColor: '#515151'
                  }} />
                </div>
                <div style={{ width: "23%" }}>
                  <p style={{ fontSize: 18, margin: 5 }}>UF:</p>
                  <input style={{
                    width: '90%', height: '50%', margin: 10, borderRadius: 10, fontSize: 18, textIndent: 10,
                    outline: 'none', backgroundColor: '#F9F9F9', borderColor: '#515151'
                  }} />
                </div>
              </div>
              <div style={{ width: "68%", margin: 10 }}>
                <p style={{ fontSize: 18, margin: 5 }}>Bairro:</p>
                <input style={{
                  width: '90%', height: '50%', margin: 10, borderRadius: 10, fontSize: 18, textIndent: 10,
                  outline: 'none', backgroundColor: '#F9F9F9', borderColor: '#515151'
                }} />
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
            <Link to="/">
              <button style={{
                backgroundImage: 'linear-gradient(120deg, #F6F5F5, #D3E0EA)', color: '#515151',
                width: '15vw', height: 40, borderRadius: 10, fontSize: 25, margin: 10, border: 'none',
              }}>
                Cancelar
            </button>
            </Link>
            <button style={{
              backgroundImage: 'linear-gradient(120deg, #276678, #1687A7)', color: 'white',
              width: '15vw', height: 40, borderRadius: 10, fontSize: 25, margin: 10, border: 'none',
            }}>
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RegisterUser;