
import { Article1 as markdown } from './example'
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import CodeBlock from './CodeBlock'
export default function Article() {
  return (
    <div className="mx-6 md:mx-16 lg:mx-72  dark:text-white    article  ">
      <ReactMarkdown
        children={markdown}
        rehypePlugins={[rehypeRaw]}
        components={CodeBlock()}
      />
    </div>
  );
}


// Did you know you can use tildes instead of backticks for code in markdown? ✨

