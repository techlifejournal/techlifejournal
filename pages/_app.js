import '../styles/globals.css'
import Contexts from '../src/context'
import Nav from '../src/components/Navbar'
import "nprogress/nprogress.css";
import dynamic from 'next/dynamic'
const TopProgressBar = dynamic(
  () => {
    return import("../src/Utility/TopProgressBar");
  },
  { ssr: false },
);


function MyApp({ Component, pageProps }) {
  return <Contexts>
    <TopProgressBar />
    <div className={`App`}>
      <div className="  dark:text-white ">
        <Nav />
        <Component {...pageProps} />
      </div></div>
  </Contexts>
}

export default MyApp
