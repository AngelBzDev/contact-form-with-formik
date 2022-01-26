import React from 'react';
import Social from './Social';

import {FaFacebookF as Face} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import {FaInstagram} from 'react-icons/fa';

const SocialContainer = () => {
  return (
    <div className='social__container'>
      <Social icon={<Face className='icons icon--social'/>}/>
      <Social icon={<FiTwitter className='icons icon--social'/>}/>
      <Social icon={<FaInstagram className='icons icon--social'/>}/>
    </div>
  )
};

export default SocialContainer;
