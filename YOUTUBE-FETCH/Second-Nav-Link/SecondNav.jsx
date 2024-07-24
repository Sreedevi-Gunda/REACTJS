import React from 'react'
import { Link } from 'react-router-dom'

const SecondNav = () => {
  return (
    <>
        {/* <!-- top-2nd navbar --> */}
        
    <div class="filters">
        <Link to="/"><button class="hover active1">All</button></Link>
        <Link to="/css"><button class="hover active11">Css</button></Link>
        <Link to="/webdevelopment"><button class="hover active2">Web Development</button></Link>
        <button class="hover active3">Python</button>
        <button class="hover active4">Entertainment</button>
        <button class="hover active5">Marvel</button>
        <button class="hover active6">Javascript</button>
        <button class="hover active7">Artificial intelligence</button>
        <button class="hover active8">Machine learning</button>
        <button class="hover active9">Trending</button>
    </div>

    </>
  )
}

export default SecondNav