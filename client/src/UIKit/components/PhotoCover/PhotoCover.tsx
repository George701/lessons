import React from 'react'
import Icon, { EIconType } from '../../Icon'
import styled from 'styled-components'

const PhotoWrapper = styled.div`
  height: 120px;
  width: 200px;
  background: ${props => props.theme.palette.lightgray};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.palette.gray};

  svg {
    height: 100px;
  }
`

const PhotoCover = () => {
  return (
    <PhotoWrapper>
      <Icon type={EIconType.photo} />
    </PhotoWrapper>
  )
}

export default PhotoCover