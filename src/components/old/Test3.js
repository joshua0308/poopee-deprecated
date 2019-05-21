import React, { Component } from 'react';
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require('react-google-maps');

// what props will it take?
// googleMapURL
// loadingElement
// containerElement
// mapElement
// defaultZoom
// defaultCenter

class Test3 extends Component {
  constructor(props) {
    super(props);
    state = {
      _map: null
    };
  }

  render() {
    return (
      <div>
        <GoogleMap />
      </div>
    );
  }
}
