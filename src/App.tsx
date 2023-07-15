import React from "react";
import Navbar from "./components/navbar";
import { GlobalStyle } from "./styles";
import Start from "./pages/start";
import About from "./pages/about";
import Work from "./pages/work";
import NavProvider from "./contexts/NavContext";

function App() {
  return (
    <NavProvider>
      <div className="App">
        <GlobalStyle />
        <Navbar />
        <Start />
        <Work />
        <About />
      </div>
    </NavProvider>
  );
}

export default App;
