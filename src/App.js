import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import ContentPage from './components/ContentPage'
import Article from './components/Article'
import Contexts from './context'
import { useState } from 'react'
function App() {
  //edf2fb

  return (
    <Contexts>
      <div className={`App`}>
        <div className="  dark:text-white ">
          <Navbar />
          <HomePage />
          <ContentPage />
          <Article />
        </div>
      </div >
    </Contexts>

  );
}

export default App;
