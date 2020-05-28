import React, { Component } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Forecast from "./Forecast";
import Spinner from "../common/Spinner";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      data: {},
      loader: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (this.state.city === "") {
      toast.error("Please enter a city");
      return;
    }

    // Init Loader
    this.setState({ loader: "loading" });

    // Make get request to API
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://community-open-weather-map.p.rapidapi.com/weather?units=%2522metric%2522%20or%20%2522imperial%2522&mode=JSON&q=${this.state.city}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          },
        }
      )
      .then((res) => {
        this.setState({ data: res.data, city: "", loader: "" });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <div className="row mx-0 my-5">
          <div className="col-md-9 px-0 mx-auto">
            <div className="card">
              <div className="card-body text-center">
                <i className="fas fa-cloud-sun fa-4x"></i>
                <h2 className="mt-3">Weather App</h2>
                <h5 className="mt-3">Get forecast of your city</h5>
                <form className="mt-4" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="form-control shadow-none"
                      placeholder="Enter your city"
                      onChange={this.handleChange}
                      value={this.state.city}
                    />
                  </div>
                  <div className="form-group mb-0">
                    <input
                      type="submit"
                      className="btn btn-secondary btn-block shadow-none"
                      value="Get Forecast"
                    />
                  </div>
                </form>
              </div>
            </div>

            {this.state.loader === "loading" && <Spinner />}

            <div className="row mx-0">
              <div className="col-md-12 px-0">
                <Forecast data={this.state.data} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
