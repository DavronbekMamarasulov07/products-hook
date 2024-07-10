import { BiSearchAlt } from "react-icons/bi"; 
import React, { useState } from 'react'
import Container from '../container/Container'
import './Nav.css'
import { useFetch } from "../../hooks/useFetch";

const Nav = ({search, setSearch}) => {
  
  return (
    <nav className="nav">
      <Container>
        <div className="nav_content">
            <form className='nav_search_form'>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Enter product name...' className='nav_search_input' />
                <BiSearchAlt />
            </form>
        </div>
      </Container>
    </nav>
  )
}

export default Nav
