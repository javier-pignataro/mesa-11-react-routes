import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contacto'
import Navbar from './components/Navbar'
import { routes } from './utils/routes'

function App() {

      return (
            <>
                  <div>
                        <h1>Mas que solo bebidas, festejemos el encuentro.</h1> 
                  </div>
                  <Navbar/>
                  <Routes>
                        <Route path={routes.home} element={<Home/>}/>
                        <Route path={routes.contact} element={<Contact/>}/>
                        <Route path='*' element={<h1>Página no encontrada. ERROR 404</h1>}/>
                  </Routes>
            </>
      )

}

export default App
