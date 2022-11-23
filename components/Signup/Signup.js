import './Signup.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {alphaNumeric} from '../../helper/validation';
export default function Signup(){

  const[getValidation,setValidation]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:''
  });

  const[getForm,setForm]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:''
  });

  const onChangeHandler=(event)=>{
    setForm({...getForm,[event.target.name]:event.target.value});
  }

  const onSubmitHandler=(event)=>{
    event.preventDefault();
    console.log(getForm);
    if(alphaNumeric(getForm.firstName)==true && alphaNumeric(getForm.lastName)==true){
    sessionStorage.setItem('email',getForm.email);
    sessionStorage.setItem('password',getForm.password);
    navigate('/login');
    }
    else{
      setValidation({
        ...getValidation,
        firstName:alphaNumeric(getForm.firstName),
        lastName:alphaNumeric(getForm.lastName)
      })
    }
  }

  const navigate=useNavigate();

    return(
        <div>
              <h1 className='sign'>Sign Up</h1>    
<form>
  <div className="container">
    <div className="row">
      <div className="col-4">
      </div>
      <div className="col-4">
        <form>
            <div className="form-group">
                <label>First Name</label>
                <input type="text"
                 className="form-control" 
                 id="firstName" 
                 name="firstName"
                value={getForm.firstName}
                onChange={onChangeHandler} 
                 placeholder="Enter first name"/>
                <div className='text-danger'>{getValidation.firstName}</div>

              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" 
                className="form-control" 
                id="lastName"
                name="lastName"
                value={getForm.lastName}
                onChange={onChangeHandler}  
                placeholder="Enter last name"/>
                <div className='text-danger'>{getValidation.lastName}</div>
              </div>
              
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
            onClick={onSubmitHandler}>Submit</button>
          </form>
    </div>
</div>
</div>    
</form>
        </div>
    )
}