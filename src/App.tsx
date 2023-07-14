import React from "react";
import Navbar from "./components/navbar";
import { GlobalStyle } from "./styles";
import Start from "./pages/start";
import About from "./pages/about";
import Work from "./pages/work";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Start />
      <Work />
      <About />
    </div>
  );
}

export default App;
