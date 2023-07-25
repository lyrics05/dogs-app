import React, { useEffect } from 'react'
import { getDogs } from '../../redux/actions/actions'
import { useDispatch } from 'react-redux'
import Card from '../Card/Card'
import Search from '../Search/Search'
const Home = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getDogs())
    },[])
    
  return (
    <>
    <Search/>
     <Card/>
    </>
  )
}

export default Home