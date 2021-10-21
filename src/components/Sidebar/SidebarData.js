import React from 'react';
import { FaRegNewspaper, FaEnvelopeOpenText } from 'react-icons/fa';
import { AiFillHome, } from 'react-icons/ai';
import { IoIosPaper, IoLogoBuffer, IoMdPeople, IoMdHelpCircle } from 'react-icons/io';

export const SidebarData = [

  {
    title: 'Learn',
    path: '/learn',
    icon: <IoIosPaper />,
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