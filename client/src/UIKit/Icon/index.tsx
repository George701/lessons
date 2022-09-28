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

type iconType = 'logo' | 'ru' | 'en' | 'arrow' | 'loader' | 'lesson' | 'table' | 'column' | 'pen' | 'trashCan' | 'cross'

const Icon = (props: {
  type: iconType,
  height?: number,
  width?: number,
  style?: any,
  fill?: string,
}): JSX.Element => {
  const { type, height, width, style, fill } = props
  switch(type) {

    case 'table':
     return (
      <Table
        fill={fill}
        style={style}
        height={height}
        width={width}
      />
     )

    case 'column':
     return (
      <Column
        fill={fill}
        style={style}
        height={height}
        width={width}
      />
     )

    case 'logo':
     return (
      <Logo
        fill={fill}
        style={style}
        height={height}
        width={width}
      />
     )

    case 'loader':
     return (
      <Loader />
     )

    case 'pen':
     return (
      <Pen
        height={height}
        width={width}
      />
     )

    case 'cross':
     return (
      <Cross
        height={height}
        width={width}
      />
     )

    case 'trashCan':
     return (
      <TrashCan
        height={height}
        width={width}
      />
     )

    case 'ru':
     return (
      <FlagRus />
     )

    case 'en':
     return (
      <FlagEng />
     )

    case 'arrow':
     return (
      <Arrow fill={fill} />
     )

    case 'lesson':
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