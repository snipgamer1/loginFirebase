import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import ReadAllUsers from '../functions/db/ReadAllUsers';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/credenciales';

function Home() {
  const [user, setUser] = useState(null)

  useEffect( () => {
     onAuthStateChanged(auth, (user) => {
      if (user ) {
        
        setUser(user)
      }else{
        window.location.href = '/login'
      }
    })

         

  }, [user])


  const [pendientes, setPendientes] = useState([]);
  
  const UpdateUsers = () => {
    ReadAllUsers().then((querySnapshot) => {
      let pendientes = [];
      querySnapshot.forEach((doc) => {
        pendientes.push(doc.data());
      });
      setPendientes(pendientes);
    });
  };
  
  useEffect(() => {
    UpdateUsers();
  }, [])

  return (
    <div >
    <Navbar user={user}/>
    <div className='flex flex-col items-center justify-center h-full' >
    <Card pendientes={pendientes}/>

    </div>
    </div>
  )
}

export default Home;
