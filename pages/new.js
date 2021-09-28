import { useState, useEffect } from 'react'
import Article from '../src/components/Article/ArticlePage'
import { MdDelete } from 'react-icons/md'
function New() {
    const [content, setContent] = useState("")
    const [preview, setPreview] = useState(false)
    return (
        <section>
            <div class=" py-20 px-4 md:py-28  max-w-4xl mx-auto min-h-screen">



                <div className=" shadow-lg  flex flex-col ">
                    <div class="bg-gray-50 border border-b-0 border-gray-300 top-0 left-0 right-0 block rounded-t-md">
                        <button onClick={() => { setPreview(false) }} type="button" class=" px-4 border-b-4 border-gray-300 inline-block text-gray-600 font-semibold border-r-1 py-3  hover:text-gray-400" >
                            Write</button>
                        <button onClick={() => { setPreview(true) }} type="button" class=" px-4 inline-block text-gray-600 font-semibold py-3 border-r-1 hover:text-gray-400">Preview</button>
                    </div>

                    <div>
                        <div className="p-5 border-1 ">
                            {!preview ? <textarea
                                id="id"
                                rows="25"
                                x-ref="input"
                                name="content"
                                className="w-full h-full focus:outline-none"
                                placeholder="Write your article here..."
                                value={content}
                                onChange={(e) => { setContent(e.target.value) }}
                            ></textarea> :
                                <div id="preview"
                                    className="w-full "
                                >
                                    <Article pageContent={content} />
                                </div>}
                        </div>
                    </div>
                    <div className="flex justify-between bg-gray-50 border border-t-0 border-gray-300  rounded-b-md text-white">
                        <div className=" flex gap-2 w-full justify-start p-3">
                            <button className="bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-md" >Publish</button>
                            <button className="text-black bg-gray-300 hover:bg-gray-200 px-3 py-2 rounded-md">Save Draft</button>
                        </div>
                        <button className="bg-red-600 hover:bg-red-400  m-3 px-2  text-2xl rounded-md" ><MdDelete /></button>

                    </div>
                </div>
            </div></section>
    )
}

export default New
