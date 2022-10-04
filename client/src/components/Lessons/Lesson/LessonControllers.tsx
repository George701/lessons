import React from 'react'
import styled from 'styled-components'
import Icon, { EIconType } from '../../../UIKit/Icon'
import { Orientation } from '../Lessons'

const ControllerWrappers = styled.div<{orientation: Orientation}>`
  display: flex;
  align-items: ${props => props.orientation === Orientation.TABLE && 'center'};
  justify-content: ${props => props.orientation === Orientation.TABLE && 'center'};
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

interface IProps {
  orientation: Orientation;
  onDelete: ()=>void;
}

const LessonControllers = (props: IProps) => {
  const { onDelete, orientation } = props
  return (
    <ControllerWrappers orientation={orientation}>
        <ControllerOption>
          <Icon
            type={EIconType.pen}
            height={20}
            width={20}
          />
        </ControllerOption>
        <ControllerOption onClick={onDelete}>
          <Icon
            type={EIconType.trashCan}
            height={20}
            width={20}
          />
        </ControllerOption>
      </ControllerWrappers>
  )
}

export default LessonControllers