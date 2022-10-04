import React from 'react'
import OutlineBtn from './OutlineBtn'
import BasicBtn from './BasicBtn'
import LinkBtn from './LinkBtn'
import ImageBtn from './ImageBtn'

export enum EBtnType {
  outline = 'outline',
  basic = 'basic',
  link = 'link',
  icon = 'icon',
}

export interface IButton {
  children: any,
  onClick?: ()=> void,
}

interface IMainButton extends IButton {
  type?: EBtnType,
  href?: string,
}

const Button = (props: IMainButton) => {
  const { type, children, onClick, href } = props

  switch(type) {
    case EBtnType.outline:
      return (
        <OutlineBtn children={children} onClick={onClick}/>
      )

    case EBtnType.icon:
      return (
        <ImageBtn children={children} onClick={onClick}/>
      )
    case EBtnType.basic:
      return (
        <BasicBtn children={children} onClick={onClick}/>
      )
    case EBtnType.link:
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