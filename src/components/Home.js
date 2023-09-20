import React from 'react'
import HeaderPage from './HeaderPage'
import { Card, Col, Row ,Button} from 'antd';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate=useNavigate();

  const RedirectToAddProject=()=>{
    navigate("/addProject");
  }
  return (
    <div >
      <HeaderPage/>
      <Button onClick={RedirectToAddProject} type="primary" style={{width:"150px",margin:"40px"}}>Add </Button>


      <Row gutter={16} style={{padding:"50px"}}>
        
    <Col span={6}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={6}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>
     

    </div>
  )
}

export default Home