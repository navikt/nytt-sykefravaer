import React from "react";
import { Element } from "nav-frontend-typografi";

interface KategoriProps {
  tittel: string;
  children: JSX.Element | JSX.Element[];
}

const Kategori = ({ tittel, children }: KategoriProps) => {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <Element>{tittel}</Element>
      <hr />
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className="sykmelding"
              style={{ marginBottom: "1rem" }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  );
};

export default Kategori;
