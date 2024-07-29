import React from "react";
import User from "./components/User";
import "./App.css";
import "tachyons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchValue: "",
    };
    console.log('constructor');
  }

  fetchdata = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
      this.setState({ users: data });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = () => {
    console.log('componentDidMount');
    this.fetchdata();
  }

  componentDidUpdate = (prevProps,prevState) => {
    console.log(prevProps,prevState);
    console.log('componentDidUpdate');
  }

  handleSerach = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    console.log('render');
    const filter = this.state.users.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });

    return (
      <div>
        <h1>Users</h1>
        <div>
          <button onClick={this.fetchdata}>Get Users</button>
          <input onChange={this.handleSerach} placeholder='Search...' />
          {this.state.searchValue}
        </div>

        {filter.map((item) => {
          return <User key={item.id} {...item} />;
        })}
      </div>
    );
  }
}

export default App;

/**
Instructions for the Exercise:

1. Create a React app.
2. Import the users.json file from the src folder.
3. Create a User component.
4. Send user information via props to the User component.
5. Display the users, with each user showing their name, email, username, and user's image.
6. For the image source, you can use: https://robohash.org/1?size=150x150.

 */
