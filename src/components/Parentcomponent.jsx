import React,{useState} from 'react'
import ChildComponent from './ChildComponent'

const Parentcomponent = () => {
    const [showModal,setShowModal] = useState(false)
    console.log(showModal);
  return (
    <div className='parent'>
        <h1 >Parent Component</h1>
      <ChildComponent setShowModal={setShowModal} />
      {showModal && (<div className='child'>
        <h1>modal content</h1>
        <p>this is the modal content</p>
      </div>)}
    </div>
  )
}

export default Parentcomponent
