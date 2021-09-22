import { Disclosure } from '@headlessui/react'
import { IoIosArrowForward } from 'react-icons/io'
import { AiOutlineEnter } from 'react-icons/ai'

export default function Index({ data }) {
    return (
        <div className="w-full px-4 pt-16 text-lg  ">
            {data.map((ele) =>
                <div className="w-full max-w-md pb-2 mx-auto  rounded-2xl">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-semibold hover:bg-gray-200 dark:hover:bg-opacity-10 hover:border-opacity-10 text-left rounded-md border-2 dark:border-white dark:border-opacity-20 ">
                                    <span>{ele.headline}</span>
                                    <IoIosArrowForward
                                        className={`${open ? 'transform rotate-90' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-10 pt-4 pb-2 border-2 dark:border-white dark:border-opacity-20 ">
                                    <div className="flex flex-col gap-1">
                                        {
                                            ele.subtopics.map((topic) => <a href="" className="w-full hover:text-purple-500 flex"><AiOutlineEnter className="opacity-70" style={{ transform: 'scale(-1 ,1)' }} />{topic}</a>)
                                        }

                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

            )}
        </div>
    )
}