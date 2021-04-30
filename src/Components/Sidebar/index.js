import React from 'react';
import { Link } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from 'react-pro-sidebar';
import { menuItem, subMenuItem } from './styles'
import './style.scss';

const Sidebar = () => {

  return (
    <ProSidebar style={{height:"100vh"}} >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          Smart Door
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem style={menuItem}>Dashboard <Link to="/" /></MenuItem>
          <SubMenu style={menuItem} title="Perfil">
            <MenuItem style={subMenuItem} >Perfil <Link to="/profile" /></MenuItem>
            <MenuItem style={subMenuItem} >Editar perfil</MenuItem>
          </SubMenu>
          <MenuItem style={menuItem}>Histórico</MenuItem>
          <SubMenu style={menuItem} title="Usuários">
            <MenuItem style={subMenuItem}>Lista de Usuário</MenuItem>
            <MenuItem style={subMenuItem}>Novo Usuário</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="/"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <span>Sair</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  )
};

export default Sidebar;