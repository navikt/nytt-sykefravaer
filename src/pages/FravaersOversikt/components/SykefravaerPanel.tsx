import React from 'react';
import dayjs from 'dayjs';
import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';

import bjorn from '../../../svg/bjorn.svg';

interface SykefravaerPanelProps {
    lenke: string;
    antallNyeSykmeldinger: number;
    periodeFra: Date;
    periodeTil: Date;
}

const SykefravaerPanel = ({ lenke, antallNyeSykmeldinger, periodeFra, periodeTil }: SykefravaerPanelProps) => {
    const erSammeAr = dayjs(periodeFra).isSame(dayjs(periodeTil), 'year');
    const erSammeMnd = dayjs(periodeFra).isSame(dayjs(periodeTil), 'month');

    const lesbarFra = dayjs(periodeFra).format(`DD. ${erSammeMnd ? '' : 'MMMM'} ${erSammeAr ? '' : 'YYYY'}`);
    const lesbarTil = dayjs(periodeTil).format(`DD. MMMM YYYY`);

    return (
        <LenkepanelWrapper
            lenke={lenke}
            tittel={`Sykefravær fra ${lesbarFra} - ${lesbarTil}`}
            tekstGra={`${antallNyeSykmeldinger} ${antallNyeSykmeldinger > 1 ? 'nye sykmeldinger' : 'ny sykmelding'}`}
            ikonbakgrunn="gul"
            svg={bjorn}
        />
    );
};

export default SykefravaerPanel;
