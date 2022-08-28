import { Outlet, Link, useLocation} from 'react-router-dom'

const Layout = () => {

    const location = useLocation()
    // Usando el nombre de la locacion.pathname comparo con los enlaces para ver si conciden; Y si lo hacen resaltar color
    const urlActual = location.pathname;

    return (
        <div className='md:flex md:min-h-screen'>
            
            <div className='md:w-1/4 bg-blue-900 px-5 py-10 shadow-md'>
                <h2 className='text-4xl font-black text-white text-center' >CRM - CLIENTES</h2>
                <nav className='mt-10'>
                    <Link  className={`${urlActual === '/clientes' ? 'text-yellow-200' : 'text-white'} text-2xl block mt-2 hover:text-yellow-200`}
                        to="/clientes">
                        Clientes</Link>

                    <Link  className={`${urlActual === '/clientes/nuevo' ? 'text-yellow-200' : 'text-white'} text-2xl block mt-2 hover:text-yellow-200`}
                        to="/clientes/nuevo">
                        Nuevo cliente</Link>
                </nav>
            </div>
            
            {/* VER LOGICA */}
            <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                {/* Aqui se inyecta el contenido de las paginas anidadas a este layout */}
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout
