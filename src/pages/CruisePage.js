import React, { Component } from "react";
import { Redirect } from "react-router";
import "../styles/CruisePage.css";

class CruisePage extends Component {
  state = {};

  fetchData = () => {
    fetch("../data/cruises.json")
      .then(res => res.json())
      .then(cruises => {
        this.setState({ cruises });
      });
  };

  componentDidMount() {
    this.fetchData();
    this.setState({ id: this.props.match.params.id });
  }

  checkCruise = () => {
    if (this.state.cruises[this.state.id]) {
      return this.component(this.state.cruises[this.state.id]);
    } else {
      return <Redirect to="/404" />;
    }
  };

  component = (cruise) => {
    return (
      <div className="product">
        <img src={cruise.image} alt={cruise.name} />
        <div className="product__container"><h1>{cruise.name}</h1></div>
      </div>
    );
  };

  render() {
    return <div>{this.state.cruises ? this.checkCruise() : null}</div>;
  }
}

export default CruisePage;
