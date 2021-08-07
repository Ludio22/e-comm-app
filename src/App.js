import { BrowserRouter } from "react-router-dom";
import HeaderContainer from "./components/header/header__container";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
