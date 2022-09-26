import React from 'react'
import Arrow from './Arrow'
import FlagEng from './FlagENG'
import FlagRus from './FlagRUS'
import Logo from './Logo'
import Loader from './Loader'
import Lesson from './Lesson'
import Table from './Table'
import Column from './Column'

type iconType = 'logo' | 'rus' | 'eng' | 'arrow' | 'loader' | 'lesson' | 'table' | 'column'

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

    case 'rus':
     return (
      <FlagRus />
     )

    case 'eng':
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