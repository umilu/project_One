import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import Navigation from "./Navigation";
import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";

function App() {
  const navHandleClick = () => {
    // e.currentTarget.classList.toggle('hamburger--active');
    document.querySelector('.hamburger').classList.toggle('hamburger--active');
    document.querySelector('.main__aside').classList.toggle('main__aside--active');
  };

  return (
    <Router>
      <div className="app">
        <header>
          <Header handleClick={navHandleClick} />
        </header>
        <main className="main">
          <section className="main__page">
            <Page />
          </section>
          <aside className="main__aside">
            <Navigation handleClick={navHandleClick}/>
          </aside>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
