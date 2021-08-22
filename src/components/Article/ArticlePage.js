
import React, { useState } from 'react';
import { Article1 as markdown } from './example'
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock'
import {Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus , vs ,solarizedlight , atomDark ,a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
export default function Article() {
  return (

    <div className = "mx-4 md:mx-16 lg:mx-48    ">
      <ReactMarkdown
    children={markdown}
    components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={a11yDark }
            language={match[1]}
            PreTag="div"
            wrapLongLines = {true}
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }}
  />
    </div>

  );
}


// Did you know you can use tildes instead of backticks for code in markdown? ✨

