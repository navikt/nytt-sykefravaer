import React from 'react';

import UnderstreketOverskrift from './UnderstreketOverskrift/UnderstreketOverskrift';
import UnderstreketOverskriftMedSortering from './UnderstreketOverskrift/UnderstreketOverskriftMedSortering';

interface KategoriProps {
    tittel: string;
    children: JSX.Element | JSX.Element[];
    settSortering?: (sortering: string) => void;
}

const Kategori = ({ tittel, children, settSortering }: KategoriProps) => {
    if (Array.isArray(children) && children.length === 0) {
        return null;
    }

    return (
        <div style={{ marginBottom: '3rem' }}>
            {settSortering ? (
                <UnderstreketOverskriftMedSortering tittel={tittel} settSortering={settSortering} />
            ) : (
                <UnderstreketOverskrift tittel={tittel} />
            )}
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
