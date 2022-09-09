import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <h1>Lessons</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar