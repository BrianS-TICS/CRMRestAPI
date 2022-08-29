import React from 'react'

const Alerta = ({children}) => {
    return (
        <div className='text-center bg-red-500 text-white py-3 rounded-md font-bold uppercase my-4'>
            {children}
        </div>
    )
}

export default Alerta
