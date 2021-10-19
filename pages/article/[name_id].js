import { useRouter } from 'next/router'
import ArticlePage from "../../src/components/Article"
import axios from 'axios'
import urls from '../../backend.config'
import { GoCalendar } from 'react-icons/go'
import { RiQuillPenLine } from 'react-icons/ri'
import Disclosure from '../../src/components/Disclosure'
import { useEffect, useState } from 'react'
import Link from 'next/link'

function App({ data, Authors }) {

    return (
        <section id="ArticlePage" className="flex justify-start pt-20 sm:pt-28  " style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
            <ArticleNav data={data} />
            <article className="p-5 flex flex-col  justify-center w-full max-w-4xl">
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
            <p className="flex flex-wrap items-center "><RiQuillPenLine />
                {authors.map((ele) => <Link href={`/u/${ele.user_name}`} key={ele.user_name}><a key={ele.user_name}>{ele.full_name}</a></Link>)}</p>
            <p className="flex items-center gap-1"><GoCalendar /><span>{data.pub_date}</span></p>
        </div>
    </div>
}

export const getServerSideProps = async ({ params }) => {
    try {
        const { data } = await axios.get(
            `${urls.base_url}article/?id=${params.name_id.slice(-1)}`
        );
        const apiRes = await fetch(`${urls.client_url}api/authors/${data[0].authors.toString()}`)
        const res = await apiRes.json()
        return {
            props: {
                data: data,
                Authors: res.data
            },
        };
    }
    catch {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
};


export default App;
