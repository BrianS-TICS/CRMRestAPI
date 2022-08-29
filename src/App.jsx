import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout'

import Inicio from './pages/Inicio';

import NuevoCliente from './pages/NuevoCliente';
import EditarClientes from './pages/EditarClientes';
import VerCliente from './pages/VerCliente';

function App() {

  return (
    <div className="bg-slate-200">
      <BrowserRouter>
        <Routes>
          <Route path='/clientes' element={<Layout />}> //* Grupo de rutas

            //* Rutas individuales
            <Route index element={<Inicio />} />
            <Route path='nuevo' element={<NuevoCliente />} />

            //* :id = sirve como placeholder y escuchar por cada dato a colocar
            <Route path='editar:id' element={<EditarClientes />} />
            <Route path=':id' element={<VerCliente />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
