import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const {count} = useSelector(state=>state.counter.value)
  return (
    <div>Count of store :</div>
  )
}

export default Header