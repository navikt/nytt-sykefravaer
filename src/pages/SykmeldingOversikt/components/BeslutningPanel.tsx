import React from 'react';
import LenkepanelWrapper from '../../../components/Lenkepanel/LenkepanelWrapper';
import bjorn from '../../../svg/bjorn.svg';

interface BeslutningPanelProps {
    lenke: string;
}

const BeslutningPanel = ({ lenke }: BeslutningPanelProps) => {
    return (
        <LenkepanelWrapper
            lenke={lenke}
            tittel="Beslutninger fra NAV"
            tekstGra={'Svar kan forventes mellom 5-8 behandlingsdager etter at søknaden er levert.'}
            tekstStatus={'Inneholder svar på søknad, beregningsgrunnlag samt detaljer rundt utbetaling.'}
            svg={bjorn}
            ikonbakgrunn="gra"
        />
    );
};

export default BeslutningPanel;
