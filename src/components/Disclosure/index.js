import { Disclosure } from '@headlessui/react'
import { IoIosArrowForward } from 'react-icons/io'

export default function Index(data) {
    return (
        <div className="w-full px-4 pt-16">
            <div className="w-full max-w-md p-2 mx-auto  rounded-2xl">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2   text-left rounded-md border-2 dark:border-white dark:border-opacity-20 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>Python Manage{data.headline}</span>
                                <IoIosArrowForward
                                    className={`${open ? 'transform rotate-90' : ''
                                        } w-5 h-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 border-2 dark:border-white dark:border-opacity-20 text-lg">
                                <div className="flex flex-col">
                                    <a href="" className="">Python variables</a>
                                    <a className="">Python Keywords</a>
                                    <a className="">Python Hello?</a>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

            </div>
        </div>
    )
}