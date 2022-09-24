import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getLessons } from '../../actions/lesson'
import { ILessonReducer } from '../../models/lessons'

const LessonWrapper = styled.div`
  margin: 2rem 10rem;
  border: 1px solid ${(props: any) => props.theme.palette.gray};
  background: ${(props: any) => props.theme.palette.white};
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 ${(props: any) => props.theme.palette.gray}, 0 6px 20px 0 ${(props: any) => props.theme.palette.gray};
`

const Lessons = (props: {getLessons: () => void, lessons: ILessonReducer}) => {
  const { getLessons, lessons } = props

  useEffect(() => {
    getLessons()
  }, [])

  console.log(lessons)

  return (
    <LessonWrapper>
      <h2>Lessons</h2>
    </LessonWrapper>
  )
}

const mapStateToProps = (state: { lessonsReducer: ILessonReducer }) => ({
  lessons: state.lessonsReducer,
});

const mapDispatchToProps = {
  getLessons,
};

export default connect(mapStateToProps, mapDispatchToProps)(Lessons)