import React from 'react'

function Card({pendientes}) {
  return (
    <div>
      <table className="table-auto">
        <thead>
            <tr>
                <th className="px-4 py-2">Correo</th>
                <th className="px-4 py-2">Acciones</th>
            </tr>
        </thead>
        <tbody>
            {pendientes.map((pendiente, index) => (
                <tr key={index}>
                    <td className="border px-4 py-2">{pendiente.correo}</td>
                    <td className="border px-4 py-2"></td>
                </tr>
            ))}
        </tbody>
    </table>


    </div>
  )
}

export default Card
