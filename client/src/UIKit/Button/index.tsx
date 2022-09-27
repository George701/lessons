import React from 'react'
import OutlineBtn from './OutlineBtn'

type btnType = 'outline' | 'rus'

const Button = (props: {type: btnType, children: any, onClick: ()=> void}) => {
  const { type, children, onClick } = props

  switch(type) {
    case 'outline':
      return (
        <OutlineBtn children={children} onClick={onClick}/>
      )
    default:
      return (
        <button>btn</button>
      )
  }
}

export default Button