import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const MasterEditPage = () => {
    const [editForm,setEditForm]=useState({
        name:'',
        phone:'',
        password:'',
        confirmPassword:''
    })
    const editFormHandler=(e)=>{
        setEditForm({...editForm,[e.target.id]:e.target.value})
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(editForm);
    }
  return (
    <div className="col-10 mx-auto mt-4">
    <div className="card p-3">
      <div className="card-header">
        <div className="d-flex justify-content-between">
          <h4>Master Update Dashboards</h4>
          <NavLink to={'/admin/masters'}>
          <button className="btn btn-outline-primary">
            <i className='fas fa-angle-left me-1'></i> Back
          </button>
          </NavLink>
        </div>
        <div className="container">
          <form  onSubmit={submitHandler}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" name='name' placeholder='Enter Name' value={editForm.name} id='name' onChange={editFormHandler} className="form-control border border-1 ps-3 border-secondary" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="number" name='phone' placeholder='Enter Phone Number' value={editForm.phone} id='phone' onChange={editFormHandler}  className="form-control border border-1 ps-3 border-secondary" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" name='password' placeholder='Enter Password' value={editForm.password} id='password' onChange={editFormHandler}  className="form-control border border-1 ps-3 border-secondary" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                  <input type="password" name='password_confirmation' placeholder='Enter Confirm Password' value={editForm.confirmPassword} id='confirmPassword' onChange={editFormHandler}  className="form-control border border-1 ps-3 border-secondary" />
                </div>
              </div>
            </div>
            <div className="text-end">
              <button type='submit' className="btn btn-primary">Confirm Update Master</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MasterEditPage
