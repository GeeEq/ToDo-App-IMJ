import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export function ErrorBoundary({ children, onReset }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback} onReset={onReset}>
      {children}
    </ReactErrorBoundary>
  );
}

// export default ErrorBoundary;
