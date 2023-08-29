import React from 'react'

import Footer from '../../Footer/Footer'

const Myaccount = () => {
    const name=localStorage.getItem('name');
    const email=localStorage.getItem('email');
    const number=localStorage.getItem('number')
  return (
    <div>
      <h1 className='heading-profile'>Profile</h1>
      <div className='userDetails'>
        <h2>Name:{name}</h2>
        <h2>Contact:{number}</h2>
        <h2>Email:{email}</h2>
      </div>
      <Footer/>
    </div>
  )
}

export default Myaccount
