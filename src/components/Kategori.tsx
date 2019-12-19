import React from 'react';
import UnderstreketOverskrift from './UnderstreketOverskrift/UnderstreketOverskrift';

interface KategoriProps {
    tittel: string;
    children: JSX.Element | JSX.Element[];
}

const Kategori = ({ tittel, children }: KategoriProps) => {
    return (
        <div style={{ marginBottom: '3rem' }}>
            <UnderstreketOverskrift tittel={tittel} />
            {Array.isArray(children)
                ? children.map((child, index) => (
                      <div key={index} className="sykmelding" style={{ marginBottom: '1rem' }}>
                          {child}
                      </div>
                  ))
                : children}
        </div>
    );
};

export default Kategori;
