import './UnderstreketOverskrift.less';

import React from 'react';
import { Select } from 'nav-frontend-skjema';
import { Undertittel } from 'nav-frontend-typografi';

import { Sorteringstype, useSykefravaer } from '../../hooks/useSykefravaer';

interface UnderstreketOverskriftMedSorteringType {
    tittel: string;
    settSortering: (sortering: Sorteringstype) => void;
}

const UnderstreketOverskriftMedSortering = ({ tittel, settSortering }: UnderstreketOverskriftMedSorteringType) => {
    const { sorteringFerdigBehandletSykefravaer } = useSykefravaer();
    return (
        <>
            <div className="understreket__container">
                <Undertittel className="understreket__tittel">{tittel}</Undertittel>
                <Select
                    selected={sorteringFerdigBehandletSykefravaer}
                    label="Sortér etter:"
                    onChange={event => settSortering(event.target.value as Sorteringstype)}
                >
                    <option value={Sorteringstype.DATO_NYEST}>Dato nyest</option>
                    <option value={Sorteringstype.DATO_ELDST}>Dato eldst</option>
                </Select>
            </div>
            <hr className="understreket__hr" />
        </>
    );
};

export default UnderstreketOverskriftMedSortering;
