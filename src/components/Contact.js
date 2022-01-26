import React from 'react';
import TypeContact from './TypeContact';
import {BsFillTelephoneFill as Tel} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {FaMapMarkerAlt as Map} from 'react-icons/fa'


const Contact = () => {
  return (
    <div className='contactContainer'>
      <TypeContact icon={<Tel className='icons'/>}>
        +52 5613427963
      </TypeContact>
      <TypeContact icon={<MdEmail className='icons'/>}>
        angelbaez.dev@gmail.com
      </TypeContact>
      <TypeContact icon={<Map className='icons'/>}>
        Estado de México
      </TypeContact>
    </div>
  )
};

export default Contact;
