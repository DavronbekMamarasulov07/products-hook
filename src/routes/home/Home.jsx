import React, { useState } from 'react'
import Nav from '../../components/nav/Nav'
import Main from '../../components/main/Main'
import { useFetch } from '../../hooks/useFetch'
import Hero from '../../components/hero/Hero'

const Home = () => {
  const [search, setSearch] = useState("")

  const [data, loading] = useFetch(`/products/search?q=${search}`)
  return (
    <div>
        <Nav search={search} setSearch={setSearch}/>
        <Hero/>
        <Main data={data} loading={loading}/>
    </div>
  )
}

export default Home
