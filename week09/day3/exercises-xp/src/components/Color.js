import { Component } from "react";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      // alert("useEffect reached");
      console.log("after update");
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change color</button>
      </>
    );
  }
}

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true,
    };
  }

  componentWillUnmount() {
    alert("This component will unmount");
  }

  dontShow = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <header>
        {this.state.show && <h1>Hello World!</h1>}
        <button onClick={this.dontShow}>Delete Header</button>
      </header>
    );
  }
}

export { Color, Child };