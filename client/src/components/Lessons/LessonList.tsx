import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import LessonCover from '../../UIKit/components/LessonCover'

const Wrapper = styled.div`
  height: 120px;
  width: 100%;
  box-shadow: 0 4px 8px 0 ${(props: any) => props.theme.palette.gray}, 0 6px 20px 0 ${(props: any) => props.theme.palette.gray};
  border-radius: 4px;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
`

const CoverWrapper = styled(Link)`
  display: inline-block;
  width: 200px;
  height: 120px;
  transition: all 0.3s ease-out;

  img {
    width: 200px;
    height: 120px;
    border-radius: 4px 0 0 4px;
  }

  :hover {
    opacity: .5;
  }
`

const InfoWrapper = styled.div`
  padding: .2rem .6rem;
`

const TitleLink = styled(Link)`
  font-size: ${props => props.theme.fontSize.subHeader};
  color: ${props => props.theme.palette.black};
  transition: all 0.3s ease-out;
  text-decoration: none;
  display: block;
  width: 100%;

  :hover {
    color: ${props => props.theme.palette.gray};
  }
`

const Description = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const coverStyle = {
  height: '112px',
  width: '184px',
  borderRadius: '4px 0 0 4px',
}

const LessonList = (props: {cover?: string, id: string, title: string, description: string}) => {
  const {id, title, cover, description } = props
  return (
    <Wrapper>
      <CoverWrapper to="/">
        {!!cover
        ? (
          <img src={cover} alt="cover-lesson"/>
        ) : (
          <LessonCover style={coverStyle}/>
        )}
      </CoverWrapper>
      <InfoWrapper>
        <TitleLink to="/">{title}</TitleLink>
        <Description>
          {description}
        </Description>
      </InfoWrapper>
    </Wrapper>
  )
}

export default LessonList