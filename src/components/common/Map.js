import React, { Component } from 'react';
import selectedMarkerIcon from '../../assets/selectedMarker.png';
import userIcon from '../../assets/currentlocation2.png';

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} = require('react-google-maps');

const Map = props => (
  // <GoogleMap ref={map => props.onMapMounted(map)} {...props}>
  <GoogleMap ref={props.onMapMounted} {...props}>
    {props.restrooms.map(restroom => (
      <Marker
        key={restroom._id}
        position={restroom.position}
        icon={restroom.selected == true ? selectedMarkerIcon : props.markerIcon}
        onClick={() => props.onMarkerClick(restroom)}
      />
    ))}
    {props.userLatLng.lat && (
      <Marker
        key={'userLocation'}
        position={props.userLatLng}
        icon={{ url: userIcon }}
      />
    )}
  </GoogleMap>
);

export default withScriptjs(withGoogleMap(Map));
