import type { Component } from "solid-js";
import Footer from "./components/Footer";

const App: Component = () => {
  return (
    <div class="flex flex-col h-screen">
      <p class="flex-grow">Hello World</p>
      <Footer />
    </div>
  );
};

export default App;
