import React from 'react';
import Veilederpanel from 'nav-frontend-veilederpanel';
import { Normaltekst, Sidetittel, Undertittel } from 'nav-frontend-typografi';
import { Panel } from 'nav-frontend-paneler';

import Kategori from '../../../components/Kategori';
import Lenkepanel from '../../../components/Lenkepanel';
import bjorn from '../../../svg/bjorn.svg';
import { Soknad } from '../../../types/soknadTypes';
import { SykmeldingData } from '../../../types/sykmeldingDataTypes';

interface SoknadAvvistProps {
    sykmeldingDto: SykmeldingData;
    soknad: Soknad;
}

const SoknadAvvist = ({ sykmeldingDto, soknad }: SoknadAvvistProps) => {
    const { sykmelding } = sykmeldingDto;

    return (
        <div className="soknad-godkjent">
            <Sidetittel style={{ textAlign: 'center', marginBottom: '1rem' }}>Sykmelding</Sidetittel>
            <Undertittel style={{ textAlign: 'center', marginBottom: '3rem' }}>
                fra {sykmelding.perioder[0].fom.toDateString()} til{' '}
                {sykmelding.perioder[sykmelding.perioder.length - 1].tom.toDateString()}
            </Undertittel>
            <div style={{ marginBottom: '3rem' }}>
                <Veilederpanel type={'plakat'} svg={bjorn}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <Normaltekst style={{ marginBottom: '1rem' }}>
                            NAV har dessverre avslått din søknad om sykepenger
                        </Normaltekst>
                    </div>
                </Veilederpanel>
            </div>
            <Kategori tittel={'Begrunnelse'}>
                <Normaltekst>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eius itaque distinctio, id numquam
                    sint doloribus perferendis alias! Nostrum aut quos corrupti voluptatibus quod magnam nihil?
                    Consectetur minus error maxime!
                </Normaltekst>
                <Lenkepanel innhold={'Vilkår for rett til ytelsen'} lenkeTil={'#'} />
                <Lenkepanel innhold={'Begrunnelse'} lenkeTil={'#'} />
            </Kategori>
            <Kategori tittel={'Dokumenter for beslutningsgrunnlag'}>
                <Lenkepanel innhold={'Inntektsmelding'} lenkeTil={'#'} />
                <Lenkepanel innhold={'Sykmeldinger for periode'} lenkeTil={'#'} />
                <Lenkepanel innhold={'Søknader om sykepenger for periode'} lenkeTil={'#'} />
                <Panel>
                    <Undertittel>Uenig? usikker?</Undertittel>
                    <Normaltekst>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores velit cum eos modi tempora
                        adipisci necessitatibus similique quia autem nam accusamus fugiat dicta vel rem, at commodi.
                        Doloremque, quo corrupti.
                    </Normaltekst>
                </Panel>
            </Kategori>
        </div>
    );
};

export default SoknadAvvist;
