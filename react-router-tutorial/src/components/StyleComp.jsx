
import React from 'react'

//  Question 8: Passing Dynamically Generated Styles via Props
// Scenario:
// Your styles depend on dynamic data. How would you dynamically pass inline styles via 
// props


const Box = ({styleProp ,value})=>{
    return <div style={{[styleProp]:value}}>Dynamic style</div>
}

const StyleComp = () => {
  return (
    <Box styleProp="backgroundColor" value="pink"/>
  )
}

export default StyleComp