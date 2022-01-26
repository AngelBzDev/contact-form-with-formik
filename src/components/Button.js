import React from 'react';

const Button = ({children}) => {
  return (
     <button className='button' type='submit'>
        {children}
     </button>
  )
};

export default Button;
