import { BsFillBasket2Fill } from "react-icons/bs"; 
import { FaRegUserCircle } from "react-icons/fa"; 
import { BiSearchAlt } from "react-icons/bi"; 
import Container from '../container/Container'
import logo from '../../images/logo.png'
import './Nav.css'

const Nav = ({search, setSearch}) => {
  
  return (
    <nav className="nav">
      <Container>
        <div className="nav_content">
            <img src={logo} alt="logo" className="nav_logo" />
            <form className='nav_search_form'>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Enter product name...' className='nav_search_input' />
                <BiSearchAlt />
            </form>
            <div className="button_items">
                <button className="basket_btn"><BsFillBasket2Fill /></button>
                <button  className="user_btn"><FaRegUserCircle /></button>
            </div>
        </div>
      </Container>
    </nav>
  )
}

export default Nav
