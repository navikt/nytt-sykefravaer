import { StatusTyper } from '../types/sykmeldingTypes';
import { useSykefravaer } from './useSykefravaer';

export const useSykmeldinger = (sykefravaerId?: string, sykmeldingId?: string) => {
    const { sykefravaerFraId } = useSykefravaer(sykefravaerId);

    if (!sykefravaerFraId) {
        return {
            sykmeldinger: [],
            nyeSykmeldinger: [],
            ferdigBehandledeSykmeldinger: [],
            sykmeldingFraId: null,
        };
    }

    const sykmeldinger = sykefravaerFraId.sykmeldinger;
    const nyeSykmeldinger = sykefravaerFraId.sykmeldinger.filter(sm => sm.status.status === StatusTyper.NY);
    const ferdigBehandledeSykmeldinger = sykefravaerFraId.sykmeldinger.filter(
        sm => sm.status.status !== StatusTyper.NY,
    );
    const sykmeldingFraId = sykmeldingId ? sykefravaerFraId.sykmeldinger.find(sm => sm.sykmelding.id === sykmeldingId) : null;

    return {
        sykmeldinger,
        nyeSykmeldinger,
        ferdigBehandledeSykmeldinger,
        sykmeldingFraId,
    };
};
