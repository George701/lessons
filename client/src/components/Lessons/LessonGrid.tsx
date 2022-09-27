import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../UIKit/Button'
import LessonCover from '../../UIKit/components/LessonCover'
import Modal from '../../UIKit/components/Modal'
import Icon from '../../UIKit/Icon'

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

const ControllerWrappers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: .2rem;
`

const ControllerOption = styled.div`
  padding: 0 .2rem;
  cursor: pointer;

  svg {
    transition: all 0.3s ease-out;
    fill: ${props => props.theme.palette.blue};
  }

  :hover {
    svg {
      fill: ${props => props.theme.palette.lightblue};
    }
  }
`
const ModalMessage = styled.div`
  border: 1px solid black;
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  p {
    text-align: center;
    font-size: ${props => props.theme.fontSize.subHeader};
  }
`
const GroupBtn = styled.div`
  border: 1px solid red;
`

const coverStyle = {
  borderRadius: '4px 4px 0 0',
}

const  LessonGrid = (props: {cover?: string, id: string, title: string}) => {
  const {cover, id, title} = props

  const [showModal, setShowModal] = useState(false)

  return (
    <Wrapper>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ModalMessage>
          <p>
            slkdjflsdkfjlkdsjfklsdkljfjsdklfkldsjfkldsjflksd
          </p>
        </ModalMessage>
        <GroupBtn>
          <Button type='outline' onClick={() => setShowModal(false)}>Close</Button>
        </GroupBtn>
      </Modal>

      <CoverWrapper to="/">
        {!!cover
        ? (
          <img src={cover} alt="cover-lesson"/>
        ) : (
          <LessonCover style={coverStyle} />
        )}
      </CoverWrapper>
      <TitleLink to="/">{title}</TitleLink>
      <ControllerWrappers>
        <ControllerOption>
          <Icon
            type='pen'
            height={20}
            width={20}
          />
        </ControllerOption>
        <ControllerOption onClick={() => setShowModal(true)}>
          <Icon
            type='trashCan'
            height={20}
            width={20}
          />
        </ControllerOption>
      </ControllerWrappers>
    </Wrapper>
  )
}

export default LessonGrid