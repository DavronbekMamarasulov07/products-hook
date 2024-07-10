import React, { useState } from 'react'
import Nav from '../../components/nav/Nav'
// import { useFetch } from '../../hooks/useFetch'
import AllProducts from '../../components/all_pproducts/AllProducts'
import Recipes from '../../components/recipes/Recipes'
// import Hero from '../../components/hero/Hero'

const Home = () => {

  const [search, setSearch] = useState("")

  
 
  return (
    <div>
        <Nav search={search} setSearch={setSearch}/>
        {/* <Hero/> */}
        <AllProducts/>
        <Recipes />
    </div>
  )
}

export default Home
