import useAppStore from './useAppStore';
import { StatusTyper } from '../types/sykmeldingTypes';

export const useSelectSykmeldinger = () => {
    const { sykmeldinger } = useAppStore();

    if (!sykmeldinger) {
        return { nyeSykmeldinger: null, tidligereSykmelding: null };
    }

    const nyeSykmeldinger = sykmeldinger.filter(({ status }) => status.status === StatusTyper.NY);
    const tidligereSykmeldinger = sykmeldinger.filter(({ status }) => status.status !== StatusTyper.NY);

    return { nyeSykmeldinger, tidligereSykmeldinger };
};

export const useSelectSykefravaer = (id?: string) => {
    const { sykefravaer } = useAppStore();

    if (!id) {
        return null;
    }

    if (!sykefravaer) {
        return null;
    }

    return sykefravaer.find(fravaer => fravaer.id === id);
};
