import React from "react";
import "./App.css";
import Particles from "react-particles-js";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Work from "./components/Work";
import Education from "./components/Education";
import Container from "@material-ui/core/Container";
import Skills from "./components/Skills";
class App extends React.Component {
  render() {
    return (
      <d>
        <Particles
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#0349fc",
                  blur: 2,
                },
              },
            },
          }}
          style={{
            width: "100%",
            position: "absolute",
          }}
        />
        <div className="App">
          <Container maxWidth="sm">
            <NavBar />
            <Header />
            <Work />
            <Education />
            <Skills />
          </Container>
        </div>
      </d>
    );
  }
}

export default App;
