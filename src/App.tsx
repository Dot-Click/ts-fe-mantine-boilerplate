import { BrowserRouter } from "react-router-dom";
import Router from "./routers/Router";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
