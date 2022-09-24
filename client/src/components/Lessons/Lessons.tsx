import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getLessons } from '../../actions/lesson'
import withTranslation from '../../i18n/withTranslation'
import { ILessonReducer } from '../../models/lessons'
import Loader from '../../UIKit/components/Loader'

const LessonWrapper = styled.div`
  margin: 2rem 10rem;
  border: 1px solid ${(props: any) => props.theme.palette.gray};
  background: ${(props: any) => props.theme.palette.white};
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 ${(props: any) => props.theme.palette.gray}, 0 6px 20px 0 ${(props: any) => props.theme.palette.gray};
  min-height: 10rem;
`

const LessonError = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSize.error};
  color: ${props => props.theme.palette.error};
`

const Lessons = (props: {getLessons: () => void, lessons: ILessonReducer, t: (str: string) => string}) => {
  const { getLessons, lessons, t } = props
  const { loading, loaded, error, lessonsCollection } = lessons

  useEffect(() => {
    getLessons()
  }, [])

  return (
    <LessonWrapper>
      {
        loading && <Loader />
      }
      {
        loaded && error && (
          <LessonError>
            {t(error)}
          </LessonError>
        )
      }
      {
        loaded && !!lessonsCollection.length && (
          <div>
            Aloha
          </div>
        )
      }
    </LessonWrapper>
  )
}

const mapStateToProps = (state: { lessonsReducer: ILessonReducer }) => ({
  lessons: state.lessonsReducer,
});

const mapDispatchToProps = {
  getLessons,
};

export default withTranslation(connect(mapStateToProps, mapDispatchToProps)(Lessons))