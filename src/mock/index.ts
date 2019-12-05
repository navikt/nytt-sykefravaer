import FetchMock, { MiddlewareUtils } from "yet-another-fetch-mock";
import {
  nySykmeldingMock,
  sendtSykmeldingMock,
  avbruttSykmeldingMock,
  avvistSykmeldingMock
} from "../mock/data/sykmeldingMock";
import { SykmeldingData } from "../types/sykmeldingDataTypes";

const mock = FetchMock.configure({
  enableFallback: true,
  middleware: MiddlewareUtils.combine(
    MiddlewareUtils.delayMiddleware(1000),
    MiddlewareUtils.loggingMiddleware()
  )
});
new SykmeldingData(nySykmeldingMock);
mock.get("/syforest/sykmeldinger", [
  nySykmeldingMock,
  sendtSykmeldingMock,
  avbruttSykmeldingMock,
  avvistSykmeldingMock
]);
