import React from "react";
import styles from "./Formulario.module.css";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import { schema } from "./ValidationSchema";
import MaskedInput from "react-text-mask";

interface Values {
  name: string;
  date: string;
}
const dataMask = [/[1-9]/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/];
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
        validationSchema={schema}
      >
        <Form className={styles["containerForm"]}>
          <div>
            <label className={styles["label"]} htmlFor="name">
              Nome
            </label>
            <p className={styles["error"]}>
              <ErrorMessage name="name"></ErrorMessage>
            </p>
            <Field
              id="name"
              name="name"
              placeholder="Seu nome completo"
            ></Field>
          </div>
          <div>
            <label className={styles["label"]} htmlFor="date">
              Data de Nascimento
            </label>
            <p className={styles["error"]}>
              <ErrorMessage name="date"></ErrorMessage>
            </p>
            <Field
              mask="00 00 0000"
              id="date"
              name="date"
              render={({ field }: any) => (
                <MaskedInput
                  {...field}
                  mask={dataMask}
                  id="phone"
                  placeholder="00 00 0000"
                  type="text"
                />
              )}
            ></Field>
          </div>
          <button className={styles["btn"]} type="submit">
            Cadastre-se
          </button>
        </Form>
      </Formik>
    </>
  );
};

export { Formulario };
