import React from 'react'
import Icon from '../../Icon'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoaderWrapper = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${props => props.theme.palette.blue};
    height: 40px;
    width: 40px;
    animation: ${rotate} .7s linear infinite;
  }
`

const Loader = () => {
  return (
    <LoaderWrapper>
      <Icon type='loader' />
    </LoaderWrapper>
  )
}

export default Loader