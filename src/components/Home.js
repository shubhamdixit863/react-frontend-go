import React,{useEffect, useState} from 'react'
import HeaderPage from './HeaderPage'
import { Card, Col, Row ,Button} from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FooterProject from './FooterProject';
import { Pagination } from 'antd';
import { Space, Spin } from 'antd';


const URL="http://localhost:8080";
const Home = () => {
  const navigate=useNavigate();
  const [projects,setProjects]=useState([]);
  const [totalRecords,setTotalRecords]=useState(0);

  const [page,setPage]=useState(1);
  const [limit,setLimit]=useState(5);

  const RedirectToAddProject=()=>{
    navigate("/addProject");
  }

  const handlePagination=(data)=>{

    setPage(data);
}
const changeLimit=(size)=>{
setLimit(size);
}

  useEffect(()=>{
    const headers={ headers: {"Authorization" : localStorage.getItem("token")} }
    axios.get(`${URL}/project?page=${page}&limit=${limit}`,headers).then(result=>{
      setProjects(result.data.data.projects);
      setTotalRecords(result.data.data.totalRecords);

    }).catch(err=>{
      console.log(err);
    })

  },[page])
  return (
    <div >
      <HeaderPage/>
      <Button onClick={RedirectToAddProject} type="primary" style={{width:"150px",margin:"40px"}}>Add </Button>
{
  projects.length>0?<> <Row gutter={16} style={{padding:"50px"}}>
        
  {
    projects.map((ele,i)=>(
      <Col span={6}>
<Card title={ele.projectName} bordered={false} key={i}>
  {ele.description}
</Card>
</Col>

    ))
  }


</Row>
<Pagination  defaultCurrent={1} total={totalRecords} pageSize={limit} onChange={handlePagination} style={{marginLeft:"500px",padding:"40px"}}/></>:  <Spin size="large" style={{marginTop:"200px",marginLeft:"400px", padding:"50px"}} />
}

     

  <FooterProject/>
     

    </div>
  )
}

export default Home