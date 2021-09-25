import '../styles/globals.css'
import Contexts from '../src/context'
import Nav from '../src/components/Navbar'

function MyApp({ Component, pageProps }) {
  return <Contexts><div className={`App`}>
    <div className="  dark:text-white ">
      <Nav />
      <Component {...pageProps} />
    </div></div>
  </Contexts>
}

export default MyApp
