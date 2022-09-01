import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

const Cliente = ({cliente, hanldeEliminar}) => {
    const { nombre, empresa, email, telefono, notas, id} = cliente;
    const navegate = useNavigate();

    return (
        <tr className='border-b hover:bg-slate-100'>
            <td className='p-3'>{nombre}</td>
            <td className='p-3'> 
                <p> <span className='text-gray-800 font-bold'>Email:</span> {email}</p>
                <p> <span className='text-gray-800 font-bold'>Telefono:</span> {telefono}</p>
            </td>
            <td className='p-3'>{empresa}</td>
            <td className='p-3'>

                <button
                    onClick={()=> navegate(`/clientes/${id}`) }
                    className='bg-green-400 block w-full py-2 mb-2 text-white font-bold cursor-pointer rounded-sm hover:bg-green-500' 
                    type='button'>
                    Ver
                </button>

                <button
                    className='bg-blue-400 block w-full py-2 mb-2 text-white font-bold cursor-pointer rounded-sm hover:bg-blue-500' 
                    type='button' onClick={ () => navegate(`/clientes/editar/${id}`)} >
                    Editar
                </button>

                <button 
                    className='bg-red-400 block w-full py-2 text-white font-bold cursor-pointer rounded-sm hover:bg-red-500' 
                    type='button' onClick={() => hanldeEliminar(id)}>
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Cliente
