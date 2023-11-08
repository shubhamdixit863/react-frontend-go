import React,{useEffect, useState} from 'react'
import HeaderPage from './HeaderPage'
import { Card, Col, Row ,Button} from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FooterProject from './FooterProject';
import { Pagination } from 'antd';
import { Space, Spin } from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';


const URL=process.env.REACT_APP_API_URL;
const Home = () => {
  const navigate=useNavigate();
  const [projects,setProjects]=useState([]);
  const [totalRecords,setTotalRecords]=useState(0);

  const [page,setPage]=useState(1);
  const [limit,setLimit]=useState(5);
  const[showSpin,setShowSpin]=useState(false);

  const RedirectToAddProject=()=>{
    navigate("/addProject");
  }

  const handlePagination=(data)=>{

    setPage(data);
}
const RedirectfileUpload=(link)=>{

  if(link.includes("http")){
    window.location.href=link;
  }
 

}
const changeLimit=(size)=>{
setLimit(size);
}

  useEffect(()=>{
    setShowSpin(true);
    const headers={ headers: {"Authorization" : localStorage.getItem("token")} }
    axios.get(`${URL}/project?page=${page}&limit=${limit}`,headers).then(result=>{
      if(Array.isArray(result.data.data.projects)){
        setProjects(result.data.data.projects);

      }else{
        setProjects([]);

      }
      setTotalRecords(result.data.data.totalRecords);
      setShowSpin(false);
    }).catch(err=>{
      setShowSpin(false);
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
 <p>
 {ele.description} <br></br> <br></br>
 <CloudDownloadOutlined onClick={()=>RedirectfileUpload(ele.fileName)} style={{ fontSize: '200%'}} />
  </p> 
</Card>
</Col>

    ))
  }


</Row>
<Pagination  defaultCurrent={1} total={totalRecords} pageSize={limit} onChange={handlePagination} style={{marginLeft:"500px",padding:"40px"}}/></>: ""


}
{showSpin?<Spin size="large" style={{marginTop:"200px",marginLeft:"400px", padding:"50px"}} />:""}
     

  <FooterProject/>
     

    </div>
  )
}

export default Home