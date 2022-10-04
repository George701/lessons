import React from 'react'
import Icon, { EIconType } from '../../Icon'
import styled from 'styled-components'

const CoverWrapper = styled.div`
  background: ${props => props.theme.palette.gray};
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;

  svg {
    height: 100px;
    width: 100px;
    fill: ${props => props.theme.palette.black}
  }
`

const LessonCover = (props: {style?: any}) => {
  const { style } = props
  return (
    <CoverWrapper style={style}>
      <Icon type={EIconType.lesson} />
    </CoverWrapper>
  )
}

export default LessonCover