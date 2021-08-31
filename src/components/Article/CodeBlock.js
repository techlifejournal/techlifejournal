// ./CodeBlock.js
import React, { useContext } from "react"
import SyntaxHighlighterLight, { Prism as SyntaxHighlighterDark } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import { DarkLightContext  } from '../../context/darkmodeContext'
// import { atomOneLight, github , githubGist  } from 'react-syntax-highlighter/dist/esm/styles/hljs'
const CodeBlock = () => {
  // const [dark, setDark] = useContext(DarkLightContext)
  console.log(window.screen.width)
  return {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighterDark
          children={String(children).replace(/\n$/, '')}
          style={materialDark}
          language={match[1]}
          PreTag="div"
          showLineNumbers={true}
          {...props} />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  }
}

export default CodeBlock