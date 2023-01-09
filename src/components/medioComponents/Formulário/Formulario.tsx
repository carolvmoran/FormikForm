import React from "react";
import styles from "./Formulario.module.css";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { schema } from "../../../utils/ValidationSchema";
import MaskedInput from "react-text-mask";
import { regex } from "../../../utils/regex";
import { Labels } from "../../miniComponents/Labels/Label";
import { ErroParagrafo } from "../../miniComponents/ErroFormik/ErrorMessage";

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
        validationSchema={schema}
      >
        <Form className={styles["containerForm"]}>
          <div>
            <Labels text="Nome" htmlFor="name" estilo={styles["label"]} />
            <ErroParagrafo name="name" estilo={styles["error"]} />
            <Field
              id="name"
              name="name"
              placeholder="Seu nome completo"
            ></Field>
          </div>
          <div>
            <Labels
              text="Data de Nascimento"
              htmlFor="date"
              estilo={styles["label"]}
            />
            <ErroParagrafo name="date" estilo={styles["error"]} />
            <Field
              id="date"
              name="date"
              render={({ field }: any) => (
                <MaskedInput
                  {...field}
                  mask={regex.dataMask}
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
      {/* <NamePage text="Seu formulario foi enviado" /> */}
    </>
  );
};

export { Formulario };
