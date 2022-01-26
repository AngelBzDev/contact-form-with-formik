import { useField } from 'formik';
import React from 'react';

const Input = ({label, icon,...rest}) => {

   const [field, meta] = useField(rest)

   return (
      <div className="input__container">
         <label className='input__container--label'>{label}</label>
         <div className='input'>
            {icon}
            <input {...field} />
         </div>
         {meta.touched && meta.error && <p className='msj msj-error'>{meta.error}</p>}
      </div>
   )
};

export default Input;
