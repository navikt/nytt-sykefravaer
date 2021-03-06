# Ditt sykefravær

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Ny landingsside for ditt sykefravær.

-   Laget med [Create React App](https://github.com/facebook/create-react-app)
-   Craco for konfigurasjon av utvidelser
-   Less for styling
-   Prettier er brukt lokalt i VSCode med config `.prettierrc.js`

### Kjør lokalt

Last ned og start https://github.com/navikt/sykefravaer-mock for å kunne hente data.

Ved utvikling uten redirects til https://github.com/navikt/sykmeldinger:

```
npm run solo
```

Ved utvikling med redirect til https://github.com/navikt/sykmeldinger

```
npm start
```

Merk at ved utvikling med redirect må riktig URL til Sykmeldinger-appen settes. Dette gjøres i .env-filen ved å endre REACT_APP_SYKMELDINGER_URL.

### Kjør tester

```
npm test
```

### Bygg til produksjon

```
npm run build
```

Bygger statiske filer til `build`-mappen.
