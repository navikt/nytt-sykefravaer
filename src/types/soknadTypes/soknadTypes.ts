import dayjs from 'dayjs';

import { RSSoknad } from './rs-types/rs-soknad';
import { RSSoknadsperiode } from './rs-types/rs-soknadsperiode';
import { RSSoknadstatus } from './rs-types/rs-soknadstatus';
import { RSSoknadstype } from './rs-types/rs-soknadstype';
import { RSSporsmal } from './rs-types/rs-sporsmal';
import { RSSvarliste } from './rs-types/rs-svarliste';
import { RSSvartype } from './rs-types/rs-svartype';
import { TagTyper } from './enums';

export interface NaermesteLeder {
    navn: string;
    epost: string;
    mobil: string;
    orgnummer: string;
    organisasjonsnavn: string;
    aktivTom: string;
}

export interface Arbeidsgiver {
    navn: string;
    orgnummer: string;
    naermesteLeder?: NaermesteLeder;
}

export class Soknad {
    id: string;
    sykmeldingId: string;
    soknadstype: RSSoknadstype;
    status: RSSoknadstatus;
    fom: Date;
    tom: Date;
    avbruttDato?: Date;
    opprettetDato: Date;
    sendtTilNAVDato?: Date;
    sendtTilArbeidsgiverDato?: Date;
    arbeidsgiver?: Arbeidsgiver;
    sporsmal: Sporsmal[];
    soknadPerioder: RSSoknadsperiode[];

    constructor(soknad: any) {
        this.id = soknad.id;
        this.sykmeldingId = soknad.sykmeldingId;
        const type = soknad.soknadstype as keyof typeof RSSoknadstype;
        this.soknadstype = RSSoknadstype[type];
        const stat = soknad.status as keyof typeof RSSoknadstatus;
        this.status = RSSoknadstatus[stat];
        this.fom = dayjs(soknad.fom).toDate();
        this.tom = dayjs(soknad.tom).toDate();
        this.avbruttDato = dayjs(soknad.avbruttDato).toDate();
        this.opprettetDato = dayjs(soknad.opprettetDato).toDate();
        this.sendtTilNAVDato = dayjs(soknad.sendtTilNAVDato).toDate();
        this.sendtTilArbeidsgiverDato = dayjs(soknad.sendtTilArbeidsgiverDato).toDate();
        if (soknad.arbeidsgiver) {
            this.arbeidsgiver = {
                naermesteLeder: soknad.arbeidsgiver.naermesteLeder,
                navn: soknad.arbeidsgiver.navn,
                orgnummer: soknad.arbeidsgiver.orgnummer,
            };
        }
        // TODO: Rett opp
        // @ts-ignore
        this.sporsmal = rsToSporsmal(soknad.sporsmal, undefined);
        this.soknadPerioder = soknad.soknadPerioder;
    }
}

export class Sporsmal {
    id: string;
    tag: TagTyper;
    tagIndex?: number;
    sporsmalstekst: string;
    undertekst: string;
    svartype: RSSvartype;
    min: string;
    max: string;
    pavirkerAndreSporsmal: boolean;
    kriterieForVisningAvUndersporsmal: string;
    svarliste: RSSvarliste;
    undersporsmal: Sporsmal[];
    parentKriterie?: string;

    constructor(spm: RSSporsmal, kriterie: string) {
        this.id = spm.id;
        const orgarr: string[] = spm.tag.split('_');
        // TODO: Rett opp
        // @ts-ignore
        const numtag: number = parseInt(orgarr.pop());
        let tag = spm.tag;
        if (!isNaN(numtag)) {
            this.tagIndex = numtag;
            tag = orgarr.join('_');
        }
        const idtag = tag as keyof typeof TagTyper;
        this.tag = TagTyper[idtag];
        this.sporsmalstekst = spm.sporsmalstekst;
        this.undertekst = spm.undertekst;
        this.svartype = spm.svartype;
        this.min = spm.min;
        this.max = spm.max;
        this.pavirkerAndreSporsmal = spm.pavirkerAndreSporsmal;
        this.kriterieForVisningAvUndersporsmal = spm.kriterieForVisningAvUndersporsmal;
        this.svarliste = { sporsmalId: spm.id, svar: spm.svar };
        this.undersporsmal = rsToSporsmal(spm.undersporsmal, spm.kriterieForVisningAvUndersporsmal);
        this.parentKriterie = kriterie;
    }
}

function rsToSporsmal(spms: RSSporsmal[], kriterie: string) {
    const sporsmals: Sporsmal[] = [];
    spms.forEach(rssp => {
        const spm: Sporsmal = new Sporsmal(rssp, kriterie);
        sporsmals.push(spm);
    });
    return sporsmals;
}
