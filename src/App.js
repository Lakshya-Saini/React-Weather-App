import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Index from "./components/pages/Index";
import Navbar from "./components/common/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <ToastContainer />
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
