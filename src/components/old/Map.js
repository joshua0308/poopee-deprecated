import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
// AIzaSyA1qg3OHSHEjNHsL6hg6A-1NX-5lsCFquw
const mapHeight = window.innerHeight;

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyA1qg3OHSHEjNHsL6hg6A-1NX-5lsCFquw&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `${mapHeight}px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultOptions={{ disableDefaultUI: true, gestureHandling: 'greedy' }}
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    onZoomChanged={props.onZoomChanged}
  >
    {props.isMarkerShown && (
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

class Map extends React.PureComponent {
  componentDidMount() {
    this.props.delayedShowMarker();
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.props.isMarkerShown}
        onMarkerClick={this.props.onMarkerClick}
        onZoomChanged={this.props.onZoomChanged}
      />
    );
  }
}

export default Map;
