import React from 'react'
import Arrow from './Arrow'
import FlagEng from './FlagENG'
import FlagRus from './FlagRUS'
import Logo from './Logo'
import Loader from './Loader'
import Lesson from './Lesson'
import Table from './Table'
import Column from './Column'
import Pen from './Pen'
import TrashCan from './TrashCan'
import Cross from './Cross'
import Photo from './Photo'


export enum EIconType {
  arrow = 'arrow',
  cross = 'cross',
  column = 'column',
  lesson = 'lesson',
  loader = 'loader',
  logo = 'logo',
  pen = 'pen',
  photo = 'photo',
  table = 'table',
  trashCan = 'trashCan',
  ru = 'ru',
  en = 'en',
}

const Icon = (props: {
  type: EIconType,
  height?: number,
  width?: number,
  style?: any,
  fill?: string,
}): JSX.Element => {
  const { type, height, width, style, fill } = props
  switch(type) {

    case EIconType.table:
     return (
      <Table
        fill={fill}
        style={style}
        height={height}
        width={width}
      />
     )

    case EIconType.column:
     return (
      <Column
        fill={fill}
        style={style}
        height={height}
        width={width}
      />
     )

    case EIconType.logo:
     return (
      <Logo
        fill={fill}
        style={style}
        height={height}
        width={width}
      />
     )

    case EIconType.loader:
     return (
      <Loader />
     )

    case EIconType.pen:
     return (
      <Pen
        height={height}
        width={width}
      />
     )

    case EIconType.cross:
     return (
      <Cross
        height={height}
        width={width}
      />
     )

    case EIconType.trashCan:
     return (
      <TrashCan
        height={height}
        width={width}
      />
     )

    case EIconType.ru:
     return (
      <FlagRus />
     )

    case EIconType.en:
     return (
      <FlagEng />
     )

    case EIconType.arrow:
     return (
      <Arrow fill={fill} />
     )

    case EIconType.photo:
     return (
      <Photo
        height={height}
        width={width}
        fill={fill}
      />
     )

    case EIconType.lesson:
     return (
      <Lesson />
     )

    default:
      return (
        <div>404 No LOGO found</div>
      )
  }
}

export default Icon