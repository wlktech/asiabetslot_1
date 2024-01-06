import React from 'react'
import profile from '../../assets/img/team-1.jpg'

const Profile = () => {
  return (
    <div className='text-black'>
      <div class="container">
  <div class="row">
    <div class="col py-5 px-3">
    <div className="card p-3" style={{textAlign:'center'}}>
        <div className="card-header">
          <div className="mx-autotext-center icon icon-lg icon-shape bg-gradient-primary shadow-primary shadow border-radius-xl mt-n4 position-absolute"
            style={{textAlign:'center'}}
            >
            <i class="fa-solid fa-wallet"></i>
            </div>
            <h5 className='mt-5'>Total balance</h5>
            <h6>100000</h6>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Enter balance amount</label>
                <input type="number" name='phone' placeholder='Balance Amount' id='amount' className="form-control border border-1 ps-3 border-secondary" />
            </div>
            <button className="btn btn-sm btn-primary" >Update balance amount</button>

          </div>
        </div>
    </div>
    <div class="col py-5 px-3">
      <div className="card px-5 py-3">
      <div className=" d-flex  align-items-center ">
            <img src={profile} style={{width:'50px',height:'50px',borderRadius:'100%'}} />
            <div className='ms-4'>
                <h5>Admin</h5>
                <p>Account ID - 001</p>
            </div>
      </div>
      </div>
    </div>
  </div>
  <div class="row">
  <div class="col p-3">
    <div className="card p-3" style={{textAlign:'center'}}>
        <div className="card-header">
        <img src={profile} style={{width:'60px',height:'60px',borderRadius:'100%'}} />
            <div className="my-3">
                <input type="file" name=''  className="form-control border border-1 ps-3 border-secondary" />
            </div>
            <button className="btn btn-sm btn-primary" >Update Profile</button>
          </div>
        </div>
    </div>
    <div class="col p-3">
    <div className="card p-3" style={{textAlign:'center'}}>
        <div className="card-header">
        <h5>Basic Info</h5>
            <div className="my-3">
                <input type="text" name='name'  placeholder='Name' className="form-control border border-1 ps-3 border-secondary" />
            </div>
            <div className="my-3">
                <input type="text" name='email'  placeholder='Email' className="form-control border border-1 ps-3 border-secondary" />
            </div>
            <div className="my-3">
                <input type="number" name='phone'  placeholder='Phone Number' className="form-control border border-1 ps-3 border-secondary" />
            </div>
            <div className="my-3">
                <input type="text" name='address'  placeholder='Address' className="form-control border border-1 ps-3 border-secondary" />
            </div>
            <button className="btn btn-sm btn-dark" >Update Account Info</button>
          </div>
        </div>
    </div>
    
  </div>
  <div className="row">
  <div class="col p-3">
    <div className="card p-3" style={{textAlign:'center'}}>
        <div className="card-header">
        <h5>Change Password</h5>
            <div className="my-3">
                <input type="password" name='password'  placeholder='Change Password' style={{width:'50%',margin:'0 auto'}} className=" form-control border border-1 ps-3 border-secondary" />
            </div>
            <h4>Password requirements</h4>
            <p>Please follow this guide for a strong password:</p>
            <ul className='text-black' style={{textAlign:'left'}}>
                <li className='text-black text-sm'>One special characters</li>
                <li className='text-black text-sm'>Min 6 characters</li>
                <li className='text-black text-sm'>One number (2 are recommended)</li>
                <li className='text-black text-sm'>Change it often</li>
            </ul>
          
            <button className="btn btn-sm btn-dark" >Update Password</button>
          </div>
        </div>
    </div>
    <div class="col p-3">
    <div className="card p-3" style={{textAlign:'center'}}>
        <div className="card-header">
        <h5>Add Payment No</h5>
            <div className="my-3">
                <input type="text" name=''  placeholder='Kpay No' className="form-control border border-1 ps-3 border-secondary" />
            </div>
            <div className="my-3">
                <input type="text" name=''  placeholder='CB Pay No' className="form-control border border-1 ps-3 border-secondary" />
            </div>
            <div className="my-3">
                <input type="text" name=''  placeholder='Wave Pay No' className="form-control border border-1 ps-3 border-secondary" />
            </div>
            <div className="my-3">
                <input type="text" name=''  placeholder='AYA Pay No' className="form-control border border-1 ps-3 border-secondary" />
            </div>
            <button className="btn btn-sm btn-dark" >Add Payment No</button>
          </div>
        </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Profile
