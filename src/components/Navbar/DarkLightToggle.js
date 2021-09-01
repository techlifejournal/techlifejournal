
import { Switch } from '@headlessui/react'
import { BsSun , BsMoon } from 'react-icons/bs'
import { HiSun  } from 'react-icons/hi'
import { useContext } from 'react'
import { DarkLightContext } from '../../context/darkmodeContext'
export default function Button() {

  const [enabled, setEnabled] = useContext(DarkLightContext)
  return (

    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${!enabled && ' border-black'}
          relative inline-flex items-center border-1 flex-shrink-0  w-10 h-5 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        {enabled? <BsMoon
          aria-hidden="true"
          className={`${enabled ? 'translate-x-4 ' : 'translate-x-0 '}
            pointer-events-none inline-block h-3  w-3 ml-1 rounded-full  shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />:
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-4 ' : 'translate-x-0 '}
            pointer-events-none bg-yellow-300 inline-block h-3  w-3 ml-1 rounded-full  shadow-lg transform ring-0 transition ease-in-out duration-200`}
        ></span>
          }

       
      </Switch>
    </>
  )
}