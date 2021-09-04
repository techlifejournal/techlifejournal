import DarkLightTheme from './darkmodeContext'
import ScrollContextProvider from './ScrollContext'
import ThemeContext from './ThemeContext'
export default function Contexts(props) {
   return <DarkLightTheme>
      <ThemeContext>
      <ScrollContextProvider>
         {props.children}
      </ScrollContextProvider>
      </ThemeContext>
   </DarkLightTheme>
}


