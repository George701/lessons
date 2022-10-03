import React from 'react'
import styled from 'styled-components'
import { IButton } from '.'

const BasicButton = styled.button`
  padding: .5rem 1rem;
  background-color: ${props => props.theme.palette.blue};
  border: 3px solid ${props => props.theme.palette.blue};
  border-radius: 4px;
  cursor: pointer;
  color: ${props => props.theme.palette.white};
  font-size: ${props => props.theme.fontSize.basic};
  font-weight: 700;
  transition: all 0.3s ease-out;

  :hover {
    border: 3px solid ${props => props.theme.palette.lightblue};
    background-color: ${props => props.theme.palette.lightblue};
  }
`


const BasicBtn = (props: IButton) => {
  const { children, onClick } = props
  return (
    <BasicButton type='button' onClick={onClick}>{children}</BasicButton>
  )
}

export default BasicBtn