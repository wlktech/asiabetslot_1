import React, { useState } from 'react'
import logo from '../../../assets/img/logo/logo.png';
import Create from './Agents/Create';

export default function Agents() {
  let [create, setCreate] = useState(false);
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
                <h5 className="mb-0">Agent List</h5>
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
                    <tr>
                      <td>1</td>
                      <td>
                        <img src={logo} width={50} height={50} alt="" />
                      </td>
                      <td>Agent</td>
                      <td>09123456789</td>
                      <td>Agent</td>
                      <td>12-Dec-2024</td>
                      <td>
                        <a href="" className="btn btn-success py-2 px-2"><i className="fas fa-pen"></i></a>
                        <a href="" className="btn btn-warning py-2 px-2 mx-2"><i className="fas fa-eye"></i></a>
                        <a href="" className="btn btn-danger py-2 px-2"><i className="fas fa-trash"></i></a>
                      </td>
                    </tr>
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
