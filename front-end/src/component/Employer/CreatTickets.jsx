import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import NavEmp from './NavEmp'
import Layout from '../../core/Layout'
import axios from 'axios'
import toastr from 'toastr';

function CreateTicket() {
     const history = useHistory()
     const [createTicket, setCreateTicket] = useState({
          title: '',
          description: '',
          type: '', 
          emergency: '', 
     })

     const createTickets = async(e) => {
          e.preventDefault();
          try {
          const {data} = await axios.post(' http://localhost:3001/api/addTicket', createTicket)
          if(data){
               toastr.success ('Ticket Created Successfully')
               history.push('/employer')
          }
          } catch (error) {
               console.log(error)
          }

     }


  
    
     const handelChange = (e) => {
          setCreateTicket({...createTicket, [e.target.name]: e.target.value})
     }

    
     const form = () =>(
          <form onSubmit={createTickets}>

          <div className="form-group">
               <label htmlFor="registration_number">Title</label>
               <input
                    type="text"
                    className="form-control"
                    name="title"
                    onChange={handelChange}/>
          </div>

          <div className="form-group">
               <label>Type</label>
               <select className="custom-select" name="type" onChange={handelChange}>
                    <option>-- Select type --</option>
                    <option value='hardware'>Hardware</option>
                    <option value='software'>Software</option>
               </select>
          </div>

          <div className="form-group">
               <label>
                    Emergency</label>
               <select className="custom-select" name="emergency" onChange={handelChange}>
                    <option>-- Select emergency type --</option>
                    <option value='urgent'>Urgent</option>
                    <option value='medium'>Medium</option>
                    <option value='normal'>Normal</option>
               </select>
          </div>

          <div className="form-group">
               <label htmlFor="mark">Description</label>
               <textarea
                    className="form-control"
                    name="description"
                    rows="4"
                    onChange={handelChange}></textarea >
          </div>


          <button className="btn-register btn-outline-dark mt-3 mb-5">Create</button>

          </form>
     )
     return (
     <>
     <NavEmp/>
        <div>
          <Layout title="Create new ticket"></Layout>
        </div>
        <div>
               <div className="row"> 
                    <div className="col-md-6 mx-auto">
     
                    { form() }
                    </div>
               </div>
       </div>
    </>

  )
 




}


export default CreateTicket