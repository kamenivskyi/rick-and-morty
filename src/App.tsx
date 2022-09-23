import { routes } from "app/routes";
import Header from "components/Header";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/ErrorFallback";

import "./App.css";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Header />
      {routes}
    </ErrorBoundary>
  );
}

export default App;
