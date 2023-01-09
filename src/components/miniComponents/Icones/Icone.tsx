import React from "react";

interface iconeProps {
  src: string;
  alt: string;
  estilo: string;
}

const Icone = (props: iconeProps) => {
  const { src, alt, estilo } = props;
  return (
    <li>
      <img src={src} alt={alt} className={estilo} />
    </li>
  );
};

export { Icone };
