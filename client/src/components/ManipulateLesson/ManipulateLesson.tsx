import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Wrapper } from '../mainStyles'
import Input, { EInput } from '../../UIKit/components/Input'
import PhotoCover from '../../UIKit/components/PhotoCover'
import Button, { EBtnType } from '../../UIKit/Button'
import Icon, { EIconType } from '../../UIKit/Icon'
import { fetchLesson, saveLesson, editLesson } from '../../services/services'
import { LessonId } from '../../constants/identifications'
import showToast from '../../UIKit/components/Toast/showToast'
import Loader from '../../UIKit/components/Loader'
import { ILessonBasicModel } from '../../models/lessons'

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

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.palette.error};
  font-size: ${props => props.theme.fontSize.error};
`

const ManipulateLesson = () => {
  const [lessonId, setLessonId] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [cover, setCover] = useState('')
  const [cusError, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const { t } = useTranslation()

  const getLesson = async (id: string) => {
    try {
      setLoading(true)
      const res: ILessonBasicModel = await fetchLesson(id)

      setTitle(res.title)
      setDescription(res.description)
      if (!!res.cover) setCover(res.cover)

      setError(false)
      setLoading(false)
    } catch (error) {
      showToast(error, true)
      console.error(error)
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const id = String(params.get(LessonId))
    
    if (id !== 'null') {
      console.log('Somehow, I am here')
      setLessonId(id)
      getLesson(id)
    }
  }, [])

  if (loading) return (
    <LessonWrapper>
      <ErrorWrapper>
        <Loader />
      </ErrorWrapper>
    </LessonWrapper>
  )

  if (cusError) return (
    <LessonWrapper>
      <ErrorWrapper>
        {t('lessonLoadErrorLabel')}
      </ErrorWrapper>
    </LessonWrapper>
  )

  const handleSaveLesson = async () => {
    try {

      let res;

      if (!!lessonId.length) {
        res = await editLesson(lessonId, {title, description, cover})
      } else {
        res = await saveLesson({title, description, cover})
      }

      if (res === 200) {
        showToast(t('lessonSavedLabel'))
        window.history.back()
      }
    } catch (error) {
      console.error(error)
      showToast(t('lessonSavedErrorLabel'), true)
    }
  }

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

      <Button type={EBtnType.basic} onClick={handleSaveLesson}>
        {t('saveLabel')}
      </Button>
    </LessonWrapper>
  )
}

export default ManipulateLesson