
import urls from '../../backend.config'
import { GoCalendar } from 'react-icons/go'
import Link from 'next/link';
import Loader from '../../src/Utility/Loader'
export default function User({ userData, articles, error }) {
    console.log(userData)
    console.log(articles)
    return (
        <section className=" flex flex-col gap-5 items-center justify-center">
            <div className="w-full max-w-4xl  flex flex-col gap-5 items-center justify-center p-10 pt-20 md:p-20 sm:pt-28 ">
                <div className=" bg-gray-100 dark:bg-opacity-10  w-full  flex flex-col sm:flex-row justify-start items-center rounded-md p-10 gap-5 md:p-10 ">
                    <img className="rounded-full max-h-32" src="https://avatars.githubusercontent.com/u/62538932?v=4" />
                    <div className="font-semibold  text-3xl flex flex-col cursor-pointer">
                        <a className="hover:text-blue-500" >{userData[0].full_name}</a>
                        <Link href={`/u/${userData[0].user_name}`}><a className="hover:text-blue-500">u/{userData[0].user_name}</a></Link>
                        <a className="hover:text-blue-500" >{userData[0].about}</a>
                        <a className="text-xl">0 Followers</a>
                    </div>
                </div>
                {articles.map((article) => <Link key={article.id} href={`/article/${article.headline.replace(/\s/g, "-")}-${article.id}`}><div key={article.id} className="w-full p-5 bg-gray-100 dark:bg-opacity-10 cursor-pointer break-words">
                    <div className="flex flex-wrap justify-between items-center">
                        <h1 className="font-semibold">{article.headline}</h1>
                        <a className="text-lg text-right nowrap inline-flex items-center gap-1"><GoCalendar /> <span>{article.pub_date}</span></a>
                    </div>
                    <p >{article.subtopics}</p>
                </div></Link>)}
            </div>
        </section>
    );
}

export const getServerSideProps = async ({ params }) => {
    try {
        let res1 = await fetch(
            `${urls.base_url}user/authors/?uname=${params.name}`
        );
        const userData = await res1.json()
        const res2 = await await fetch(
            `${urls.base_url}article/list?uname=${params.name}`
        );
        const articles = await res2.json()
        console.log(articles)
        return {
            props: {
                articles,
                userData
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
}
