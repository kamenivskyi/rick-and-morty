import { routes } from "app/routes";
import Header from "components/Header";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      {routes}
    </>
  );
}

export default App;
