import React from 'react';
import {  Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const items1 = [{name:"Home Page",link:"/home",id:1}, {name:"About Page",link:"/about",id:2}, {name:"Add Project Page",link:"/addProject"},
{name:"Logout",link:"/logout"},

].map((key) => ({
  label: <Link to={key.link}>{key.name}</Link>,
}));

const HeaderPage = () => {

  return (
    <Layout style={{padding:"10px"}}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal"  items={items1} />
      </Header>
   
    </Layout>
  );
};
export default HeaderPage;