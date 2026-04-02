import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Hall from "./Pages/Hall";
import HallDetails from "./Pages/HallDetails";
import HallsReview from "./Pages/HallsReview";
import Register from "./Pages/Register";
import { HallProvider } from "./context/HallContext";
import "./App.css";

function App() {
  return (
    <HallProvider>
      <div className="app-container bg-[#FAF9F6] min-h-screen transition-colors duration-700">
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <section id="hall">
          <Hall />
        </section>
        <section id="hall-details">
          <HallDetails />
        </section>
        <section id="halls-review">
          <HallsReview />
        </section>
        <section id="register">
          <Register />
        </section>
      </div>
    </HallProvider>
  );
}

export default App;


