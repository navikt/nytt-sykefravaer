import FetchMock, { MiddlewareUtils } from "yet-another-fetch-mock";

import { sykmeldingerMock } from "./data/sykmeldinger";

const mock = FetchMock.configure({
  enableFallback: true,
  middleware: MiddlewareUtils.combine(
    MiddlewareUtils.delayMiddleware(1000),
    MiddlewareUtils.loggingMiddleware()
  )
});

mock.get("/syforest/sykmeldinger", sykmeldingerMock);
