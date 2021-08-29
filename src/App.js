import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import ContentPage from './components/ContentPage'
import Article from './components/Article'
import DarkLightTheme from './context/darkmodeContext'
import { useState } from 'react'
function App() {


  return (
    <DarkLightTheme>
      <div className={`App`}>
        <div className="  dark:text-white ">
          <Navbar />
          <HomePage />
          <ContentPage />
          <Article />
        </div>
      </div >
    </DarkLightTheme>

  );
}

export default App;
