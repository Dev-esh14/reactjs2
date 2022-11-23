import './Login.css';
import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {alphaNumeric,emailCheck} from '../../helper/validation';

export default function Login(){

  const[getForm,setForm]=useState({
    email:'',
    password:''
  });

  const[getValidation,setValidation]=useState({
    email:'',
    password:''
  });

  const onChangeHandler=(event)=>{
    setForm({...getForm,[event.target.name]:event.target.value});
  }  
  
  const onSubmitHandler=(event)=>{
    event.preventDefault();
    if(emailCheck(getForm.email)==true && alphaNumeric(getForm.password)==true){
    if(sessionStorage.getItem('email')==getForm.email && sessionStorage.getItem('password')==getForm.password){
    navigate('/search');
    }
  }
  else{
    setValidation({
      ...getValidation,
      email:"no match found",
      password:"no match found"
    }) 
   }
}
  
  const navigate=useNavigate();
    return(
        <div>
            <h1 className='login'>Login</h1>
            <div className="container">
              <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4">
                  <form>        
                      <div className="form-group">
                        <label>Email address</label>
                        <input type="email" 
                        className="form-control"
                         id="email" 
                         name="email"
                         value={getForm.email} 
                         onChange={onChangeHandler}
                         placeholder="Enter email"/>
                         <div className='text-danger'>{getValidation.email}</div>
                      
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password"
                         className="form-control" 
                         id="password"
                         name="password"
                        value={getForm.password} 
                        onChange={onChangeHandler}
                        placeholder="Password"/>
                        <div className='text-danger'>{getValidation.password}</div>
                      </div>
                  
                      <button type="submit"
                       className="btn btn-warning"
                       onClick={onSubmitHandler}
                       >Submit</button>
                    </form>
              </div>
                <div className="col-4">
                    
              </div>
              </div>
     
          </div>
        </div>
    )
}