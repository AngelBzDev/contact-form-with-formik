import React from 'react';
import Title from './Title';
import Contact from './Contact';
import SocialContainer from './SocialContainer';

const InfoContainer = () => {
   return (
      <div className='infoContainer'>
         <Title />
         <Contact />
         <SocialContainer />
      </div>
   )
};

export default InfoContainer;
