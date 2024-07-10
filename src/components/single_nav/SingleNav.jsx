import React from 'react'
import Container from '../container/Container'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { FaRegUserCircle } from 'react-icons/fa'

const SingleNav = () => {
  return (
   <nav className='nav'>
       <Container>
        <div className="nav_content">
            <img src={logo} alt="logo" className="nav_logo" />
            <Link to="/"><h2 className="nav_title">Home </h2></Link>
            <div className="button_items">
                <button className="basket_btn"><BsFillBasket2Fill /></button>
                <button  className="user_btn"><FaRegUserCircle /></button>
            </div>
        </div>
      </Container>
   </nav>
  )
}

export default SingleNav
