import React from 'react'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Contact from './components/Contact'
import ToDoList from './components/ToDoList'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Material from './components/Material'
const App = () => {
  return (
    <div>
<Router>
<div>
      <Material/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/ToDoList' element={<ToDoList />} />
    </Routes>
    </Router>
    </div>
  )
}

export default App