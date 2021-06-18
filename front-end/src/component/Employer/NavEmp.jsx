import React, {Fragment} from 'react'
import { Link, withRouter} from 'react-router-dom'



const NavEmp = () =>{

    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <Fragment>  
                <li className="nav-item active">
                  <Link  className="nav-link" to="/create-tickets">Create new ticket<span className="sr-only">(current)</span></Link >
                </li>
              
              </Fragment>

              <Fragment>  
                <li className="nav-item active">
                  <Link  className="nav-link" to="/employer">My tickets<span className="sr-only">(current)</span></Link >
                </li>
              
              </Fragment>
              </ul>
              <ul className="navbar-nav ml-auto">
              <Fragment>  
                <li className="nav-item active ml-auto">
                  <Link  className="nav-link" to="/logout"> <i className="fas fa-sign-out-alt mr-1"></i>Logout<span className="sr-only">(current)</span></Link >
                </li>
              
              </Fragment>
              

            
            </ul>
           
            
          </div>
          </div>
      </nav>      
     </div>
    )
}

export default withRouter(NavEmp)