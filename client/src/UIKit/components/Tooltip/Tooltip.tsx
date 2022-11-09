import React, { useState } from 'react'
import styled from 'styled-components'

const Tooltip = (props: {text: string}) => {

  const {text} = props
  const [isShown, setIsShown] = useState(false);
  

  const Wrapper = styled.div`
    position: relative;
  `

  const Tooltip = styled.div<{ isShown: boolean}>`
    position: absolute;
    bottom: 3rem;
    left: 2rem;
    border: 1px solid ${props => props.theme.palette.purple};
    border-radius: 4px;
    padding: 4px 8px;
    background: ${props => props.theme.palette.lightgray};
    color: ${props => props.theme.palette.black};
    font-size: ${props => props.theme.fontSize.basic};
    display: ${props => props.isShown ? 'unset' : 'none'};
    transition: all 0.3s ease-out;
  `

  const maxLetters = 20
  const hideExtra = (str: string) => {
    if (str.length > maxLetters) return str.slice(0, maxLetters)+"..."
    return str
  }

  return (
    <Wrapper
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Tooltip isShown={isShown}>
        {text}
      </Tooltip>
      {hideExtra(text)}
    </Wrapper>
  )
}

export default Tooltip