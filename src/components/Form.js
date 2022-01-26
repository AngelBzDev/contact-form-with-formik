import React from "react";
import { Formik, Form as Formulario, } from "formik";

import Input from "./Input";
import Button from "./Button";

import { MdOutlineEmail } from "react-icons/md";
import { RiUser4Line } from "react-icons/ri";
import swal from "sweetalert";

const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "El campo no puede estar vacio";
  } else if (values.name.length < 3) {
    errors.name = "El nombre no puede ser tan corto";
  }

  if (!values.email) {
    errors.email = "El campo no puede estar vacio";
  } else if (!values.email.match(regex)) {
    errors.email = "Ese no es un correo electronico";
  }

  if (!values.mensaje) {
    errors.mensaje = "El campo no puede estar vacio";
  }

  return errors;
};

const Form = () => {
  const handleSubmit = (values) => {
    swal("Nosotros te llamamos", {
      title: `Listo! ${values.name}`,
      icon: "success",
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <Formik
        initialValues={{ name: "", email: "", mensaje: "",}}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Formulario className="form">
          <Input
            label={"Nombre"}
            name={"name"}
            icon={<RiUser4Line className="icons" />}
          />
          <Input
            label={"Correo Electronico"}
            name={"email"}
            icon={<MdOutlineEmail className="icons" />}
          />
          <Input label={"Mensaje"} name={"mensaje"} autocomplete={'off'}/>
          <div className="button__container">
            <Button>Enviar Mensaje</Button>
          </div>
        </Formulario>
      </Formik>
    </div>
  );
};

export default Form;
