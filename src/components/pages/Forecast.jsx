import React from "react";

const Forecast = (props) => {
  return (
    <React.Fragment>
      {props.data.id && (
        <div>
          <div className="row mx-0 mt-4">
            <div className="col-md-6 mx-auto text-center">
              <img
                src={
                  "http://openweathermap.org/img/w/" +
                  props.data.weather[0].icon +
                  ".png"
                }
                alt="img"
                width="100px"
                height="auto"
              />
            </div>
          </div>
          <div className="row mx-0 mt-3">
            <div className="col-md-6 mx-auto text-center">
              <h2>{props.data.weather[0].main} </h2>
              <h5>
                Temperature :{" "}
                {(props.data.main.temp - 273.16).toString().substring(0, 5)} C{" "}
              </h5>
            </div>
          </div>
          <div className="row mx-0 mt-3">
            <div className="col-md-4 mx-auto text-center">
              <h5>Latitude : {props.data.coord.lat} </h5>
            </div>
            <div className="col-md-4 mx-auto text-center">
              <h5>Longitude : {props.data.coord.lon} </h5>
            </div>
          </div>
          <div className="row mx-0 my-3">
            <div className="col-md-4">
              <div className="row mx-0">
                <div className="col-md-6">
                  <h5>Max : </h5>
                </div>
                <div className="col-md-6">
                  <h5>
                    {(props.data.main.temp_max - 273.16)
                      .toString()
                      .substring(0, 5)}{" "}
                    C
                  </h5>
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-md-6">
                  <h5>Min : </h5>
                </div>
                <div className="col-md-6">
                  <h5>
                    {(props.data.main.temp_min - 273.16)
                      .toString()
                      .substring(0, 5)}{" "}
                    C
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row mx-0">
                <div className="col-md-6">
                  <h5>Pressure : </h5>
                </div>
                <div className="col-md-6">
                  <h5>{props.data.main.pressure}</h5>
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-md-6">
                  <h5>Humidity : </h5>
                </div>
                <div className="col-md-6">
                  <h5>{props.data.main.humidity}</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row mx-0">
                <div className="col-md-6">
                  <h5>Wind : </h5>
                </div>
                <div className="col-md-6">
                  <h5>{props.data.wind.speed} Kmph</h5>
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-md-6">
                  <h5>Deg : </h5>
                </div>
                <div className="col-md-6">
                  <h5>{props.data.wind.deg} deg</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Forecast;
