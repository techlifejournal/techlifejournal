import { useState, useEffect } from 'react'
import Article from '../src/components/Article/ArticlePage'
import { MdDelete } from 'react-icons/md'
import { Heading } from './article/[name_id]'
function New() {
    const [content, setContent] = useState({
        title: "",
        body: ""
    })
    const date = new Date()
    const [preview, setPreview] = useState(false)

    return (
        <section>
            <div class=" py-20 px-4 md:py-28  max-w-4xl mx-auto min-h-screen">



                <div className=" shadow-lg  flex flex-col ">
                    <div class="bg-gray-50 dark:bg-opacity-10 border border-b-0 border-gray-300 top-0 left-0 right-0 block rounded-t-md">
                        <button onClick={() => { setPreview(false) }} type="button" className={`${!preview && "border-b-4"}  px-4  border-gray-300 inline-block  font-semibold border-r-1 py-3  hover:text-gray-400`} >
                            Write</button>
                        <button onClick={() => { setPreview(true) }} type="button" className={`${preview && "border-b-4 "} px-4 inline-block  font-semibold py-3 border-r-1 hover:text-gray-400`}>Preview</button>
                    </div>

                    <div>
                        <div className="p-5 border-1 ">
                            {!preview ?
                                <div className="">
                                    <input className="bg-transparent w-full   text-4xl  focus:outline-none py-4" value={content.title} onChange={(e) => { setContent({ ...content, title: e.target.value }) }} placeholder="Title Here..." />
                                    <textarea
                                        id="id"
                                        x-ref="input"
                                        name="content"
                                        className="h-56 lg:h-96 bg-transparent w-full focus:outline-none"
                                        placeholder="Write your article here..."
                                        value={content.body}
                                        onChange={(e) => { setContent({ ...content, body: e.target.value }) }}
                                    ></textarea>
                                </div> :
                                <div id="preview"
                                    className="w-full "
                                >
                                    <Heading data={{ headline: content.title }} />
                                    <Article pageContent={content.body} />
                                </div>}
                        </div>
                    </div>
                    <div className="flex justify-between bg-gray-50 dark:bg-opacity-5 border border-t-0 border-gray-300  rounded-b-md text-white">
                        <div className=" flex gap-2 w-full justify-start p-3">
                            <button className="bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-md" >Publish</button>
                            <button className="text-black bg-gray-300  hover:bg-gray-200 px-3 py-2 rounded-md">Save Draft</button>
                        </div>
                        <button className="bg-red-600 hover:bg-red-500  m-3 px-2  text-2xl rounded-md" ><MdDelete /></button>

                    </div>
                </div>
            </div></section>
    )
}

export default New


// const Heading = ({ data }) => {
//     return <div className="flex flex-col gap-4 border-b-2 dark:border-opacity-50 mb-4">
//         <h1 className="text-4xl md:text-6xl font-bold">{data.headline}</h1>
//         <div className="flex justify-between text-md  mb-2">
//             <p className="flex items-center "><RiQuillPenLine /><a href="/author/id " >swathik shetty</a></p>
//             <p className="flex items-center gap-1"><GoCalendar /><span>10-9-21</span></p>
//         </div>
//     </div>
// }