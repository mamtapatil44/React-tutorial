
import React from 'react'


const Alert = ()=>{

    return <div className='alert'>This is an alert!</div>
}

const Success = ()=>{

    return <div className='success'>The operation was successful</div>
}

const Wrapper  = ({Component})=>{
    return <Component/>

}


function Multilpe() {
  return (
    <div>
        <Wrapper Component={Alert} />
        <Wrapper Component={Success} />
    </div>
  )
}

export default Multilpe





