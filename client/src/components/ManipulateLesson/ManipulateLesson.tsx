import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Wrapper } from '../mainStyles'
import Input, { EInput } from '../../UIKit/components/Input'
import PhotoCover from '../../UIKit/components/PhotoCover'
import Button, { EBtnType } from '../../UIKit/Button'
import Icon, { EIconType } from '../../UIKit/Icon'
import { saveLesson } from '../../services/services'

const LessonWrapper = styled(Wrapper)`
  /* display: flex; */
`
const EditColumn = styled.div`
  flex: 2;
`

const ImageWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
`

const LessonCover = styled.img`
  width: 400px;
  height: 240px;  
`

const CoverWrapper = styled.div`
  position: relative;

  button {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
`

const ManipulateLesson = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [cover, setCover] = useState('')

  const { t } = useTranslation()

  return (
    <LessonWrapper>
      <EditColumn>
        <Input
          type={EInput.text}
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
          label={t('titleLabel')}
        />
        <Input
          type={EInput.textarea}
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
          label={t('descriptionLabel')}
        />
        <Input
          type={EInput.text}
          value={cover}
          onChange={(e: any) => setCover(e.target.value)}
          placeholder={t('enterURLImageLabel')}
          label={t('imageURLLabel')}
        />
      </EditColumn>
      <ImageWrapper>
        {
          !cover.length
          ? (
            <PhotoCover />
          )
          : (
            <CoverWrapper>
              <Button type={EBtnType.icon} onClick={() => setCover('')}>
                <Icon type={EIconType.cross}/>
              </Button>
              <LessonCover src={cover} alt='lesson-image' />
            </CoverWrapper>
          )
        }
      </ImageWrapper>

      <Button type={EBtnType.basic} onClick={() => saveLesson({title, description, cover})}>
        {t('saveLabel')}
      </Button>
    </LessonWrapper>
  )
}

export default ManipulateLesson