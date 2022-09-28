import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import Modal from '../../../UIKit/components/Modal'
import Button from '../../../UIKit/Button'
import { deleteLesson } from '../../../services/services'
import { getLessons } from '../../../actions/lesson'
import showToast from '../../../UIKit/components/Toast/showToast'

const ModalMessage = styled.div`
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
  display: flex;
  align-items: end;
  justify-content: end;

  button:first-child {
    margin-right: .8rem;
  }
`

interface IProps {
  visible: boolean;
  onClose: ()=>void;
  id: string;
  getLessons: ()=>void;
}

const ModalDelete = (props: IProps) => {
  const { visible, onClose, id, getLessons } = props
  const { t } = useTranslation()

  const removeLesson = async () => {
    try {
      const resp = await deleteLesson(id)
      if (resp === 200) {
        onClose()
        getLessons()
      }
    } catch (error) {
      console.error(error);
      showToast(error, true)
    }
  }

  return (
    <Modal show={visible} onClose={onClose}>
      <ModalMessage>
        <p>
          {t('deleteLessonWarningLabel')}
        </p>
      </ModalMessage>
      <GroupBtn>
        <Button onClick={removeLesson}>{t('deleteLabel')}</Button>
        <Button type='outline' onClick={onClose}>{t('cancelLabel')}</Button>
      </GroupBtn>
    </Modal>
  )
}

export default connect(null, { getLessons })(ModalDelete)