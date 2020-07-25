import React from "react";
import axios from "axios";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((promise) => this.setState({ user: promise }));
  // }

  // getCustomer = () => {
  //   axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  //     this.setState({ user: res.data });
  //   });
  // };

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState({ user: data });
  }

  render() {
    console.log(this.state.user);
    return (
      <div>
        {this.state.user.map((user) => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
      </div>
    );
  }
}
export default App;
