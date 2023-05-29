import React from 'react'
import Age from './Age'

const Name = (props) => {
    // console.log(props)

  return (
    <div>
        <h1>{props.firstName}</h1>
        <Age mohamedAge2={props.MoahmedAge} mohamedJob2={props.mohamedJob} />
        
    </div>
  )
}

export default Name