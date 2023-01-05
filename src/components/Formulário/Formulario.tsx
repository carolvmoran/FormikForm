import React from "react";
import styles from "./Formulario.module.css";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  name: string;
  date: string;
}

let listClients: Array<any> = [];
const Formulario = () => {
  const HandleSubmit = (values: Values, actions: FormikHelpers<Values>) => {
    listClients.push(values);
    console.log(listClients);
    actions.resetForm();
  };
  return (
    <>
      <h2 className={styles["h2"]}>Preencha o formulário </h2>
      <Formik
        initialValues={{
          name: "",
          date: "",
        }}
        onSubmit={HandleSubmit}
      >
        <Form className={styles["containerForm"]}>
          <label className={styles["label"]} htmlFor="name">
            Nome
          </label>
          <Field id="name" name="name" placeholder="Seu nome completo"></Field>
          <label className={styles["label"]} htmlFor="date">
            Data de Nascimento
          </label>
          <Field id="date" name="date" placeholder="00 00 0000"></Field>
          <button className={styles["btn"]} type="submit">
            Cadastre-se
          </button>
        </Form>
      </Formik>
    </>
  );
};

export { Formulario };
