import React from 'react';
import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';

import bjorn from '../../../svg/bjorn.svg';

interface BehandledeFravaerPanelProps {
    lenke: string;
    antallSykefravær: number;
}

const BehandledeFravaerPanel = ({ lenke, antallSykefravær }: BehandledeFravaerPanelProps) => (
    <LenkepanelWrapper
        lenke={lenke}
        tittel={`Oversikt over tidligere fravær`}
        tekstGra={`${antallSykefravær} sykefravær totalt`}
        ikonbakgrunn="gra"
        svg={bjorn}
    />
);
export default BehandledeFravaerPanel;
