import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import Navigation from "./Navigation";
import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";

class App extends Component {
  state = { hamburgerActive: false };

  hamburgerHandleClick = () => {
    this.setState(prevState => ({
      hamburgerActive: !prevState.hamburgerActive
    }));
  };

  // documentHandleClick = e => {
  //   if (this.state.hamburgerActive) {
  //     // e.path.forEach(node => console.log(node.classList))
  //     e.path.forEach(node => {
  //       if (node.classList) {
  //         if (node.classList.contains("hamburger")) {
  //           this.hamburgerHandleClick();
  //         }
  //       } else {
  //         return;
  //       }
  //     });
  //   } else {
  //     return;
  //   }
  // };

  documentHandleClick = e => {
    let toBreak = false;
    if (this.state.hamburgerActive) {
      for (let node of e.path) {
        if (node.classList) {
          if (node.classList.contains("hamburger") || node.classList.contains("main__aside")) {
            toBreak = true;
          }
        }
      }
      if (!toBreak) {
        this.hamburgerHandleClick();
      }
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.documentHandleClick);
  }

  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <Header
              handleClick={this.hamburgerHandleClick}
              hamburgerActive={this.state.hamburgerActive}
            />
          </header>
          <main className="main">
            <section className="main__page">
              <Page />
            </section>
            <aside
              className={
                this.state.hamburgerActive
                  ? "main__aside main__aside--active"
                  : "main__aside"
              }
            >
              <Navigation />
            </aside>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
