import React, { useState } from 'react'
import logo from '../../../assets/img/logo/logo.png';
import Create from './Masters/Create';
import { NavLink } from 'react-router-dom';

export default function Masters() {
  let [create, setCreate] = useState(false);
  const [masters,setMasters]=useState([
    {id:1,profile:logo,name:"Master",phone:'09123456',role:'Master',startDate:'12-Dec-2024'},
  ])
  return (
    <>
      <div className="container-fluid py-4">
        <div className="row">
        {!create && (
          <div className="col-12">
            <div className="card p-3">
              {/* Card header */}
              <div className="card-header">
                <div className="d-flex justify-content-between">
                <h5 className="mb-0">Master List</h5>
                <button className="btn btn-sm btn-primary" onClick={(e)=>setCreate(true)}><i className="fas fa-plus me-2"></i>Create</button>
                </div>
                {/* <p className="text-sm mb-0">
                  A lightweight, extendable, dependency-free javascript HTML table
                  plugin.
                </p> */}
              </div>
              <div className="table-responsive">
                <table className="table table-flush" id="datatable-basic">
                  <thead className="thead-light text-center">
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        No
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Profile
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Name
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Phone
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Role
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Start date
                      </th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    {masters.map((master)=>{
                      return <tr>
                      <td>{master.id}</td>
                      <td>
                        <img src={master.profile} width={50} height={50} alt="" />
                      </td>
                      <td>{master.name}</td>
                      <td>{master.phone}</td>
                      <td>{master.role}</td>
                      <td>{master.startDate}</td>
                      <td>
                        <NavLink to={`/admin/masters/${master.id}/edit`} className="btn btn-success py-2 px-2"><i className="fas fa-pen"></i></NavLink>
                        <NavLink to={`/admin/masters/${master.id}`} className="btn btn-warning py-2 px-2 mx-2"><i className="fas fa-eye"></i></NavLink>
                        <a href="" className="btn btn-danger py-2 px-2"><i className="fas fa-trash"></i></a>
                      </td>
                    </tr>
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          )}
          {create && (
            <Create setCreate={setCreate} />
          )}
        </div>
      </div>
    </>
  )
}
