import React, { Component } from "react";
import Cruise from "../components/Cruise.js";
import "../styles/CruisesPage.css";

class Cruises extends Component {
  state = { cruises: [] };

  fetchData = () => {
    fetch("data/cruises.json")
      .then(res => res.json())
      .then(cruises => {
        this.setState({ cruises });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const cruises = [...this.state.cruises];
    const cruisesArr = cruises.map(cruise => {
      const { id, name, duration, countries, price, image } = cruise;
      return (
        <Cruise
          key={id}
          id={id}
          name={name}
          duration={duration}
          countries={countries}
          price={price}
          image={image}
        />
      );
    });

    return <div>{cruisesArr}</div>;
  }
}

export default Cruises;
