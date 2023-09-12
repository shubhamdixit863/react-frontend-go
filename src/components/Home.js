import React, { useState } from "react";
import { Input } from "antd";
import { Col, Row } from "antd";
import { Avatar } from "antd";
import axios from "axios";
import moment from "moment";
import { UserOutlined } from "@ant-design/icons";
import { Select, Button } from "antd";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
const URL="http://localhost:8080"
const Home = () => {
    const [data,setData]=useState({});
    const [degree,setDegree]=useState("");
    const [date,setDate]=useState("");

    const handleDateChange=(value)=>{
        let startDate=moment(value[0]).format("YYYY-MM-DD");
        let endDate=moment(value[1]).format("YYYY-MM-DD")
        setDate(`From  ${startDate} To ${endDate}`)

    }
  const handleFormValueChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})

  }    
  const handleChange = (value) => {
     setDegree(value)
  };

  const handleClick=()=>{
    const payload={...data,degree:degree,schedule:date}
    console.log(payload);
    // We will call the api here -->
    
    axios.post(`${URL}/signup`,payload).then(data=>{
        console.log(data.data)
    }).catch(err=>{
        console.log(err);
    })

  }
  return (
    <div style={{ marginTop: "80px" }}>
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
          />

          <Input
            size="large"
            placeholder="Last Name"
            prefix={<UserOutlined />}
            style={{ marginTop: "15px" }}
            onChange={handleFormValueChange}
            name="lastName"


          />

          <Input
            size="large"
            placeholder="Email"
            prefix={<UserOutlined />}
            style={{ marginTop: "15px" }}
            onChange={handleFormValueChange}
            name="email"


          />
            <Input
            size="large"
            placeholder="Password"
            prefix={<UserOutlined />}
            style={{ marginTop: "15px" }}
            onChange={handleFormValueChange}
            name="password"
            type="password"


          />
          <h3 style={{ marginTop: "15px" }}>Pick Your Degree Level</h3>

          <Select
            defaultValue="Degree Level"
            style={{
              width: 480,
              marginTop: "8px",
            }}
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
                value: "NA",
                label: "Degree Level",
                disabled: true,
              },
            ]}
          />
          <h3 style={{ marginTop: "15px" }}>Pick Your Schedule</h3>

          <RangePicker style={{ marginTop: "10px", width: 480 }} onChange={handleDateChange} />

          <Input
            size="large"
            placeholder="Location"
            style={{ marginTop: "15px" }}
            onChange={handleFormValueChange}
            name="location"


          />

          <Button type="primary" style={{ marginTop: "15px", width: 180 }} onClick={handleClick}>
            Submit
          </Button>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
};

export default Home;
