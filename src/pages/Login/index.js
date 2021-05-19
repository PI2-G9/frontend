import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div
      style={{
        display: 'flex', width: '100vw', height: '100vh', background: `linear-gradient(120deg, #276678, #1687A7)`,
        justifyContent: 'center', alignItems: 'center',
      }}>
      <div style={{
        display: 'flex', width: '22%', height: '50%', backgroundColor: 'white', alignItems: 'center',
        justifyContent: 'center', borderRadius: 15, flexDirection: 'column'
      }}>
        <div>
          {/* <img
            style={{ width: '10vw', height: '15vh'}}
            alt="logo"
            src="https://lh3.googleusercontent.com/proxy/-OR29Ixtsnt4QIOhbMffbVy6sFMlp88TG_Ii70p3xGRww_rsNMJoIRLHpLTfnNluKmT7o9jSa2n8M8Nm_oAJ4_i7iAMN3YdROAeJrWf7MX47xBgMqX3sZw8e5azRJA"
          /> */}
        </div>
        <div style={{ margin: 0 }}>
          <p style={{ display: 'flex', color: '#515151', fontSize: 40, margin: 0 }}>Login</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: 10 }}>
          <input
            style={{
              backgroundColor: '#D3E0EA', width: '15vw', height: 30, borderRadius: 10,
              fontSize: 18, margin: 15, outline: 'none', border: 'none', textIndent: 10
            }}
            placeholder="Usuário" />
          <input
            style={{
              backgroundColor: '#D3E0EA', width: '15vw', height: 30, borderRadius: 10,
              fontSize: 18, margin: 15, outline: 'none', border: 'none', textIndent: 10
            }}
            placeholder="Senha" type="password" />
        </div>
        <div>
          <Link to="/">
            <button style={{
              backgroundImage: 'linear-gradient(120deg, #276678, #1687A7)', color: 'white',
              width: '15vw', height: 40, borderRadius: 10, fontSize: 25, margin: 10, border: 'none',
            }}>
              Entrar
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login;
