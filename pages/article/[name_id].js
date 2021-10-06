import { useRouter } from 'next/router'
import ArticlePage from "../../src/components/Article"
import axios from 'axios'
import urls from '../../backend.config'
import { GoCalendar } from 'react-icons/go'
import { RiQuillPenLine } from 'react-icons/ri'
import Disclosure from '../../src/components/Disclosure'
import { useEffect, useState } from 'react'

function App({ data }) {
    const [Authors, setAuthors] = useState([])
    async function fetch_author() {
        const apiRes = await fetch(`/api/authors/${data[0].authors.toString()}`)
        const res = await apiRes.json()
        setAuthors(res.data)
    }
    useEffect(() => {
        fetch_author()
    }, [])
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (
        <section id="ArticlePage" className="flex justify-start pt-20 sm:pt-28  " style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
            <ArticleNav data={data} />
            <article className="p-5 flex flex-col  justify-center  max-w-screen-md">
                <Heading data={data[0]} authors={Authors} />
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

export const Heading = ({ data, authors }) => {
    return <div className="flex flex-col gap-4 border-b-2 dark:border-opacity-50 mb-4">
        <h1 className="text-4xl md:text-6xl font-bold">{data.headline}</h1>
        <div className="flex justify-between text-md  mb-2">
            <p className="flex flex-wrap items-center "><RiQuillPenLine />{authors.map((ele) => <a href={`/u/${ele.user_name} `} >{ele.full_name}</a>)}</p>
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
