import { FaRegNewspaper, FaEnvelopeOpenText, FaPodcast } from 'react-icons/fa';
import { AiFillHome, } from 'react-icons/ai';
import { IoIosPaper, IoLogoBuffer, IoMdPeople } from 'react-icons/io';

export default [
    {
        name: "home",
        href: "/",
        icon: <AiFillHome />
    },
    {
        name: "resources",
        href: "/resources",
        icon: <IoLogoBuffer />
    },
    {
        name: "podcast",
        href: "/podcasts",
        icon: <FaPodcast />
    },
    {
        name: "news",
        href: "/news",
        icon: <FaRegNewspaper />
    },
    {
        name: "community",
        href: "/community",
        icon: <IoMdPeople />
    },
]