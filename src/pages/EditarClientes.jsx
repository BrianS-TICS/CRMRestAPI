import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' //Para leer id de la url
import Formulario from '../components/Formulario'

const EditarClientes = () => {

    const { id } = useParams()

    const [cliente, setCliente] = useState([]);
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        const obtenerClienteAPI = async () => {

            //? cabia a estado contrario usando =!
            setCargando(!cargando)
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                setCliente(resultado)
            } catch (error) {
                console.log(error);
            }

            setTimeout(() => {
                setCargando(false)
            }, 1000);
        }
        obtenerClienteAPI();
    }, [])


    return (
        <>
            <h1 className='font-black text-4xl text-black '>Editar cliente</h1>
            <p className='mt-3 '>Utiliza el formulario para editar los datos del cliente</p>
            {cliente?.nombre ? (
                <Formulario
                    cliente={cliente}
                    cargando={cargando}
                />
                ): <p> Cliente no encontrado </p>
            }
        </>
    )
}

            export default EditarClientes
