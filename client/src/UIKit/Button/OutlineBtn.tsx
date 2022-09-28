import React from 'react'
import styled from 'styled-components'

const OutlineButton = styled.button`
  padding: .5rem 1rem;
  background-color: ${props => props.theme.palette.white};
  border: 3px solid ${props => props.theme.palette.blue};
  border-radius: 4px;
  cursor: pointer;
  color: ${props => props.theme.palette.blue};
  font-size: ${props => props.theme.fontSize.basic};
  font-weight: 700;
  transition: all 0.3s ease-out;

  :hover {
    border: 3px solid ${props => props.theme.palette.lightblue};
    color: ${props => props.theme.palette.lightblue};
    background-color: ${props => props.theme.palette.lightgray};
  }
`


const OutlineBtn = (props: { children: any, onClick: ()=> void }) => {
  const { children, onClick } = props
  return (
    <OutlineButton type='button' onClick={onClick}>{children}</OutlineButton>
  )
}

export default OutlineBtn