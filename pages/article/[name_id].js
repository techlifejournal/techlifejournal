import { useRouter } from 'next/router'
import ArticlePage from "../../src/components/Article"
import Nav from "../../src/components/Navbar"
import axios from 'axios'
import Contexts from '../../src/context'
import urls from '../../backend.config'

function App({ data }) {
    const router = useRouter();
    console.log(data)
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (

        <Contexts>
            <div className={`App`}>
                <div className="  dark:text-white ">
                    <Nav />
                    <section className="flex justify-center pt-20 sm:pt-28  overflow-hidden" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                        <article className="p-5 flex flex-col  justify-center  max-w-screen-md">
                            <div className="flex flex-col gap-4 border-b-2 dark:border-opacity-50 mb-4">
                                <h1 className="text-4xl md:text-6xl font-bold">{data[0].headline}</h1>
                                <div className="flex justify-between text-lg  mb-2">
                                    <p className="">swasthik shetty</p>
                                    <p className="">{data[0].pub_date}</p>

                                </div>
                            </div>

                            <ArticlePage pageContent={data[0].content} />
                        </article>
                    </section>
                </div>
            </div >
        </Contexts>

    );
}

export const getServerSideProps = async ({ params }) => {

    const { data } = await axios.get(
        `${urls.base_url}/article/?id=${params.name_id.slice(-1)}`
    );

    return {
        props: {
            data: data,

        },
    };
};


export default App;
