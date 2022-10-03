import React from 'react'
import styled from 'styled-components'
import { IButton } from '.'

const ImageButton = styled.button`
  padding: .5rem;
  background: transparent;
  border: 3px solid ${props => props.theme.palette.lightgray};
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease-out;

  svg {
    fill: ${props => props.theme.palette.lightgray};
    height: 16px;
    width: 16px;
    transition: all 0.3s ease-out;
  }

  :hover {
    border: 3px solid ${props => props.theme.palette.gray};
    color: ${props => props.theme.palette.lightblue};
    background-color:rgba(0, 0, 0, 0.3);

    svg {
      fill: ${props => props.theme.palette.gray};
    }
  }
`


const ImageBtn = (props: IButton) => {
  const { children, onClick } = props
  return (
    <ImageButton type='button' onClick={onClick}>{children}</ImageButton>
  )
}

export default ImageBtn