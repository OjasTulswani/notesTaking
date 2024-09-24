import { useEffect } from 'react';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import api from '../../api/api';


const Register = () => {
  
  const navigate = useNavigate();

  // form submit
  const submitHandler = async (values : undefined) => {
    try {
      
      await api.post('/users/register', values);
      message.success('Successfully registered!');
      
      navigate('/login');
    } catch (error) {
      console.log(error);
      message.error('Something went wrong...');
    }
  };

  // prevent for registration user
//   useEffect(() => {
//     if (localStorage.getItem("user")) {
//       navigate("/");
//     }
//   }, [navigate]);

  return (
    <>
      <div className='flex items-center justify-center mt-56'>
        
        <Form layout='vertical' onFinish={submitHandler}>
          <h1>Register</h1>
          
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type='email' />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type='password'/>
          </Form.Item>

          <div className="flex justify-between">
            <Link to="/login" >Already Register? Login...</Link>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Register
            </button>
          </div>
        </Form>

      </div>
    </>
  );
};

export default Register;