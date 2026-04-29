import { Home } from './pages/Home'
import { Project } from './pages/Project'
import './Style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Projects/:id' element={<Project/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
