import React,{useState} from 'react'
import { UploadOutlined } from '@ant-design/icons';

import { Button, Form, Input, Row,Col } from 'antd';
import HeaderPage from './HeaderPage';
import { message, Upload } from 'antd';
import axios from 'axios';

const URL="http://localhost:8080";
const FileUploadUrl="http://localhost:8090"


const AddProject = () => {
  const [file,setFile]=useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();




  

// file Upload Here
      const props = {
        name: 'file',
        action: `${FileUploadUrl}/upload`,
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            //console.log("Object-----",info);
            setFile(info.file.response.filePath);
          
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

// handle Form finish
const onFinish=(data)=>{
  data.fileName=file;

  axios.post(`${URL}/project`,data).then(result=>{
   // console.log(result);
    InfoMessage(result.data.message);
    form.resetFields();
    // Clear the file Uploaded section too once the form is uploaded properly
  }).catch(err=>{
    console.log(err);
  })
}

const InfoMessage = (data) => {
  messageApi.info(data);
};

  return (
    <div>
            {contextHolder}

              <HeaderPage/>
      
   
    <Row style={{marginTop:"80px"}}>
      <Col span={12} offset = {8}>


      <Form
          name="basic"

          form={form}
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
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>

      
    </Form>


      </Col>
    </Row>
    



    </div>
  )
}

export default AddProject