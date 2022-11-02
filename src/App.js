import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Home from "./components/mainPages/home/Home";
import Header from "./components/headers/Header";
import { DataProvider } from "./GlobalState";
import Footer from "./components/mainPages/Footer";
function App() {
  const [pop, setPop] = useState(false);
  return (
    <>
      <DataProvider>
        <Header setPop={setPop} />
        <div className="home">
          <Home pop={pop} setPop={setPop} />
        </div>
       <Footer/>
      </DataProvider>
    </>
  );
}

export default App;
