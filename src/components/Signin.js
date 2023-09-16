import { Button, Checkbox, Form, Input,Row,Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const URL="http://localhost:8080"
const Signin = () => {
    const [form] = Form.useForm();
    const navigate=useNavigate();

    const onFinish = (values) => {
        // We will call our api here --->
        axios.post(`${URL}/signin`,values).then(result=>{
            console.log(result.data);
            form.resetFields();
            navigate("/home");

        }).catch(err=>{
            console.log(err);
        })
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
       const onFill = () => {

            // We will redirect it to the signup page --->
            navigate("/signup")
          
        };

return (
    <Row style={{marginTop:"200px"}}>
    <Col span={8}></Col>
    <Col span={8}>
    <h1>Login Here</h1>

    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    form={form}

  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
       
        <Button type="primary" htmlType="button" onClick={onFill} style={{marginLeft:"5px"}}>
         Signup Here
        </Button>

        <Button type="link" htmlType="button" onClick={onFill}>
         Forgot  Password
        </Button>
      </Form.Item>

  </Form>
        </Col>
        </Row>
)

    };
export default Signin;