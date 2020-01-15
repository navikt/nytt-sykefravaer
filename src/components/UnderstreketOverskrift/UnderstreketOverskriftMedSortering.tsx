import './UnderstreketOverskrift.less';

import React from 'react';
import { Element } from 'nav-frontend-typografi';
import { Select } from 'nav-frontend-skjema';

const UnderstreketOverskriftMedSortering = ({
    tittel,
    settSortering,
}: {
    tittel: string;
    settSortering: (sortering: string) => void;
}) => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <Element style={{ flex: '1', display: 'flex', alignItems: 'flex-end' }}>{tittel}</Element>
                <Select label="Sortér etter:" onChange={event => settSortering(event.target.value)}>
                    <option value="dato">Dato</option>
                    <option value="annet">Annet sorteringsvalg</option>
                </Select>
            </div>
            <hr className="understreket__hr" />
        </>
    );
};

export default UnderstreketOverskriftMedSortering;
