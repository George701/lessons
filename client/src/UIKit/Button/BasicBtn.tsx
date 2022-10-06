import React from 'react'
import styled from 'styled-components'
import { IButton } from '.'

const BasicButton = styled.button`
  padding: .7rem 1.2rem;
  background-color: ${props => props.theme.palette.blue};
  background: ${props => props.theme.palette.btn_linear};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${props => props.theme.palette.white};
  font-size: ${props => props.theme.fontSize.basic};
  font-weight: 700;
  transition: all 0.3s ease-out;

  :hover {
    background: ${props => props.theme.palette.btn_linear_hover};
  }
`


const BasicBtn = (props: IButton) => {
  const { children, onClick } = props
  return (
    <BasicButton type='button' onClick={onClick}>{children}</BasicButton>
  )
}

export default BasicBtn