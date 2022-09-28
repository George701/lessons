import React from 'react'
import './App.css';
import styled from 'styled-components'

import Navbar from './components/Navbar'
import Router from './routes/Router'

const MainContainer = styled.div`
  padding: 0;
  margin: 0;
`

const App = () => {
  
  return (
    <>
      <Navbar />
      <MainContainer>
        <Router />
      </MainContainer>
    </>
  );
}

export default App;
