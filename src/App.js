import Navbar from './components/Navbar'
import ContentPage from './components/ContentPage'
import Home from './components/HomePage'
import Article from './components/Article'
import Contexts from './context'
function App() {
  //edf2fb

  return (
    <Contexts>
      <div className={`App`}>
        <div className="  dark:text-white ">
          <Navbar />
          <Home />
          <ContentPage />
          <Article/>
        </div>
      </div >
    </Contexts>

  );
}

export default App;
