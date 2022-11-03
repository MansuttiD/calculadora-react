import React from 'react'

const Del = ({handleDel, children}) => {


  return (
    <div className='Clear' 
         onClick={handleDel}>
        {children}
    </div>
  )
}

export default Del