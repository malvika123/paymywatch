import AppRoutes from "./Router/AppRoutes";
import Welcome from "./Welcome/Welcome";
import { BrowserRouter as Router } from "react-router-dom";
import { Component } from "react";

class Main extends Component {
  onUnload = (e) => {
    e.preventDefault();
    alert("hi");
  };
  componentDidMount() {
    window.addEventListener("beforeunload", this.onUnload);
  }
  // constructor() {
  //   if (window.performance) {
  //     if (performance.navigation.type == 0) {
  //       alert("This page is reloaded");
  //     } else {
  //       alert("This page is not reloaded");
  //     }
  //   }
  //   super();
  // }
  render() {
    return (
      <Router>
        <div className="welcomeNote">
          <Welcome />
          <AppRoutes />
        </div>
      </Router>
    );
  }
}

export default Main;
