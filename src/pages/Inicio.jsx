import { useEffect, useState } from 'react'
import Cliente from '../components/Cliente'
const Inicio = () => {

    const [clientes, setClientes] = useState([])

    //! Solo se ejecuta una vez el useEffect
    useEffect(() => {
        const obtenerClientesApi = async () => {
            try {
                const url = import.meta.env.VITE_API_URL;
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                setClientes(resultado);

            } catch (error) {
                console.log(error);
            }
        }

        obtenerClientesApi()
    }, [])

    const hanldeEliminar = async id => {
        const confirmar = confirm('Deseas eliminar este cliente?');
        if (confirmar) {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                const respuesta = await fetch(url, {
                    method: 'DELETE'
                })

                await respuesta.json();
                
                //? Modifico el estado para actualizar clientes en dom
                const arrayClientes = clientes.filter( clientes => clientes.id !== id)
                setClientes(arrayClientes);

            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <h1 className='font-black text-4xl text-black '>Clientes</h1>
            <p className='mt-3 '>Adminstra tus clientes</p>

            <table className='w-full mt-5 table-auto shadow-sm bg-white'>
                <thead className='bg-blue-800 text-white'>
                    <tr>
                        <th className='p-2'>Nombre</th>
                        <th className='p-2'>Contacto</th>
                        <th className='p-2'>Empresa</th>
                        <th className='p-2'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map( cliente => (
                        <Cliente
                            key={cliente.id}
                            cliente={cliente}
                            hanldeEliminar = {hanldeEliminar}
                        />
                    ))}
                </tbody>
            </table>

        </>
    )
}

export default Inicio