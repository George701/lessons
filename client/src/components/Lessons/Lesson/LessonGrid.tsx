import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import LessonCover from '../../../UIKit/components/LessonCover'
import ModalDelete from './ModalDelete'
import LessonControllers from './LessonControllers'
import { Orientation } from '../Lessons'
import definedUrls from '../../../constants/definedUrls'
import { LessonId } from '../../../constants/identifications'
import Tooltip from '../../../UIKit/components/Tooltip'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 200px;
  box-shadow: 0 4px 8px 0 ${(props: any) => props.theme.palette.gray}, 0 6px 20px 0 ${(props: any) => props.theme.palette.gray};
  border-radius: 4px;
`

const TitleLink = styled(Link)`
  flex: 1;
  font-size: ${props => props.theme.fontSize.subHeader};
  color: ${props => props.theme.palette.black};
  text-align: center;
  transition: all 0.3s ease-out;
  text-decoration: none;
  width: 200px;
  display: block;
  /* overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
  

  :hover {
    color: ${props => props.theme.palette.gray};
  }
`

const CoverWrapper = styled(Link)`
  flex: 1;
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

interface IProps {
  cover?: string;
  id: string;
  title: string;
}

const  LessonGrid = (props: IProps) => {
  const {cover, id, title } = props

  const [showModal, setShowModal] = useState(false)

  return (
    <Wrapper>

      <ModalDelete
        visible={showModal}
        onClose={() => setShowModal(false)}
        id={id}
      />

      <CoverWrapper to="/">
        {!!cover
        ? (
          <img src={cover} alt="cover-lesson"/>
        ) : (
          <LessonCover style={coverStyle} />
        )}
      </CoverWrapper>
      <TitleLink to="/">
        <Tooltip text={title} />
        </TitleLink>
      <LessonControllers
        link={`${definedUrls.EditLEssonURL}?${LessonId}=${id}`}
        orientation={Orientation.TABLE}
        onDelete={() => setShowModal(true)}
      />
    </Wrapper>
  )
}

export default LessonGrid