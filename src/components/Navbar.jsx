import React from 'react'
// React Router Dom
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="nav_box">
                <Link to={'/'} className='nav_logo'>MARKT</Link>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar