import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getLessons } from '../../actions/lesson'
import withTranslation from '../../i18n/withTranslation'
import { ILessonReducer } from '../../models/lessons'
import Loader from '../../UIKit/components/Loader'
import Icon from '../../UIKit/Icon'
import LessonGrid from './LessonGrid'
import LessonList from './LessonList'

const LessonWrapper = styled.div`
  margin: 2rem 10rem;
  border: 1px solid ${(props: any) => props.theme.palette.gray};
  background: ${(props: any) => props.theme.palette.white};
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 ${(props: any) => props.theme.palette.gray}, 0 6px 20px 0 ${(props: any) => props.theme.palette.gray};
  min-height: 10rem;
  padding: 0 2rem 1rem 2rem;
  max-height: 600px;
  overflow: auto;
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

const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  row-gap: 1.5rem;
  align-items: center;

  @media (max-width: 1216px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 996px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 796px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const LessonsBar = styled.div`
  padding: .5rem 0;
  margin-bottom: 1rem;
`
const OrientationBar = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
`

const OrientationOptions = styled.div`
  display: flex;
  width: 100px;
`

const OrientationOption = styled.div<{ isChosen: boolean }>`
  flex: 1;
  padding: 0 12px;
  cursor: ${props => !props.isChosen && 'pointer'};
  opacity: ${props => props.isChosen ? .4 : 1};
  pointer-events: ${props => props.isChosen && 'none'};

  svg {
    fill: ${props => props.theme.palette.blue};
    transition: all 0.3s ease-out;
  }

  :hover {
    svg {
      fill: ${props => props.theme.palette.lightblue};
    }
  }
`

enum Orientation {
  LIST = 'LIST',
  TABLE = 'TABLE',
}

const Lessons = (props: {getLessons: () => void, lessons: ILessonReducer, t: (str: string) => string}) => {
  const { getLessons, lessons, t } = props
  const { loading, loaded, error, lessonsCollection } = lessons

  const [orientation, setOrientation] = useState(Orientation.LIST)

  useEffect(() => {
    getLessons()
  }, [])

  return (
    <LessonWrapper>
      <LessonsBar>
        Blbla
        <OrientationBar>
          <OrientationOptions>
            <OrientationOption
              isChosen={orientation === Orientation.TABLE}
              onClick={() => setOrientation(Orientation.TABLE)}
            >
              <Icon type="table" height={24} width={24} />
            </OrientationOption>
            <OrientationOption
              isChosen={orientation === Orientation.LIST}
              onClick={() => setOrientation(Orientation.LIST)}
            >
              <Icon type="column" height={24} width={24}/>
            </OrientationOption>
          </OrientationOptions>
        </OrientationBar>
      </LessonsBar>
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
        loaded && !!lessonsCollection.length && orientation === Orientation.TABLE && generateLessonTable(lessonsCollection)
      }
      {
        loaded && !!lessonsCollection.length && orientation === Orientation.LIST && generateLessonList(lessonsCollection)
      }
    </LessonWrapper>
  )
}

const generateLessonList = (lessons: Array<any>) => (
  <div>
    {
      lessons.map(lesson => {
        const {_id, title, cover, description } = lesson
        return (
          <LessonList
            key={_id}
            id={_id}
            title={title}
            cover={cover}
            description={description}
          />
        )
      })
    }
  </div>
)

const generateLessonTable = (lessons: Array<any>) => (
  <TableWrapper>
    {
      lessons.map(lesson => {
        const {_id, title, cover} = lesson
        return (
          <LessonGrid
            key={_id}
            id={_id}
            title={title}
            cover={cover}
          />
        )
      })
    }
  </TableWrapper>
)

const mapStateToProps = (state: { lessonsReducer: ILessonReducer }) => ({
  lessons: state.lessonsReducer,
});

const mapDispatchToProps = {
  getLessons,
};

export default withTranslation(connect(mapStateToProps, mapDispatchToProps)(Lessons))