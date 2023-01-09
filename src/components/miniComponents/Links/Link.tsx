import React from "react";

interface LinkProps {
  href: string;
  children?: any;
  estilo: string;
}

const Link = (props: LinkProps) => {
  const { href, children, estilo } = props;
  return (
    <a href={href} className={estilo}>
      {children}
    </a>
  );
};

export { Link };
