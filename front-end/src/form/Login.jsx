import React, {useContext} from 'react'
import {UserContext} from '../component/UserContextApi'
import Layout from './../core/Layout'
import axios from 'axios'
import toastr from 'toastr';
import 'toastr/build/toastr.css';

import '../css/login.css';

axios.defaults.withCredentials = true

function Login(props) {
  const { setAuth} = useContext(UserContext);
  
  

  const initialState = {
    email: '',
    password:''
  }

  const [dataLogin,setDataLogin] = React.useState(initialState)
  
  const handelChange = (e)=>{
    setDataLogin({...dataLogin,[e.target.name] : e.target.value})
  }
  const handelSubmit = async (e)=>{
    
  
    
    e.preventDefault();
    try {
      
      const res = await axios.post('http://localhost:3001/api/login',dataLogin,{
        withCredentials:true
      })
      if(res){
        toastr.success(' authenticated Successfully', 'Welcome')
        setAuth(res.data)
       
        if(res.data.isAuth){
          localStorage.setItem('jwt_info', JSON.stringify(res.data))

          if (res.data.type === 'admin'){
            
            props.history.push('/tickets-list')

          }else if (res.data.type === 'technician'){
            props.history.push('/tech')
          }else if (res.data.type === 'employer'){
            props.history.push('/employer')
          }
        }
        
      }
    }
    catch (error) {
      toastr.error(error , 'Email or password is incorrect')
      if(error) console.log(error.response);
    }

  }


  const Login = () => (

    <form onSubmit={handelSubmit} className="form-group">
      <div className="row">
        <input onChange={handelChange} type="text" name="email" className="form__input" placeholder="Email"/>
      </div>
      <div className="row">
        <input onChange={handelChange} type="password" name="password" className="form__input" placeholder="Password"/>
      </div>

      <div className="row">
        <input type="submit" value="Submit" className="btn btn-dark btn-lg btn-block "/>
      </div>
    </form>
    
 )
 return (
<div>

<div className="container">
<div className="row main-content bg-success text-center">
  <div className="col-md-4 text-center company__info">
    <span className="company__logo"></span>
    <h4 className="company_title">Ticketing system</h4>
  </div>
  <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
    <div className="container-fluid">
      <div className="row">
        <h2>Log In</h2>
      </div>
      <div className="row">

      { Login() }
        
      </div>
    </div>
  </div>
</div>
</div>
</div>
 )
}

export default Login
