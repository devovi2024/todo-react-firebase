import React from 'react'

const Main = (props) => {
  return (
    <div className={props.className}>
        {props.children}
      
    </div>
  )
}

export default Main
