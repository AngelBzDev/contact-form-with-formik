import React from 'react';

const TypeContact = ({icon, children}) => {
   return (
      <div className='contact'>
         {icon}
         {children}
      </div>
   )
};

export default TypeContact;
