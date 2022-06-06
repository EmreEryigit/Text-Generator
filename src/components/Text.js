import React from 'react'

function Text(props) {
    let paraArray = []
    for(let i = 0; i < props.para; i++) {
        paraArray.push(i)
    }
    console.log(paraArray)

    console.log(props.para)
  
    
  return (
    <div>
        {props.text}
    </div>
  )
}

export default Text