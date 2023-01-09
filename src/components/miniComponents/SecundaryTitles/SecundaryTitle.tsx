import React from "react";

interface propsSecundaryTitle {
  text: string;
  estilo: string;
}

const SecundaryTitle = (props: propsSecundaryTitle) => {
  const { text, estilo } = props;
  return <h2 className={estilo}>{text}</h2>;
};

export { SecundaryTitle };
