import React from 'react'

const ChildComponent = ({setShowModal}) => {
  return (
    <div className='child'>
      <button onClick={()=>setShowModal(true)} >Show Modal</button>
    </div>
  )
}

export default ChildComponent
