import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import ContentPage from './components/ContentPage'
import Article from './components/Article'
import { useState } from 'react'
function App() {
  const [dark, setDark] = useState(false)
  if (dark) {
    document.body.classList.add('dark')
    document.body.classList.add('bg-dark')
  }
  else {
    document.body.classList.remove('dark')
    document.body.classList.remove('bg-dark')
  }
  return (
    <div className={`App`}>
      <div className="  dark:text-white">
        <Navbar dark={dark} setDark={setDark} />
        <HomePage />
        <ContentPage />
        <Article />
      </div>
    </div >
  );
}

export default App;
