import React from 'react'
import styled from 'styled-components'
import Icon, { EIconType } from '../../Icon'

const ModalWrapper = styled.div`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  background-color: black;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-transition: 0.5s;
  overflow: auto;
  transition: all 0.3s linear;
`

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border-radius: 4px;
  width: 500px;
  height: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`

const CloseModalBar = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
`

const CloseButton = styled.div`
  cursor: pointer;

  svg {
    fill: ${props => props.theme.palette.black};
    height: 20px;
    width: 20px;
    transition: all 0.3s ease-out;
  }

  :hover {
    svg {
      fill: ${props => props.theme.palette.gray};
    }
  }
`

const Modal = (props: {show: boolean, onClose: ()=>void, children: any}) => {
  const { show, children, onClose } = props
  if (!show) return null
  return (
    <ModalWrapper>
      <ModalContent>
        <CloseModalBar>
          <CloseButton onClick={onClose}>
            <Icon type={EIconType.cross} />
          </CloseButton>
        </CloseModalBar>
        {children}
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal