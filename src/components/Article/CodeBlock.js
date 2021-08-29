// ./CodeBlock.js
import React from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedlight, atomDark, a11yDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { github , atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'
const CodeBlock = () => {
  return {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, '')}
          style={atomDark}
          language={match[1]}
          PreTag="div"
          wrapLongLines={true}
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  }
}

export default CodeBlock