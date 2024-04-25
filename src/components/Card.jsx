import React, { useEffect, useState } from 'react'
import LeerTodosComents from '../functions/db/Posts/LeerTodosComents'
import CrearComentarios from '../functions/db/Posts/CrearComentarios';

function Card({user}) {
  const [comentarios, setComentarios] = useState([]);

  const LeerComments = async () => {
    const sss = await LeerTodosComents()
    setComentarios(sss)
    console.log(sss)
  }

  useEffect(() => {
    LeerComments()
  }, [])
  const handleSubirComentario = async () => {
    const comentario = document.querySelector('input').value
    console.log(user.uid, comentario, user.email)
    CrearComentarios(user.uid, comentario, user.email)
  }
  return (
    <div>
    <input type="text" className="border-2 border-gray-500" placeholder="Escribe un comentario" />

    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'onClick={handleSubirComentario} >Agregar comentarios</button>
      <table className="table-auto">
        <thead>
            <tr>
                <th className="px-4 py-2">comentario</th>
                <th className="px-4 py-2">Acciones</th>
            </tr>
        </thead>
        <tbody>
            {/* {comentarios.map((comentario, index) => (
                <tr key={index}>
                    <td className="border px-4 py-2"></td>
                </tr>
            ))} */}
        </tbody>
    </table>


    </div>
  )
}

export default Card
