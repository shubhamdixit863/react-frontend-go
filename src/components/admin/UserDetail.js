import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Descriptions } from 'antd';
import { Card } from 'antd';

import { Col, Row } from 'antd';
const adminUrl="http://localhost:8080/admin"
const { Meta } = Card;


const items = [
  {
    key: '1',
    label: 'FirstName',
    children: 'Zhou Maomao',
  },
  {
    key: '2',
    label: 'Telephone',
    children: '1810000000',
  },
  {
    key: '3',
    label: 'Live',
    children: 'Hangzhou, Zhejiang',
  },
  {
    key: '4',
    label: 'Remark',
    children: 'empty',
  },
  {
    key: '5',
    label: 'Address',
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
  },
];

const UserDetail = () => {
  const {id}=useParams();
  const [items,setItems]=useState([])
useEffect(()=>{
  axios.get(`${adminUrl}/user/${id}`).then(res=>{
   let object= res.data.data
    console.log();
    
    const items=[];
     let key=1;
    for (const property in object) {
      items.push(
        {
          key: key,
          label: property,
          children: object[property],
        },

      )
      key++
    }

    setItems(items);

  }).catch(err=>{
    console.log(err);
  })

},[])

  console.log(id);
  return (
    <div style={{padding:"50px", marginTop:"80px"}} >
       <Row>
        <Col span={12} offset={6}>
        <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
        </Col>

      <Col span={12} offset={6}> <Descriptions title="User Info" items={items} /></Col>
    </Row>
    

    </div>
  )
}

export default UserDetail