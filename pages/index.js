import Navbar from '../src/components/Navbar'
import ContentPage from '../src/components/ContentPage'
import Home from '../src/components/HomePage'
import Contexts from '../src/context'
function App() {
  return (
    <Contexts>
      <div className={`App`}>
        <div className="  dark:text-white ">
          <Navbar />
          <Home />
          <ContentPage />

        </div>
      </div >
    </Contexts>

  );
}

export default App;
