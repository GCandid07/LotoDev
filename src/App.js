import { Router } from "./router/Router";
import {GlobalStyle} from "./AppStyles"
import { GlobalState } from "./global/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <GlobalStyle/>
      <Router/>
    </GlobalState>
  );
};

export default App;
