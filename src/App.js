import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import ContentPage from './components/ContentPage'
import {useState} from 'react'
function App() {
  const [dark , setDark] = useState(false)
  return (
    <div className={`${dark && 'dark'} App`}>
      <div className = "bg-light dark:bg-dark dark:text-white">
      <Navbar dark= {dark}  setDark = {setDark} />
      <HomePage/>
      <ContentPage/>
      </div>
    </div >
  );
}

export default App;
