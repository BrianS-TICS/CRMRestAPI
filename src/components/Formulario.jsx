import React from 'react'
import { Formik, Form, Field } from 'formik'
import Alerta from './Alerta'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
    const navigate = useNavigate()

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
            .min(3, 'El nombre debe ser mas largo')
            .max(20, 'El nombre es Demaciado largo')
            .required('El nombre del cliente es obligatorio'),
        empresa: Yup.string()
            .required('El nombre de la empresa es obligatoria'),
        email: Yup.string()
            .email('El email no es valido')
            .required('El email es obligatorio'),
        telefono: Yup.number().typeError('El telefono debe contener solo numeros')
            .positive('Numero no valido')
            .integer('Numero no valido'),
    })

    const handleSubmit = async (valores) => {
        try {
            const url = 'http://localhost:4000/clientes'

            const respuesta = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(respuesta);
            const resultado = await respuesta.json()

            console.log(resultado);
            navigate('/clientes')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='bg-white mt-10 p-5 rounded-md shadow-sm md:w-3/4 mx-auto'>
            <h1 className='text-gray-700 font-bold text-2xl uppercase text-center p-10'>Agregar cliente</h1>

            <Formik
                initialValues={{
                    nombre: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: '',
                }}
                onSubmit={ async (values, {resetForm}) => {
                    await handleSubmit(values)
                    resetForm()
                }}
                validationSchema={nuevoClienteSchema}
            >
                {({ errors, touched }) => {

                    return (
                        <Form>
                            <div className='mb-4'>
                                <label
                                    className='text-xl text-gray-800 font-semibold'
                                    htmlFor="nombre"
                                >Nombre:</label>
                                <Field
                                    id="nombre"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-slate-50 rounded-md"
                                    name="nombre"
                                    placeholder="Nombre de cliente"
                                />
                            </div>

                            {errors.nombre && touched.nombre ? (
                                <Alerta>{errors.nombre}</Alerta>
                            ) : null}

                            <div className='mb-4'>
                                <label
                                    className='text-xl text-gray-800 font-semibold'
                                    htmlFor="empresa"
                                >Empresa:</label>
                                <Field
                                    id="empresa"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-slate-50 rounded-md"
                                    name="empresa"
                                    placeholder="Empresa del cliente"
                                />
                            </div>

                            {errors.empresa && touched.empresa ? (
                                <Alerta>{errors.empresa}</Alerta>
                            ) : null}

                            <div className='mb-4'>
                                <label
                                    className='text-xl text-gray-800 font-semibold'
                                    htmlFor="email"
                                >E-mail:</label>
                                <Field
                                    id="email"
                                    type="email"
                                    className="mt-2 block w-full p-3 bg-slate-50 rounded-md"
                                    name="email"
                                    placeholder="Email del cliente"
                                />
                            </div>

                            {errors.email && touched.email ? (
                                <Alerta>{errors.email}</Alerta>
                            ) : null}

                            <div className='mb-4'>
                                <label
                                    className='text-xl text-gray-800 font-semibold'
                                    htmlFor="telefono"
                                >Teléfono:</label>
                                <Field
                                    id="telefono"
                                    type="tel"
                                    className="mt-2 block w-full p-3 bg-slate-50 rounded-md"
                                    name="telefono"
                                    placeholder="Telefono del cliente"
                                />
                            </div>

                            {errors.telefono && touched.telefono ? (
                                <Alerta>{errors.telefono}</Alerta>
                            ) : null}

                            <div className='mb-4'>
                                <label
                                    className='text-xl text-gray-800 font-semibold'
                                    htmlFor="notas"
                                >Notas:</label>
                                <Field
                                    as='textarea'
                                    id="notas"
                                    type="text"
                                    className="mt-2 block w-full p-3 bg-slate-50 rounded-md h-40"
                                    name="notas"
                                    placeholder="Notas del cliente"
                                />

                                <input
                                    type='submit'
                                    value='Agregar cliente'
                                    className='mt-5 w-full uppercase bg-yellow-200 p-3 rounded-md font-black text-xl shadow-md text-gray-800 cursor-pointer hover:bg-yellow-300'
                                />
                            </div>

                            {errors.notas && touched.notas ? (
                                <Alerta>{errors.notas}</Alerta>
                            ) : null}

                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default Formulario
