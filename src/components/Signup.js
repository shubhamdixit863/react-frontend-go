import React, { useState } from "react";
import { Input } from "antd";
import { Col, Row ,Form} from "antd";
import { Avatar, message } from "antd";
import axios from "axios";
import moment from "moment";
import { UserOutlined } from "@ant-design/icons";
import { Select, Button } from "antd";
import { DatePicker } from "antd";
import { useNavigate } from 'react-router-dom';
import NoAuthHeader from "./NoAuthHeader";

const { RangePicker } = DatePicker;
const URL=process.env.REACT_APP_API_URL;
const DefaultData={
  firstName:"",
  lastName:"",
  email:"",
  location:"",
  degree:"",
  password:""


}




const Signup = () => {
  const [data, setData] = useState(DefaultData);
  const [degree, setDegree] = useState("");
  const [date, setDate] = useState("");
  const navigate=useNavigate();

  // Ant design Message
  const [messageApi, contextHolder] = message.useMessage();

  const handleDateChange = (value) => {
    let startDate = moment(value[0]).format("YYYY-MM-DD");
    let endDate = moment(value[1]).format("YYYY-MM-DD");
    setDate(`From  ${startDate} To ${endDate}`);
  };
  const handleFormValueChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleChange = (value) => {
    setDegree(value);
  };
  const ErrorMessage = (data) => {
    messageApi.error(data);
  };

  const InfoMessage = (data) => {
    messageApi.info(data);
  };
  const   Validate=(payload)=>{
    if (payload.firstName.length==0){
         return "Please Enter the First Name"
    }
    else if(payload.lastName.length==0){
      return "Please Enter the Last Name"

    }else if(payload.email.length==0){
      return "Please Enter the Email"

    }
    else if(payload.password.length==0){
      return "Please Enter the Password"

    }
    else if(payload.schedule.length==0){
      return "Please Enter the Schedule"

    }else if(payload.degree.length==0){
      return "Please Enter the Required Degree Level"

    }else if(payload.location.length==0){
      return "Please Enter the Location"

    }
   return null;
  }

  const onFill=()=>{
     navigate("/")
  }

  const handleClick = () => {
    const payload = { ...data, degree: degree, schedule: date };
  
    let result=Validate(payload)
    if(!result){
      axios
      .post(`${URL}/signup`, payload)
      .then((data) => {
        InfoMessage(data.data.message)
        setData(DefaultData);
        // We have to reset the scheduler and the range
        setDegree("")
      })
      .catch((error) => {
        // messageApi.info('Hello, Ant Design!');
        ErrorMessage(error.response.data.message);
      });

    }else{
      // We will call the message box here
      InfoMessage(result);
    }

    
  };
  return (
    <div className="App">
      <NoAuthHeader/>
 <div style={{ marginTop: "80px",  padding:"30px"}}>
      {contextHolder}
      <Avatar size={60} icon={<UserOutlined />} />
      <h2>SignUp Here</h2>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <Input
            size="large"
            placeholder="First Name"
            prefix={<UserOutlined />}
            onChange={handleFormValueChange}
            name="firstName"
            value={data.firstName}
          />

          <Input
            size="large"
            placeholder="Last Name"
            prefix={<UserOutlined />}
            style={{ marginTop: "15px" }}
            onChange={handleFormValueChange}
            name="lastName"
            value={data.lastName}
          />

          <Input
            size="large"
            placeholder="Email"
            prefix={<UserOutlined />}
            style={{ marginTop: "15px" }}
            onChange={handleFormValueChange}
            name="email"
            value={data.email}

          />
          <Input
            size="large"
            placeholder="Password"
            prefix={<UserOutlined />}
            style={{ marginTop: "15px" }}
            onChange={handleFormValueChange}
            name="password"
            type="password"
            value={data.password}

          />
          <h3 style={{ marginTop: "15px" }}>Pick Your Degree Level</h3>

          <Select
            defaultValue="Degree Level"
            style={{
              width: 480,
              marginTop: "8px",
            }}
            value={degree}
            onChange={handleChange}
            options={[
              {
                value: "Bachelors",
                label: "Bachelors",
              },
              {
                value: "Masters",
                label: "Masters",
              },
              {
                value: "Phd",
                label: "Phd",
              },
              {
                value: "Professor",
                label: "Professor",
              },

              {
                value: "",
                label: "Degree Level",
                disabled: true,
              },
            ]}
          />
          <h3 style={{ marginTop: "15px" }}>Pick Your Schedule</h3>

          <RangePicker
            style={{ marginTop: "10px", width: 480 }}
            onChange={handleDateChange}
            allowClear={true}
          />

          <Input
            size="large"
            placeholder="Location"
            style={{ marginTop: "15px" }}
            onChange={handleFormValueChange}
            name="location"
            value={data.location}

          />

          <Button
            type="primary"
            style={{ marginTop: "15px", width: 180 }}
            onClick={handleClick}
          >
            Signup
          </Button>

          <Button type="primary" htmlType="button" onClick={onFill} style={{marginLeft:"5px"}}>
         SignIn Here
        </Button>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
    </div>
   
  );
};

export default Signup;
