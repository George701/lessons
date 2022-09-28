import React from 'react'
import { Routes, Route } from 'react-router-dom'

//pages & components
import Home from '../pages/Home'
import Lessons from '../pages/Lessons'
import Timetable from '../pages/Timetable'
import ManipLesson from '../pages/ManipLesson'

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/lessons"
        element={<Lessons />}
      />
      <Route
        path="/lessons/manip"
        element={<ManipLesson />}
      />
      <Route
        path="/lessons/manip/:id"
        element={<ManipLesson />}
      />
      <Route
        path="/timetable"
        element={<Timetable />}
      />
    </Routes>
  )
}

export default Router