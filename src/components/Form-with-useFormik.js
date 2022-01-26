import React from "react";
import { useFormik } from "formik";

import Input from "./Input";
import Button from "./Button";

import { MdOutlineEmail } from "react-icons/md";
import { RiUser4Line } from "react-icons/ri";
import swal from "sweetalert";

const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

const validate = (values) => {

  const errors = {}

  if(!values.name){
    errors.name = 'El campo no puede estar vacio'
  }
  else if(values.name.length < 3){
    errors.name = 'El nombre no puede ser tan corto'
  }

  if(!values.email){
    errors.email = 'El campo no puede estar vacio'
  }
  else if(!values.email.match(regex)){
    errors.email = 'Ese no es un correo electronico'
  }

  if(!values.mensaje){
    errors.mensaje = 'El campo no puede estar vacio'
  }

  return errors
}

const Form = () => {

  //Se utiliza el hook use formik, su valor inicial es un objeto
  const formik = useFormik({
    //valores iniciales
    initialValues: {
      name: "",
      email: "",
      mensaje: "",
    },
    //Funcion para hacer la validacion ( en este caso la funcion esta fuera del compente )
    validate,
    //El evento que determina lo que hara al enviar el formulario ( ya incluye e.preventDefault())
    onSubmit: (values) => {
      swal('Nosotros te llamamos',{
        title:`Listo! ${values.name}`,
        icon: 'success'
      })
    },
  });

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="input__container">
          {/*
            Esta es la primera forma de usar formik

            <Input
            name={"name"}
            label={"Nombre"}
            icon={<RiUser4Line className="icons" />}
            onChange={formik.handleChange}

            /* Para que la validacion se haga cada vez que se salga del foco se usa la funcion handle blur que trae formik 

            onBlur={formik.handleBlur}
          /> */}

          {/* Esta es la segunda forma, no se repite codigo. usando spreed operator copiando formik y la funcion getFieldProps() a la cual se le pasa como parametro el name del campo */}

          <Input
            label={"Nombre"}
            icon={<RiUser4Line className="icons" />}
            {...formik.getFieldProps('name')}
          />
          {/* Con touched se hace la validacion para saber en que campo se esta haciendo el foco */}
          {formik.touched.name && formik.errors.name && <p className="msj msj-error">{formik.errors.name}</p>} 
        </div>
        <div className="input__container">
          {/*
            Esta es la primera forma de usar formik
            <Input
            type={"email"}
            name={"email"}
            label={"Correo electronico"}
            icon={<MdOutlineEmail className="icons" />}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          /> */}
          {/* Esta es la segunda forma, no se repite codigo. usando spreed operator copiando formik y la funcion getFieldProps() a la cual se le pasa como parametro el name del campo ( esta funcion ya integra lo que es handleBlur, onChange el name) */}
          <Input
            type={'text'}
            label={"Correo electronico"}
            icon={<MdOutlineEmail className="icons" />}
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && <p className="msj msj-error">{formik.errors.email}</p>}
        </div>
        <div className="input__container">
          <Input
            label={"Mensaje"}
            type={'text'}
            {...formik.getFieldProps('mensaje')}
          />
          {formik.touched.mensaje && formik.errors.mensaje && <p className="msj msj-error">{formik.errors.mensaje}</p>}
        </div>
        <div className="button__container">
          <Button>Enviar Mensaje</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
