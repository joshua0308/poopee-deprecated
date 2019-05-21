import React from 'react';
const { compose, withProps, withState, withHandlers } = require('recompose');
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} = require('react-google-maps');

const addState = withState('zoom', 'onZoomChange', 8);
const addProps = withProps({
  googleMapURL:
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyA1qg3OHSHEjNHsL6hg6A-1NX-5lsCFquw&v=3.exp&libraries=geometry,drawing,places',
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />
});
const addHandlers = withHandlers(() => {
  const refs = {
    map: undefined
  };

  return {
    onMapMounted: () => ref => {
      refs.map = ref;
    },
    onZoomChanged: ({ onZoomChange }) => () => {
      onZoomChange(refs.map.getZoom());
      console.log(refs.map);
      console.log(refs.map.getZoom());
    }
  };
});

const Test = compose(
  addProps,
  addState,
  addHandlers,
  withScriptjs,
  withGoogleMap
)(googleMap);

function googleMap(props) {
  return (
    <GoogleMap
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      zoom={props.zoom}
      ref={props.onMapMounted}
      onZoomChanged={props.onZoomChanged}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={props.onToggleOpen}
      >
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>Controlled zoom: {props.zoom}</div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  );
}

export default Test;
