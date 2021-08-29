import DarkLightTheme from './darkmodeContext'

export default function Contexts(props) {
   return <DarkLightTheme>
      {props.children}
      </DarkLightTheme>
}


