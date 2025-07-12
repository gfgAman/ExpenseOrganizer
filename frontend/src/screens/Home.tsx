import Header from '../components/Header'
import Cards from '../components/Cards'
import { useState } from 'react'

const Home = () => {
  const[title,setTitle] = useState("")
  return (
    <div className='bg-linear-to-t from-fuchsia-500 to-black pt-4 pl-4'>
      <Header setTitle = {setTitle}/>
      <Cards title = {title}/>
    </div>
  )
}

export default Home