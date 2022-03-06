import React from 'react';
import selectedMarkerIcon from '../../assets/selectedMarker.png';
import userIcon from '../../assets/roundpushpin.png';

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require('react-google-maps');

const Map = props => (
  <GoogleMap ref={props.onMapMounted} {...props}>
    {props.restrooms.map(restroom => {
      return (
      <Marker
        key={restroom._id}
        position={restroom.position}
        icon={restroom.selected == true ? selectedMarkerIcon : props.markerIcon}
        onClick={() => props.onMarkerClick(restroom)}
      />
    )})}
    {props.userLatLng && props.userLatLng.lat && (
      <Marker
        key={'userLocation'}
        position={props.userLatLng}
        icon={{ url: userIcon }}
      />
    )}
  </GoogleMap>
);

export default withScriptjs(withGoogleMap(Map));
