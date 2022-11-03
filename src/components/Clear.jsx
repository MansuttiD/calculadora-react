import React from 'react'
import '../styles/Clear.css' 


const Clear = ({children, handleClear}) => {

  


  return (
    <div className='Clear' onClick={handleClear}>
        {children}
    </div>
  )
}

export default Clear