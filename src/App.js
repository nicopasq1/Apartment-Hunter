import './App.css'
import React from 'react'
import { Route, Routes} from 'react-router'
import Home from './components/Home'
import CitySearch from './components/CitySearch'

function App() {
  return (
      <Routes>
        <Route index element={<CitySearch />} />
        <Route path='/home' element={<Home />} />
      </Routes>
  )
}

export default App