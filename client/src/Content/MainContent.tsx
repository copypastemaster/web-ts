import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Tabs/Home/Home'
import Deleted from '../Tabs/Deleted/Deleted'
import Finished from '../Tabs/Finished/Finished'

const MainContent: React.FC = () => {
  return (
      <Routes>
        <Route path='/' 
               element={<Home />} />

        <Route path='/finished'
               element={<Finished />} />
               
        <Route path='/deleted'
               element={<Deleted />} />
      </Routes>
  )
}

export default MainContent