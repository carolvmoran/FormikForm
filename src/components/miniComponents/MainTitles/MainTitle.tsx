import React from "react";

interface propsMainTitle {
  text: string;
  estilo: string;
}

const MainTitles = (props: propsMainTitle) => {
  const { text, estilo } = props;
  return <h1 className={estilo}>{text}</h1>;
};

export { MainTitles };
