import React from 'react';

export default function Create({ setCreate }) {
  return (
    <div className="col-12">
      <div className="card p-3">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <h4>Create Agent</h4>
            <button className="btn btn-outline-primary" onClick={() => setCreate(false)}>
              <i className='fas fa-angle-left me-1'></i> Back
            </button>
          </div>
          <div className="container">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name='name' placeholder='Enter Name' id='name' className="form-control border border-1 ps-3 border-secondary" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="number" name='phone' placeholder='Enter Phone Number' id='phone' className="form-control border border-1 ps-3 border-secondary" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' placeholder='Enter Password' id='password' className="form-control border border-1 ps-3 border-secondary" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" name='password_confirmation' placeholder='Enter Confirm Password' id='cpassword' className="form-control border border-1 ps-3 border-secondary" />
                  </div>
                </div>
              </div>
              <div className="text-end">
                <button className="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
