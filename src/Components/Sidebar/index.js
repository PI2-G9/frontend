import React from 'react';
import { Link } from "react-router-dom";
import { FaTh, FaUserAlt, FaHistory, FaUsers, FaSignOutAlt} from "react-icons/fa";

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
    <ProSidebar style={{ height: "100vh" }} >
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
          <MenuItem
            style={menuItem}
            icon={<FaTh size={30}/>}>
            Dashboard
            <Link to="/" />
          </MenuItem>
          <SubMenu  
            style={menuItem} 
            icon={<FaUserAlt size={30}/>} 
            title="Perfil">
            <MenuItem style={subMenuItem} >Perfil <Link to="/perfil" /></MenuItem>
            <MenuItem style={subMenuItem} >Editar perfil<Link to="/editar" /></MenuItem>
          </SubMenu>
          <MenuItem
            style={menuItem}
            icon={<FaHistory size={30}/>}>
              Histórico
              <Link to="/historico" />
            </MenuItem>
          <SubMenu 
          style={menuItem} 
          icon={<FaUsers size={30}/>} 
          title="Usuários">
            <MenuItem style={subMenuItem}>Lista de Usuário <Link to="/usuarios" /></MenuItem>
            <MenuItem style={subMenuItem}>Novo Usuário <Link to="/cadastro" /></MenuItem>
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
          <div style={{display: 'flex', flexDirection: 'row', margin: 15}}>
              <FaSignOutAlt size={30} color="#FF7979"/>
              <p style={{fontSize:25, margin: 0, marginLeft: 15, color:'#FF7979'}}>Sair</p>
          </div>
        </div>
      </SidebarFooter>
    </ProSidebar>
  )
};

export default Sidebar;