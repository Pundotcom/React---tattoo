import React from 'react'

function Tattoitem({tatto , ontattoClick}) {
  return (
    <div className='tatto-img'>
          <img src={tatto.URLL} onClick={() => {ontattoClick(tatto)}}></img>
          <h4>{tatto.Name}</h4>
    </div>
  )
}

export default Tattoitem