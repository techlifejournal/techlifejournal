
import { Article1 as markdown } from './example'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import CodeBlock from "./codeblock"
import Style from '../../../styles/Article.module.css'
export default function Article() {
  return (
    <div className={`mx-4 md:mx-16 lg:mx-48  xl:mx-72 dark:text-white ${Style.article}`}>
      <ReactMarkdown
        children={markdown}
        rehypePlugins={[rehypeRaw]}
        components={CodeBlock}
      />
    </div>
  );
}


