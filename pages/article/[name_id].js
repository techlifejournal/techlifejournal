import { useRouter } from 'next/router'
import ArticlePage from "../../src/components/Article"
import Nav from "../../src/components/Navbar"
import react from 'react'
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
                    <section>
                        <Nav />
                        <article className="pt-20">
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
