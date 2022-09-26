import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import LessonCover from '../../UIKit/components/LessonCover'

const Wrapper = styled.div`
  height: 250px;
  width: 200px;
  box-shadow: 0 4px 8px 0 ${(props: any) => props.theme.palette.gray}, 0 6px 20px 0 ${(props: any) => props.theme.palette.gray};
  border-radius: 4px;
`

const TitleLink = styled(Link)`
  font-size: ${props => props.theme.fontSize.subHeader};
  color: ${props => props.theme.palette.black};
  text-align: center;
  transition: all 0.3s ease-out;
  text-decoration: none;
  width: 200px;
  display: block;
  

  :hover {
    color: ${props => props.theme.palette.gray};
  }
`

const CoverWrapper = styled(Link)`
  display: block;
  transition: all 0.3s ease-out;

  img {
    width: 200px;
    height: 120px;
    border-radius: 4px 4px 0 0;
  }

  :hover {
    opacity: .5;
  }
`

const coverStyle = {
  borderRadius: '4px 4px 0 0',
}

const  LessonGrid = (props: {cover?: string, id: string, title: string}) => {
  const {cover, id, title} = props

  return (
    <Wrapper>
      <CoverWrapper to="/">
        {!!cover
        ? (
          <img src={cover} alt="cover-lesson"/>
        ) : (
          <LessonCover style={coverStyle} />
        )}
      </CoverWrapper>
      <TitleLink to="/">{title}</TitleLink>
    </Wrapper>
  )
}

export default LessonGrid