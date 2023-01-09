import React from "react";

interface IProps {
  htmlFor: string;
  text: string;
  estilo: string;
}

const Labels = (props: IProps) => {
  const { htmlFor, text, estilo } = props;
  return (
    <label className={estilo} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export { Labels };
