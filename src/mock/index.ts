import FetchMock, { MiddlewareUtils } from "yet-another-fetch-mock";

const mock = FetchMock.configure({
  enableFallback: true,
  middleware: MiddlewareUtils.combine(
    MiddlewareUtils.delayMiddleware(1000),
    MiddlewareUtils.loggingMiddleware()
  )
});

mock.get("/syforest/sykmeldinger", { test: "test" });
