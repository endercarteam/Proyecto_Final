import * as Sentry from "@sentry/react";

// 👇 Esto expone Sentry globalmente (solo para debug)
(window as any).Sentry = Sentry;

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});