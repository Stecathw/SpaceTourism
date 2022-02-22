import React from 'react'

function Title( { nb, title }) {
  return (
     <div className="title"> 
          <h5><span><strong>{ nb }</strong></span>{ title }</h5>
     </div>
  )
}

export default Title