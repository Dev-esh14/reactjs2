import './Addbook.css';

export default function Addbook(){
    return(
        <div>
           <div className="container.fluid">
        <p className=" h3 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Book</p>
        
       
        <div className="form-group">
            <label for="title" className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Book Id : </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
            <input type="title" name="title" id="title" /></div>
            <div className="form-group">
                <label for="title" className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Book Title :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                <input type="title" name="title" id="title" /></div>
                <div className="form-group">
                    <label for="title" className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Book Desc :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                    <input type="title" name="title" id="title" /></div>
                    <div className="form-group">
                        <label for="title" className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Author Name:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                        <input type="title" name="title" id="title" /></div>
                        <div className="form-group">
                            <label for="title" className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Number of&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book Available:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                            <input type="title" name="title" id="title" /></div>
           
        <button type="addbook" className=" btn btn-warning">Add Book</button>
        </div>
        </div>
    )
}