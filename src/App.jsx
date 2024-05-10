import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './NavigationBar.jsx'
import IntroductionPage from './pages/IntroductionPage.jsx'
import BottomBar from './BottomBar.jsx'
import { Grommet } from 'grommet'
import { theme } from './styles/theme';


const App = () => (
  <Grommet theme={theme} full>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<IntroductionPage />} />
    </Routes>
    <BottomBar />
  </Grommet>
)

export default App
