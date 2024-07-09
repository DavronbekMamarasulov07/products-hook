import { BiSearchAlt } from "react-icons/bi"; 
import React from 'react'
import Container from '../container/Container'
import './Nav.css'

const Nav = () => {
  return (
    <nav className="nav">
      <Container>
        <div className="nav_content">
            <form className='nav_search_form'>
                <input type="text" placeholder='Enter product name...' className='nav_search_input' />
                <BiSearchAlt />
            </form>
        </div>
      </Container>
    </nav>
  )
}

export default Nav
