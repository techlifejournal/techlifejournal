
import { Article1 as markdown } from './example'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import CodeBlock from "./codeblock"
import remarkGfm from 'remark-gfm'
import remarkFootnotes from 'remark-footnotes'
import remarkParse from 'remark-parse'
import Style from '../../../styles/Article.module.css'
export default function Article({ pageContent }) {
  return (
    <div className={`flex flex-col gap-5 dark:text-white ${Style.article}`}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm, remarkFootnotes, remarkParse]}
        components={CodeBlock}
      >{pageContent}</ReactMarkdown>
    </div>
  );
}


