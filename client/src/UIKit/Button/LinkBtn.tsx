import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkButton = styled(Link)`
  padding: .5rem 1rem;
  background-color: ${props => props.theme.palette.blue};
  border: 3px solid ${props => props.theme.palette.blue};
  border-radius: 4px;
  cursor: pointer;
  color: ${props => props.theme.palette.white};
  font-size: ${props => props.theme.fontSize.basic};
  font-weight: 700;
  transition: all 0.3s ease-out;
  text-decoration: none;

  :hover {
    border: 3px solid ${props => props.theme.palette.lightblue};
    background-color: ${props => props.theme.palette.lightblue};
  }
`

interface ILinkButton {
  children: any;
  href?: string;
}

const LinkBtn = (props: ILinkButton) => {
  const { children, href } = props
  return (
    <LinkButton to={!!href?.length ? href : '/'} >{children}</LinkButton>
  )
}

export default LinkBtn