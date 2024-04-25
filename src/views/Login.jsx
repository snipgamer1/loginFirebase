import React, {useEffect, useState} from 'react'
import loginWithEmailPassword from '../functions/login/loginWithEmailPassword';
import codeError from '../functions/login/errors';
import verificar from '../functions/login/verificar';



function Login() {
  
    const [errorMessage, setErrorMessage] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        const {email, password} = e.target.elements;


          const loginError = await loginWithEmailPassword(email.value, password.value);
          if(loginError){
            const errorText = codeError(loginError.code);
            // console.log(loginError.code);
            setErrorMessage(errorText);
            // console.log(errorText); 
            
            //guardar el contador de errores en el local storage
            Number(localStorage.getItem('errorCount')) ? localStorage.setItem('errorCount', Number(localStorage.getItem('errorCount')) + 1) :
            localStorage.setItem('errorCount', 1);
          }
          verificar();
          window.location.href = "/"
    }

    if(localStorage.getItem('errorCount') > 3 ){
      // actualizar la pagina despues de 6 segundos
      setTimeout(() => {
        localStorage.setItem('errorCount', 0);
        window.location.reload();
      }, 6000);
      
      return (
        <div className='flex flex-col w-screen h-screen justify-center items-center ' >
          <h1 className="text-4xl">Demasiados intentos</h1>
          <p>Por favor, espere segundos antes de volver a intentarlo</p>
        </div>
      )
    }
    
  return (
    <div className='flex flex-col w-screen h-screen justify-center items-center ' >
      <h1 className="text-4xl">{"Iniciar sesión"}</h1>
        <form className="flex flex-col  mt-2" onSubmit={handleSubmit} >
        {errorMessage && <span className="text-red-500">{errorMessage}</span>}
            <label htmlFor="email" className='block text-m font-medium leading-6 text-gray-900'>Correo</label>
            <input type="email" name="email" id="email" className='h-12 block w-full rounded-md border-0 py-1.5 pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6'/>
            <label htmlFor="password" className='block text-m font-medium leading-6 text-gray-900'>Contraseña</label>  
            <input type="password" name="password" id="password" className=' h-12 block w-full rounded-md border-0 py-1.5 pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ' />
            <button className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">{  "Acceder" }</button>
        </form>
        {/* <button className='mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={loginWithGoogle} >{ isLogginIn ? "Acceder con Google": "Registarse con Google" }</button> */}
        <button className=' mt-2 underline text-blue-500 hover:text-blue-800' 
         onClick={() => {window.location.href ="/register"}}>{  "Crear una nueva cuenta" }</button>

    </div>
  )
}

export default Login;
