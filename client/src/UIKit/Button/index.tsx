import React from 'react'
import OutlineBtn from './OutlineBtn'
import BasicBtn from './BasicBtn'
import LinkBtn from './LinkBtn'
import ImageBtn from './ImageBtn'

type btnType = 'outline' | 'basic' | 'link' | 'icon'

export interface IButton {
  children: any,
  onClick?: ()=> void,
}

interface IMainButton extends IButton {
  type?: btnType,
  href?: string,
}

const Button = (props: IMainButton) => {
  const { type, children, onClick, href } = props

  switch(type) {
    case 'outline':
      return (
        <OutlineBtn children={children} onClick={onClick}/>
      )

    case 'icon':
      return (
        <ImageBtn children={children} onClick={onClick}/>
      )
    case 'basic':
      return (
        <BasicBtn children={children} onClick={onClick}/>
      )
    case 'link':
      return (
        <LinkBtn children={children} href={href}/>
      )
    default:
      return (
        <BasicBtn children={children} onClick={onClick}/>
      )
  }
}

export default Button