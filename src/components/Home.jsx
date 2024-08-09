import Hero from './Hero'
import Menu_list from './food/Menu_list'
import { useState } from 'react'



function Home() {
  const [category, setCategory] = useState('All')
   return (
   <>
    <Hero />
    <Menu_list category={category} setCategory={setCategory}/>
   </>
  )
}

export default Home