import React from 'react'
import './TattoPost.css'

function TattoPost({tatto,ontattoClose}) {
  return (
    <div className='tatto-post'>
        <div className='tatto-post-bg' onClick={ontattoClose}/>
        <div className="tatto-post-content">
            <img src={tatto.URLL}/>
            <h4>{tatto.Name}</h4>
        </div>
    </div>
  )
}

export default TattoPost