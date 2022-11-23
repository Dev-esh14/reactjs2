import './About.css';
import library from '../../assets/aboutlibrary.jpg'

export default function About(){
    return(
        <div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <img className="img-about" src={library} alt="Welcome to Library Management System"/>
                </div> 
                <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <p>Online library management project in spring and hibernate is complete solution for all the manual problem that we face during the library management.Mainly there are 2 main actor of the application that going to operate the application 1.Admin/Librarian and 2.User/Students.
            Book or Digital books is the main module of the library management system.Book are assets that we are storing in the database with some details like name,author name and version and a PDF format.So admin can perform crud operation and issued the booked to users.</p>
                </div> 
                </div>
              </div>
          </div> 
          </div>
        </div>
    );
}
