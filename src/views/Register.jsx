import React from 'react'
import { Navigate, redirect } from 'react-router-dom'
import registerUser  from '../functions/login/registerUser';
import codeError from '../functions/login/errors';
import { auth } from '../firebase/credenciales';

export default function Register() {
    const [errorMessage, setErrorMessage] = React.useState(null);

    const userUID = () => {
        auth.onAuthStateChanged((user) => {
          CreateUser(user.uid, {correo: email.value});
        });
      }


    async function handleSubmit(e) {
        e.preventDefault();
        const {email, password} = e.target.elements;

          const loginError = await registerUser(email.value, password.value);
          //si loginError es true, entonces hay un error
          if(!loginError){
            const errorText = codeError(loginError.code);
            setErrorMessage(errorText);      
            }else{
            await userUID();
            window.location.href = "/"
            }

       
    }

  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center ' >
    <h1 className="text-4xl"> "Registrarse" </h1>
      <form className="flex flex-col  mt-2" onSubmit={handleSubmit} >
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
          <label htmlFor="email" className='block text-m font-medium leading-6 text-gray-900'>Correo</label>
          <input type="email" name="email" id="email" className='h-12 block w-full rounded-md border-0 py-1.5 pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6'/>
          <label htmlFor="password" className='block text-m font-medium leading-6 text-gray-900'>Contraseña</label>  
          <input type="password" name="password" id="password" className=' h-12 block w-full rounded-md border-0 py-1.5 pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ' />
          <button className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">"Registarse" </button>
      </form>
      {/* <button className='mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={loginWithGoogle} >{ isLogginIn ? "Acceder con Google": "Registarse con Google" }</button> */}
      <button className=' mt-2 underline text-blue-500 hover:text-blue-800' 
       onClick={()=>{window.location.href ="/login" } }> Acceder </button>

  </div>
  )
}
