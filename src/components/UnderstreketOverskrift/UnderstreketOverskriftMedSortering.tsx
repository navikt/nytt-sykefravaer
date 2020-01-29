import './UnderstreketOverskrift.less';

import React from 'react';
import { Select } from 'nav-frontend-skjema';
import { Undertittel } from 'nav-frontend-typografi';

const UnderstreketOverskriftMedSortering = ({
    tittel,
    settSortering,
}: {
    tittel: string;
    settSortering: (sortering: string) => void;
}) => {
    return (
        <>
            <div className="understreket__container">
                <Undertittel className="understreket__tittel">{tittel}</Undertittel>
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
