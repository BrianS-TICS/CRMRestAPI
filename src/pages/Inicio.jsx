import { useEffect, useState } from 'react'
import Cliente from '../components/Cliente'
const Inicio = () => {

    const [clientes, setClientes] = useState([])

    //! Solo se ejecuta una vez el useEffect
    useEffect(() => {
        const obtenerClientesApi = async () => {
            try {
                const url = 'http://localhost:4000/clientes';
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                setClientes(resultado);

            } catch (error) {
                console.log(error);
            }
        }

        obtenerClientesApi()
    }, [])

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
                        />
                    ))}
                </tbody>
            </table>

        </>
    )
}

export default Inicio