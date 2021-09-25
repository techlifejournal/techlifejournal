import { useRouter } from 'next/router'
import ArticlePage from "../../src/components/Article"
import axios from 'axios'
import urls from '../../backend.config'
import { GoCalendar } from 'react-icons/go'
import { RiQuillPenLine } from 'react-icons/ri'
import Disclosure from '../../src/components/Disclosure'

function App({ data }) {
    const router = useRouter();
    console.log(data)
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (
        <section id="ArticlePage" className="flex justify-start pt-20 sm:pt-28  " style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
            <ArticleNav data={data} />
            <article className="p-5 flex flex-col  justify-center  max-w-screen-md">
                <Heading data={data[0]} />
                <ArticlePage pageContent={data[0].content} />
            </article>
        </section>
    );
}
const ArticleNav = ({ data }) => {
    return <div className="hidden lg:block w-1/4 shadow-lg">
        <Disclosure data={data} />
    </div>
}

const Heading = ({ data }) => {
    return <div className="flex flex-col gap-4 border-b-2 dark:border-opacity-50 mb-4">
        <h1 className="text-4xl md:text-6xl font-bold">{data.headline}</h1>
        <div className="flex justify-between text-md  mb-2">
            <p className="flex items-center "><RiQuillPenLine /><a href="/author/id " >swathik shetty</a></p>
            <p className="flex items-center gap-1"><GoCalendar /><span>{data.pub_date}</span></p>
        </div>
    </div>
}

export const getServerSideProps = async ({ params }) => {

    const { data } = await axios.get(
        `${urls.base_url}article/?id=${params.name_id.slice(-1)}`
    );

    return {
        props: {
            data: data,

        },
    };
};


export default App;
