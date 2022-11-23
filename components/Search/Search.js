import './Search.css';
import Modal from './Modal';
import {useState} from 'react';
import {alphaNumeric} from '../../helper/validation';

export default function Search(){

  const[getModal,setModal] = useState(false);

  const[getList,setList] = useState([]);

  const [getForm,setForm]=useState({
    name:'',
    position:'',
    age:'',
    startdate:'',
    salary:''
  });

  const [getValidation,setValidation]=useState({
    name:'',
    position:'',
    age:'',
    startdate:'',
    salary:''
  });

  const onChangeHandler=(event)=>{
    setForm({...getForm,[event.target.name]:event.target.value});
}

   const onCloseHandler=()=>{
            setModal(!getModal);
    }

    const clearHandler=()=>{
      setForm({
        name:'',
        position:'',
        age:'',
        startdate:'',
        salary:''
      })
      setValidation({
        name:'',
        position:'',
        age:'',
        startdate:'',
        salary:''
      })
    }
    const onSubmitHandler=(event)=>{
      event.preventDefault();
      console.log(getForm);
      if(alphaNumeric(getForm.name)==true && alphaNumeric(getForm.salary)==true){
        setList([...getList,getForm])
        console.log(getList);
        onCloseHandler();
        clearHandler();
      }
      else{
        setValidation({
          ...getValidation,
          name:alphaNumeric(getForm.name),
          salary:alphaNumeric(getForm.salary)
        })
      }
    }
    return(
        <div>
          {getModal && <Modal onSubmit={onSubmitHandler} getValidation={getValidation} getForm={getForm} text="name" onUpdate={onChangeHandler} onClose={onCloseHandler} />}
            <h1>Search Book</h1>
<div className="container-fluid">
  <div className="row">
    <div className="col-3">
        <form>        
            <div className="form-group">
              <input type="text" className="form-control" id="book"></input>
            
            </div>       
            <button type="submit" className="btn btn-warning">Search</button>
          </form>
    </div>
    <div className="col-9">
                <button onClick={onCloseHandler} style={{float:"right",marginTop:"20px"}} type="submit" className="btn btn-warning">ADD</button>
                </div>
    <div className="col-9"></div>
    
  </div>

  <div className="row">
      <div className="col-12">
        <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">SNo</th>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Age</th>
                <th scope="col">Start Date</th>
                <th scope="col">Salary</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
            {getList.map((input,index)=>{

return(
  <tr key={index}>
  <th scope="row">{index}</th>
  <td>{input.name}</td>
  <td>{input.position}</td>
  <td>{input.age}</td>
  <td>{input.startdate}</td>
  <td>{input.salary}</td>
  <td><i  data-toggle="modal" data-target="#edit" className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
  <td><i className="fa fa-trash" aria-hidden="true"></i></td>
</tr>
)

})}
           
            </tbody>
          </table>
      </div>
  </div>

</div>

<div className="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
<button type="button" className="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div className="modal-body">
</div>
<div className="modal-footer">
<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
<button type="button" className="btn btn-primary">Save changes</button>
</div>
</div>
</div>
</div>
        </div>
    )
}