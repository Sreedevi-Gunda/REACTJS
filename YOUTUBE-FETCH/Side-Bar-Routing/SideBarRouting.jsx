import React from 'react'
import { BrowserRouter, Route ,Routes  } from 'react-router-dom'
import Explore from '../Side-Bar-Pages/Explore'
import Subscription from '../Side-Bar-Pages/Subscription'
import Home from '../Side-Bar-Pages/Home'
import SideNav from '../Side-Nav-Bar-Link/SideNav'

const SideBarRouting = () => {
  return (
    <BrowserRouter>
    <SideNav />
      <Routes>
        <Route path='/explore' element={<Explore />}>Explore</Route>
        <Route path='/subscription' element={<Subscription />}>Subscription</Route>
        <Route path='/home' element={<Home />}>Home</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default SideBarRouting