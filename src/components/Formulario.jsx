import React from 'react'
import {Formik, Form, Field} from 'formik'

const Formulario = () => {
    return (
        <div className='bg-white mt-10 p-5 rounded-md shadow-sm md:w-3/4 mx-auto'>
            <h1 className='text-gray-700 font-bold text-2xl uppercase text-center p-10'>Agregar cliente</h1>
            
            <Formik>
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

                </Form>
            </Formik>
        </div>
    )
}

export default Formulario
