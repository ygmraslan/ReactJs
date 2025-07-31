import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Product";
import Container from "./Container";

function App() {
  return (
    <div>
      {/* <Product productName="Ayakkabı" price={3200} />
      <hr />
      <Product productName="Pantolon" price={950} /> */}

      <Container>
        <Product productName="Telefon" price={66000} />
      </Container>
    </div>
  );
}

export default App;
