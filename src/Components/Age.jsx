import React from 'react'
import Job from './Job'

const Age = (props) => {
    // console.log(props)
  return (
    <div>
        <h3>{props.mohamedAge2}</h3>
        <Job mohamedJob3={props.mohamedJob2}/>
    </div>
  )
}

export default Age