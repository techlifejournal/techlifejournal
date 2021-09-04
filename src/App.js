import Navbar from './components/Navbar'
import ContentPage from './components/ContentPage'
import Home from './components/HomePage'
import Contexts from './context'
function App() {
  //edf2fb

  return (
    <Contexts>
      <div className={`App`}>
        <div className="  dark:text-white ">
          <Navbar />
          <Home/>
          <ContentPage />
        </div>
      </div >
    </Contexts>

  );
}

export default App;
