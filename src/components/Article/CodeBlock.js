// ./CodeBlock.js
import SyntaxHighlighterLight, { Prism as SyntaxHighlighterDark } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
export const CodeBlock = () => {
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

