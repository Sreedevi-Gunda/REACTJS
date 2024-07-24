import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SecondNav from '../Second-Nav-Link/SecondNav'
import All from '../Second-Nav-Pages/All'
import Css from '../Second-Nav-Pages/Css'
import WebDevelopment from '../Second-Nav-Pages/WebDevelopment'

const Routing = () => {
  return (
    <BrowserRouter>
    <SecondNav />
    <Routes>
        <Route path='/' element={<All />}>All</Route>
        <Route path='/css' element={<Css />}>Css</Route>
        <Route path='/webdevelopment' element={<WebDevelopment />}>WebDevelopment</Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing