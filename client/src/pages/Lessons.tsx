import React, { useEffect } from 'react'
import styled from 'styled-components'
import { fetchLessons } from '../services/services'

const LessonWrapper = styled.div`
  margin: 2rem 10rem;
  border: 1px solid ${(props: any) => props.theme.palette.gray};
  background: ${(props: any) => props.theme.palette.white};
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 ${(props: any) => props.theme.palette.gray}, 0 6px 20px 0 ${(props: any) => props.theme.palette.gray};
`

const Lessons = () => {

  useEffect(() => {
    fetchLessons()
  }, [])

  return (
    <LessonWrapper>
      <h2>Lessons</h2>
    </LessonWrapper>
  )
}

export default Lessons