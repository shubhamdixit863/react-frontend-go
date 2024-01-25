import React ,{useEffect, useState} from 'react'
import { Space, Table, Tag } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
const adminUrl="http://localhost:8080/admin"
const columns = [
    {
      title: 'FirstName',
      dataIndex: 'firstName',
      key: 'firstName',
      render: (text,record) => {
     return <Link to={`user/${record.id}`}>{text}</Link>
    
    },
    },
    {
      title: 'LastName',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Schedule',
      dataIndex: 'schedule',
      key: 'schedule',
    },
  
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.firstName}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
/*
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  */
const Dashboard = () => {
const limit=5
const [page,setPage]=useState(1);
const [data,setData]=useState([]);
  useEffect(()=>{
  // 
  axios.get(`${adminUrl}/users?page=${page}&limit=${limit}`)
  .then(
    res=>{
      setData(res.data.data)
    }
  )
  .catch(err=>{
    console.log(err);
  })
  },[])
  return (
    <div>
     <h1 style={{textAlign:"center"}}>Dashboard</h1>

     <Table columns={columns} dataSource={data} />

    </div>
  )
}

export default Dashboard