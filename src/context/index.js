import DarkLightTheme from './darkmodeContext'
import ScrollContextProvider from './ScrollContext'
import ThemeContext from './ThemeContext'
import AuthContext from './authContext'
export default function Contexts(props) {
   return <AuthContext><DarkLightTheme>
      <ThemeContext>
         <ScrollContextProvider>
            {props.children}
         </ScrollContextProvider>
      </ThemeContext>
   </DarkLightTheme></AuthContext>
}


