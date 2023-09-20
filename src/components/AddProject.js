import React,{useState} from 'react'
import { UploadOutlined } from '@ant-design/icons';

import { Button, Form, Input, Row,Col } from 'antd';
import HeaderPage from './HeaderPage';
import { message, Upload } from 'antd';
import axios from 'axios';



const AddProject = () => {


  

// file Upload Here
      const props = {
        name: 'file',
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

// handle Form finish
const onFinish=(data)=>{
    debugger;
    console.log("Form Data",data);

}

  return (
    <div>
              <HeaderPage/>
      
   
    <Row style={{marginTop:"80px"}}>
      <Col span={12} offset = {8}>


      <Form
          name="basic"

      layout={'vertical'}
      onFinish={onFinish}

     
  
    >
      
      <Form.Item label="Project Name"
            name="projectName"

      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Description"
                  name="description"

      >
        <Input placeholder="input placeholder" />
      </Form.Item>

      <Form.Item label="Upload PDF File">
      <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
        
      </Form.Item>

      <Form.Item >
        <Button type="primary">Submit</Button>
      </Form.Item>

      
    </Form>


      </Col>
    </Row>
    



    </div>
  )
}

export default AddProject