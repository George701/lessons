import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

//pages & components
import Home from './pages/Home';
import Navbar from './components/Navbar'

const MainContainer = styled.div`
  padding: 0;
  margin: 0;
`

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <MainContainer>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </MainContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
