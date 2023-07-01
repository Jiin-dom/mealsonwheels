import React, { Component } from "react";

class Location extends Component {
  state = {
    destinationAddress: "",
    distance: null,
  };

  componentDidMount() {
    // Replace "storeAddress" with the address of your store
    this.storeAddress = "123 Main St, City, Country";
  }

  handleAddressChange = (event) => {
    this.setState({ destinationAddress: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { destinationAddress } = this.state;

    if (destinationAddress) {
      // Initialize the Distance Matrix service
      const service = new window.google.maps.DistanceMatrixService();

      // Create a Distance Matrix request
      service.getDistanceMatrix(
        {
          origins: [this.storeAddress],
          destinations: [destinationAddress],
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        this.callback
      );
    }
  };

  callback = (response, status) => {
    if (status === "OK") {
      const distance = response.rows[0].elements[0].distance.value; // Distance in meters

      // Convert distance to kilometers
      const distanceInKm = distance / 1000;

      this.setState({ distance: distanceInKm });
    } else {
      console.log("Error:", status);
    }
  };

  render() {
    const { destinationAddress, distance } = this.state;

    return (
      <div>
        <div className="container mt-5" style={{ fontFamily: "Satoshi"}}>
          <div className="d-flex justify-content-center">
            {/* Add this container with flexbox */}
            <div
              className="card shadow"
              style={{ width: "800px", borderRadius: "4%", padding: "10px" }}
            >
              <div className="card-body">
                <h5
                  className="card-title mb-4"
                  style={{ fontSize: "30px", color: "black", fontFamily: "Satoshi" }}
                >
                  Location
                </h5>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      id="address"
                      placeholder="Enter your address"
                      required
                      value={destinationAddress}
                      onChange={this.handleAddressChange}
                    />
                  </div>
                  <div className="map-container">
                    {/* Replace "YOUR_API_KEY" with your actual Google Maps API key */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.04280196614!2d123.90935737450371!3d10.338459889784923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a998e133925eeb%3A0xfeda037a6ba9d730!2sUniversity%20of%20Cebu%20-%20Banilad%20Campus!5e0!3m2!1sen!2sph!4v1688033971842!5m2!1sen!2sph"
                      width="100%"
                      height="300"
                      className="rounded"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Map"
                    ></iframe>
                  </div>
                  <button type="submit" className="btn btn-warning mt-4">
                    Confirm Address
                  </button>
                  {distance !== null && (
                    <p className="mt-2">
                      {distance > 10
                        ? "The distance is more than 10 kilometers."
                        : "The distance is less than or equal to 10 kilometers."}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
