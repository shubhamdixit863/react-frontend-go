import React,{useEffect, useState} from 'react'
import HeaderPage from './HeaderPage'
import { Card, Col, Row ,Button} from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FooterProject from './FooterProject';
import { Pagination } from 'antd';

const URL="http://localhost:8080";
const Home = () => {
  const navigate=useNavigate();
  const [projects,setProjects]=useState([]);

  const [page,setPage]=useState(1);
  const [limit,setLimit]=useState(5);

  const RedirectToAddProject=()=>{
    navigate("/addProject");
  }

  const handlePagination=(data)=>{

    setPage(data);

  

  }

  useEffect(()=>{
    axios.get(`${URL}/project?page=${page}&limit=${limit}`).then(result=>{
      setProjects(result.data.data);

    }).catch(err=>{
      console.log(err);
    })

  },[page])
  return (
    <div >
      <HeaderPage/>
      <Button onClick={RedirectToAddProject} type="primary" style={{width:"150px",margin:"40px"}}>Add </Button>


      <Row gutter={16} style={{padding:"50px"}}>
        
        {
          projects.map(ele=>(
            <Col span={6}>
      <Card title={ele.projectName} bordered={false}>
        {ele.description}
      </Card>
    </Col>

          ))
        }
    
   
  </Row>
  <Pagination defaultCurrent={1} total={50}  onChange={handlePagination} style={{marginLeft:"500px",padding:"40px"}}/>

  <FooterProject/>
     

    </div>
  )
}

export default Home