import React, { Component } from "react";
import "../styles/HomePage.css";

class Home extends Component {
  state = { cruises: [], howMuchHots: 3, hotsActivesArr: [] };

  fetchData = () => {
    fetch("data/cruises.json")
      .then(res => res.json())
      .then(cruises => {
        this.setState({ cruises });
      });
  };

  componentDidMount() {
    this.fetchData();
    this.setHotsActives();
  }

  setHotsActives = () => {
    const hotsActivesArr = [];
    const { howMuchHots } = this.state;
    for (let i = 0; i < howMuchHots; i++) {
      hotsActivesArr[i] = false;
      this.setState({ hotsActivesArr });
    }
  };

  changeHotsActives = (i, prevState) => {
    const hotsActivesArr = [...prevState];
    hotsActivesArr[i] = !hotsActivesArr[i];
    return hotsActivesArr;
  };

  handleClick = i => {
    this.setState(prevState => {
      return {
        hotsActivesArr: this.changeHotsActives(i, prevState.hotsActivesArr)
      };
    });
  };

  cruisesList = () => {
    const { howMuchHots } = this.state;
    const cruises = [...this.state.cruises];
    const cruisesArr = [];
    for (let i = 0; i < howMuchHots; i++) {
      const { name, image } = cruises[i];
      const cruise = (
        <div className="hot" key={name}>
          <div
            className="hot__img"
            style={{ backgroundImage: `url(${image})` }}
          >
            <button onClick={() => this.handleClick(i)} className="hot__more">
              Więcej
            </button>
          </div>
          <div
            className={
              this.state.hotsActivesArr[i]
                ? "hot__name hot__name--active"
                : "hot__name"
            }
          >
            <h3>{name}</h3>
          </div>
        </div>
      );
      cruisesArr.push(cruise);
    }
    return cruisesArr;
  };

  render() {
    return (
      <>
        <img
          className="main__image"
          src="https://i.imgur.com/UZu9wiQ.jpg"
          alt="start img"
        />
        <div className="hottest">
          <h2>Najpopularniejsze</h2>
          {this.state.cruises.length >= 3 ? this.cruisesList() : null}
        </div>
      </>
    );
  }
}

export default Home;
