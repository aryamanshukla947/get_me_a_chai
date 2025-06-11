import React from 'react'

const navbar = () => {
  return (
    <nav className='bg-black text-white flex justify-between px-4'>
      <div className='logo font-bold'>
        Get Me a Chai
      </div>
      <ul className='flex gap-4' >
         <li>Home</li>
        <li>About</li>
        <li>Projects</li>
       <li>SignUp</li>
       <li>Login</li>
      </ul>
    </nav>
  )
}

export default navbar
