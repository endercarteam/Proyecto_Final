import * as Sentry from "@sentry/react";

export default function ErrorButton() {
  const handleClick = () => {
    Sentry.captureException(new Error("Prueba: clic detectado en Sentry"));
  };
  console.log("error button loaded");
  return (
    <button onClick={handleClick}>
      Probar Sentry
    </button>
    
  );
}
