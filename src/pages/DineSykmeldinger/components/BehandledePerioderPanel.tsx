import React from 'react';
import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';

import bjorn from '../../../svg/bjorn.svg';

interface BehandledePerioderPanelProps {
    lenke: string;
    antallPerioder: number;
}

const BehandledePerioderPanel = ({ lenke, antallPerioder }: BehandledePerioderPanelProps) => (
    <LenkepanelWrapper
        lenke={lenke}
        tittel={`Oversikt over alle ferdig behandlede perioder`}
        tekstGra={`${antallPerioder} ${antallPerioder > 1 ? 'perioder' : 'periode'} totalt`}
        ikonbakgrunn="gra"
        svg={bjorn}
    />
);
export default BehandledePerioderPanel;
