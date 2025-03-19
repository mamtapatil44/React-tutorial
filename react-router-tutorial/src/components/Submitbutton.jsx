
import React from 'react'

const Submitbutton = ({disabled}) => {
  return (
    <div><p>disabled:{disabled}</p><button className='bg-amber-400 p-2 rounded-lg' disabled={disabled}>Submit</button></div>
  )
}

export default Submitbutton