import React from 'react'
import logout from '../functions/login/logout';


function Navbar({user}) {

  return (
    <div className=' w-full flex flex-row justify-between px-10 mb-5 p-2 bg-gray-400' >
    <p className='self-center text-red-500 '>{user?.email}</p>
    <button onClick={logout} className=' outline outline-offset-2 outline-pink-500 bg-red-300 rounded p-2' >Cerrar sesion</button>
      
    </div>
  )
}

export default Navbar
