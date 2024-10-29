import { BrowserRouter } from "react-router-dom";
import Router from "@pages/Router";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter basename="starWarsTest">
      <Router />
    </BrowserRouter>
  );
};

export default App;
