import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import Createnft from "./createnft.js";

const App = () => {
  const connectWallet = async () => {
    try {
      if (!window.solana || !window.solana.isPhantom) {
        alert("Phantom wallet hasn't been installed!");
        return;
      }
      const connected = await window.solana.connect();
      if (connected) {
        alert("Connected succesfully!");
      }
    } catch (error) {
      console.error("Can't conenct!");
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>NFT App</Navbar.Brand>
        <Nav>
          <Nav.Link>About us</Nav.Link>
          <Nav.Link>Blogs</Nav.Link>
          <Nav.Link>Market Place</Nav.Link>
        </Nav>

        <Button onClick={connectWallet} variant="outline-success">
          Connect Wallet
        </Button>
      </Navbar>

      <main>
        Day la phan than
        <Createnft />
      </main>
    </div>
  );
};

export default App;
