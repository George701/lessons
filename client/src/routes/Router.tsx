import React from 'react'
import { Routes, Route } from 'react-router-dom'
import definedUrls from '../constants/definedUrls'
import { LessonId } from '../constants/identifications'

//pages & components
import Home from '../pages/Home'
import Lessons from '../pages/Lessons'
import Timetable from '../pages/Timetable'
import ManipLesson from '../pages/ManipLesson'

const Router = () => {
  return (
    <Routes>
      <Route
        path={definedUrls.HomeURL}
        element={<Home />}
      />
      <Route
        path={definedUrls.LessonsURL}
        element={<Lessons />}
      />
      <Route
        path={definedUrls.EditLEssonURL}
        element={<ManipLesson />}
      />
      <Route
        path={`${definedUrls.EditLEssonURL}?${LessonId}=:id`}
        element={<ManipLesson />}
      />
      <Route
        path={definedUrls.TimetableURL}
        element={<Timetable />}
      />
    </Routes>
  )
}

export default Router