import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
const items1 = [
{name:"Signup Page",link:"/signup"},

{name:"Login Page",link:"/"}
].map((key) => ({
  label: <Link to={key.link}>{key.name}</Link>,
}));

const NoAuthHeader = () => {

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
export default NoAuthHeader;