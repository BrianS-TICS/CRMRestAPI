import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const VerCliente = () => {

    const { id } = useParams()
    
    const [cliente, setCliente] = useState([]);
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        const obtenerClienteAPI = async () => {

            //? cabia a estado contrario usando =!
            setCargando(!cargando)
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                setCliente(resultado)
            } catch (error) {
                console.log(error);
            }

            setTimeout(() => {
                setCargando(false)
            }, 100);
        }
        obtenerClienteAPI();
    }, [])


    return (

        // Inicio la secuencia de validaciones con este ternario
        cargando ? <Spinner /> : (

            Object.keys(cliente).length === 0 ? <p className='text-4xl font-bold'>No hay resultados</p> : (

                <div>

                    <>
                        <h1 className='font-black text-4xl text-black '>Ver cliente {cliente.nombre}</h1>
                        <p className='mt-3 '>Informacion del cliente</p>

                        {/* cliente */}
                        <p
                            className='text-4xl mt-5 text-gray-600'>
                            <span className='text-gray-800 font-bold'>
                                Cliente:
                            </span> {cliente.nombre}
                        </p>
                        {/* Email */}
                        <p
                            className='text-3xl mt-5 text-gray-600'>
                            <span className='text-gray-800 font-bold'>
                                Email:
                            </span> {cliente.email}
                        </p>

                        {/* Telefono */}
                        {cliente.telefono && (
                            <p
                                className='text-3xl mt-5 text-gray-600'>
                                <span className='text-gray-800 font-bold'>
                                    Telefono:
                                </span> {cliente.telefono}
                            </p>
                        )}

                        {/* Empresa */}
                        <p
                            className='text-3xl mt-5 text-gray-600'>
                            <span className='text-gray-800 font-bold'>
                                Empresa:
                            </span> {cliente.empresa}
                        </p>

                        {/* Notas */}
                        {cliente.notas && (
                            <p
                                className='text-3xl mt-5 text-gray-600'>
                                <span className='text-gray-800 font-bold'>
                                    Notas:
                                </span> {cliente.notas}
                            </p>
                        )}
                    </>

                </div>
            )

        )
    )

}

export default VerCliente