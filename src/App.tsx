import type { Component } from "solid-js";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";

const App: Component = () => {
  return (
    <div class="flex flex-col h-screen">
      <div class="flex-grow">
        <Calculator />
      </div>
      <Footer />
    </div>
  );
};

export default App;
