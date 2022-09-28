import React from 'react'
import OutlineBtn from './OutlineBtn'
import BasicBtn from './BasicBtn'

type btnType = 'outline' | 'basic'

const Button = (props: {type?: btnType, children: any, onClick: ()=> void}) => {
  const { type, children, onClick } = props

  switch(type) {
    case 'outline':
      return (
        <OutlineBtn children={children} onClick={onClick}/>
      )
    case 'basic':
      return (
        <BasicBtn children={children} onClick={onClick}/>
      )
    default:
      return (
        <BasicBtn children={children} onClick={onClick}/>
      )
  }
}

export default Button