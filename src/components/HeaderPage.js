import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const items1 = [{name:"Home Page"}, {name:"About Page"}, {name:"Add Project Page"}].map((key) => ({
  key,
  label: `${key.name}`,
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
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
   
    </Layout>
  );
};
export default HeaderPage;