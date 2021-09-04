import React from 'react';
import { FaRegNewspaper, FaEnvelopeOpenText } from 'react-icons/fa';
import { AiFillHome, } from 'react-icons/ai';
import { IoIosPaper, IoLogoBuffer, IoMdPeople, IoMdHelpCircle } from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Learn',
    path: '/learn',
    icon: <IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Resources',
    path: '/products',
    icon: <IoLogoBuffer />,
    cName: 'nav-text'
  },
  {
    title: 'Community',
    path: '/team',
    icon: <IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'News',
    path: '/team',
    icon: <FaRegNewspaper />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoMdHelpCircle />,
    cName: 'nav-text'
  },
];