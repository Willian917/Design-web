import Home from "./paginas/Home"
import Joao from "./paginas/Joao"

import { Routes, Route } from 'react-router-dom'

function Rotas() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Joao' element={<Joao />} />
        </Routes>
    )
}

export default Rotas