
import React from 'react'

const greet = () => {
    const name = "Garv"
  return (
    <div>Hello,{name}</div>
  )
}



const usercard = ({name, role}) => {
  return (
    <div className =  "card">
       <h1>{name} </h1>
       <p>{role} </p>
       </div>
  )
}

export {greet , usercard}