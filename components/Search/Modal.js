import './Search.css';

export default function Modal(props) {
    return (
      <div className='custom-modal'>
        <p>{props.text}</p>
        <form>
                      <div className="form-group">
                          <label>Name</label>
                          <input type="text" 
                           onChange={props.onUpdate} 
                           value={props.getForm.firstName} name="name"
                            className="form-control"
                             id="name"  
                             placeholder="Enter name"/>
                          <div className="text-danger">{props.getValidation.name}</div>
                          </div>
                        <div className="form-group">
                          <label>Position</label>
                          <input type="text" 
                           onChange={props.onUpdate} 
                           value={props.getForm.position}
                            name="position"
                             className="form-control"
                              id="position"  
                              placeholder="Enter position"/>
                          <div className="text-danger">{props.getValidation.position}</div>
                        </div>
                        <div className="form-group">
                          <label>Age</label>
                          <input type="text"  
                          onChange={props.onUpdate} 
                          value={props.getForm.age} 
                          name="age" 
                          className="form-control" 
                          id="age"  
                          placeholder="Enter Age"/>
                          <div className="text-danger">{props.getValidation.age}</div>
                        </div>
                        <div className="form-group">
                          <label>StartDate</label>
                          <input type="date"  
                          onChange={props.onUpdate} 
                          value={props.getForm.startdate} 
                          name="startdate" 
                          className="form-control" 
                          id="startdate"  
                          placeholder="Enter Startdate"/>
                          <div className="text-danger">{props.getValidation.startdate}</div>
                        </div>
                        <div className="form-group">
                          <label>Salary</label>
                          <input type="text"  
                          onChange={props.onUpdate} 
                          value={props.getForm.salary} 
                          name="salary" 
                          className="form-control" 
                          id="salary"  
                          placeholder="Enter Salary"/>
                          <div className="text-danger">{props.getValidation.salary}</div>
                        </div>
                
                      <button onClick={props.onSubmit} 
                      type="submit" 
                      className="btn btn-warning">Submit</button>
                    </form>
    </div>
  );
}
