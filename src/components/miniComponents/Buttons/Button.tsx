import React from "react";

interface propsButton {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  estilo: string;
}

const Button = (props: propsButton) => {
  const { type, text, estilo } = props;
  return (
    <button className={estilo} type={type}>
      {text}
    </button>
  );
};

export { Button };
