import React, { Component } from "react";
import { Redirect } from "react-router";
import "../styles/CruisePage.css";

class CruisePage extends Component {
  state = { defOption: "Wybierz termin" };

  fetchData = () => {
    fetch("../data/cruises.json")
      .then(res => res.json())
      .then(cruises => {
        this.setState({ cruises });
      });
  };

  componentDidMount() {
    this.fetchData();
    this.setState({
      id: this.props.match.params.id,
      selected: this.state.defOption
    });
  }

  checkCruise = () => {
    if (this.state.cruises[this.state.id]) {
      return this.component(this.state.cruises[this.state.id]);
    } else {
      return <Redirect to="/404" />;
    }
  };

  selectOptions = () => {
    const defaultOption = (
      <option key={this.state.defOption}>{this.state.defOption}</option>
    );
    const datesRef = this.state.cruises[this.state.id]["dates"];
    const datesArr = [...datesRef];
    const optionsArr = datesArr.map(x => {
      return <option key={x.departure}>{x.departure}</option>;
    });
    optionsArr.unshift(defaultOption);
    return optionsArr;
  };

  handleSelect = e => {
    this.setState({
      selected: e.target.value,
      selectedIndex: e.target.selectedIndex
    });
  };

  component = cruise => {
    return (
      <div className="product">
        <img src={cruise.image} alt={cruise.name} />
        <div className="product__container">
          <h1>{cruise.name}</h1>
          <p>{cruise.description}</p>
          <select
            className="product__select"
            value={this.state.selected}
            onChange={this.handleSelect}
          >
            {this.selectOptions()}
          </select>
          {this.state.selected === this.state.defOption ? null : (
            <ul className="product__details">
              <li>Dzień wyjazdu: {this.state.cruises[this.state.id].dates[this.state.selectedIndex - 1].departure}</li>
              <li>Dzień powrotu: {this.state.cruises[this.state.id].dates[this.state.selectedIndex - 1].homecome}</li>
              <li>Port: {this.state.cruises[this.state.id].dates[this.state.selectedIndex - 1].seaport}</li>
            </ul>
          )}
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.state.cruises ? this.checkCruise() : null}</div>;
  }
}

export default CruisePage;
