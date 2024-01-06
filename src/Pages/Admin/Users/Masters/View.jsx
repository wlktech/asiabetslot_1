import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const MasterViewPage = () => {
    const [master,setMaster]=useState({
        id:1,
        name:'Master',
        phone:'09123456',
        role:'Master',
        createdDate:'2024-01-05 03:01:47',
        updatedDate:'2024-01-05 03:01:47'
    })
  return (
    <div className="col-12 col-sm-7 mt-4 mx-auto">
      <div className="card p-3">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <h4>Master Details</h4>
            <NavLink to={'/admin/masters'}>
            <button className="btn btn-outline-primary" >
              <i className='fas fa-angle-left me-1'></i> Back
            </button>
            </NavLink>
          </div>
          <div className="container">
          <table class="table">
  <tbody>
    <tr>
      <th scope="row">ID</th>
      <td>{master.id}</td>
    </tr>
    <tr>
      <th scope="row">Name</th>
      <td>{master.name}</td>
    </tr>
    <tr>
      <th scope="row">Phone</th>
      <td>{master.phone}</td>
    </tr>
    <tr>
      <th scope="row">Role</th>
      <td>{master.role}</td>
    </tr>
    <tr>
      <th scope="row">Created Date</th>
      <td>{master.createdDate}</td>
    </tr>
    <tr>
      <th scope="row">Updated Date</th>
      <td>{master.updatedDate}</td>
    </tr>
   
  </tbody>
</table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MasterViewPage
