import React from "react";
import { ErrorMessage } from "formik";

interface IProps {
  name: string;
  estilo: string;
}

const ErroParagrafo = (props: IProps) => {
  const { name, estilo } = props;
  return (
    <p className={estilo}>
      <ErrorMessage name={name}></ErrorMessage>
    </p>
  );
};

export { ErroParagrafo };
