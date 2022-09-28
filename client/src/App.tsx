import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

//pages & components
import Home from './pages/Home'
import Lessons from './pages/Lessons'
import Timetable from './pages/Timetable'
import Navbar from './components/Navbar'

const MainContainer = styled.div`
  padding: 0;
  margin: 0;
`

const App = () => {
  
  return (
    <>
      <Navbar />
      <MainContainer>
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
            path="/timetable"
            element={<Timetable />}
          />
        </Routes>
      </MainContainer>
    </>
  );
}

export default App;
