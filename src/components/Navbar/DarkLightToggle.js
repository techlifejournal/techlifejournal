
import { Switch } from '@headlessui/react'
import {BsSun} from 'react-icons/bs'
export default function Button({enabled , setEnabled}) {
  
  
  return (
      
    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-black  ' : 'bg-white border-black'}
          relative inline-flex items-center border-1 flex-shrink-0  w-12 h-5 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-6 bg-white' : 'translate-x-0 bg-black'}
            pointer-events-none inline-block h-3 w-3 ml-1 rounded-full  shadow-lg transform ring-0 transition ease-in-out duration-200`}
        >

        </span>
      </Switch>
    </>
  )
}