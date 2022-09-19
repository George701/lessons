import React from 'react'
import Arrow from './Arrow'
import FlagEng from './FlagENG'
import FlagRus from './FlagRUS'
import Logo from './Logo'

type iconType = 'logo' | 'rus' | 'eng' | 'arrow'

const Icon = (props: {
  type: iconType,
  height?: number,
  width?: number,
  style?: any,
  fill?: string,
}): JSX.Element => {
  const { type, height, width, style, fill } = props
  switch(type) {
    case 'logo':
     return (
      <Logo
        fill={fill}
        style={style}
        height={height}
        width={width}
      />
     );
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
    default:
      return (
        <div>404 No LOGO found</div>
      )
  }
}

export default Icon