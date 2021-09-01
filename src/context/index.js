import DarkLightTheme from './darkmodeContext'
import ScrollContextProvider from './ScrollContext'
export default function Contexts(props) {
   return <DarkLightTheme>
      <ScrollContextProvider>
         {props.children}
      </ScrollContextProvider>
   </DarkLightTheme>
}


