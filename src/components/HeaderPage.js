import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

const HeaderPage = () => {
  const MenuItems=[
    {
      name:"Home",
      
    },
    {
      name:"About",
      
    }
  ];


  return (
    <Header
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <div className="demo-logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={new Array(15).fill(null).map((_, index) => {
        const key = index + 1;
        return {
          key,
          label: `nav ${key}`,
        };
      })}
    />
  </Header>
  )
}

export default HeaderPage