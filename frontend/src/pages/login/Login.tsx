// import {  useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";


const Login = () => {
  
  const navigate = useNavigate();

  // form submit
  const submitHandler = async (values : undefined) => {
    try {
      
      const { data } = await api.post("/users/login", values);
      
      message.success("login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/notes");
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };

  // prevent for login user
  // useEffect(() => {
  //   if (localStorage.getItem("user")) {
  //     navigate("/notes");
  //   }
  // }, [navigate]);

  return (
    <>
      <div className='flex justify-center items-center mt-56'>
        
        <Form layout='vertical' onFinish={submitHandler}>
          <h1>Login</h1>
          
          <Form.Item label="Email" name="email">
            <Input type='email' />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type='password'/>
          </Form.Item>

          <div className="flex justify-between">
            <Link to="/register" >Not a user? Register...</Link>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Login
            </button>
          </div>
        </Form>

      </div>
    </>
  );
};

export default Login;