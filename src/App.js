import { ErrorBoundary } from 'components';
import React from 'react';
import Routers from 'routers';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorBoundary}>
      <Routers />
    </ReactErrorBoundary>
  );
}

export default App;
