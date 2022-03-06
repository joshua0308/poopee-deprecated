import React, { Component } from 'react';
import Axios from 'axios';
import { dummyRestrooms } from '../dummy';
import Map from './common/Map';
import zoomInMarkerIcon from '../assets/zoomInMarker.png';
import zoomOutMarkerIcon from '../assets/zoomOutMarker.png';
import InfoCard from './common/InfoCardDesktop';
import Confetti from './common/Confetti';
import mapStyles from '../assets/mapStyles.json';

var refs = {
  map: undefined
};

class PageView extends Component {
  state = {
    mapHeight: window.innerHeight,
    isConfettiShown: false,
    isCardShown: false,
    zoom: null,
    markerIcon: zoomOutMarkerIcon,
    selectedMarker: 1,
    user: {
      isLoggedIn: false,
      data: [
        {
          index: 1,
          liked: false,
          disliked: false,
          likedColor: '#ffffff',
          dislikedColor: '#ffffff'
        }
      ]
    },
    restrooms: []
  };

  async componentDidMount() {
    // const { data: restrooms } = await Axios.get(
    //   'https://mysterious-earth-50755.herokuapp.com/api/restrooms'
    // );
    const restrooms = dummyRestrooms;
    this.setState({ restrooms });
  }

  handleMarkerClick = selectedRestroom => {
    let restrooms = [...this.state.restrooms];
    let restroomsIndex = restrooms.indexOf(selectedRestroom);

    // if card is hidden, show clicked card
    // change marker icon to selected
    if (!this.state.isCardShown) {
      // change all restrooms' selected property to false
      for (let i = 0; i < restrooms.length; i++) {
        restrooms[i].selected = false;
      }
      restrooms[restroomsIndex].selected = true;
      this.setState({ restrooms });
      this.setState({ selectedMarker: selectedRestroom.id });
      this.setState({ isCardShown: true });
      return;
    }

    // if card is shown and the user clicks on the same marker, hide card
    // change marker icon from selected to unselected
    if (selectedRestroom.id == this.state.selectedMarker) {
      this.setState({ isCardShown: !this.state.isCardShown });

      restrooms[restroomsIndex].selected = false;
      this.setState({ restrooms });
      return;
    }

    // if card is shown and the user clicks on another marker, show the clicked card
    // change clicked marker to selected
    // change all restrooms' selected property to false
    for (let i = 0; i < restrooms.length; i++) {
      restrooms[i].selected = false;
    }
    this.setState({ selectedMarker: selectedRestroom.id });
    restrooms[restroomsIndex].selected = true;
    this.setState({ restrooms });

    console.log(selectedRestroom);
  };

  // change the marker size when user zooms in or out
  // access zoom level using the map reference
  handleZoomChanged = () => {
    let markerIcon =
      refs.map.getZoom() > 13 ? zoomInMarkerIcon : zoomOutMarkerIcon;
    this.setState({ zoom: refs.map.getZoom() });
    this.setState({ markerIcon });
  };

  handleMapMounted = ref => {
    refs.map = ref;
  };

  handleCloseButton = () => {
    this.setState({ isCardShown: false });
    return;
  };

  // toggle confetti bc when confetti is run: true, user can't click on anything else. so we have to turn it off after confetti is finished.
  handleConfetti = () => {
    this.setState({ isConfettiShown: true });
    setTimeout(() => {
      this.setState({ isConfettiShown: false });
    }, 3500);
    return;
  };

  handleLikeButtonClicked = () => {
    // check user login status
    if (!this.state.user.isLoggedIn) {
      console.log('User not logged in');
    }

    let restrooms = [...this.state.restrooms];
    let index = this.state.selectedMarker;
    let user = { ...this.state.user };

    // if user disliked the bathroom, undo dislike
    if (!this.state.user.data[0].liked && this.state.user.data[0].disliked) {
      restrooms[index].dislike--;
      user.data[0].disliked = false;
      user.data[0].dislikedColor = '#FFFFFF';
      this.setState({ restrooms });
      this.setState({ user });
      return;
    }

    // check if user already liked
    // if liked, undo like
    if (this.state.user.data[0].liked) {
      console.log('Already liked. Unliking.');

      restrooms[index].like--;
      user.data[0].liked = false;
      user.data[0].likedColor = '#FFFFFF';
      this.setState({ restrooms });
      this.setState({ user });
      return;
    }

    // update like #
    restrooms[index].like++;
    this.setState({ restrooms });
    console.log('Liked');

    // update user like status
    user.data[0].liked = true;
    user.data[0].likedColor = '#ffef9e';
    this.setState({ user });

    // show confetti
    this.handleConfetti();
  };

  handleDislikeButtonClicked = () => {
    // check user login status
    if (!this.state.user.isLoggedIn) {
      console.log('User not logged in');
    }

    let restrooms = [...this.state.restrooms];
    let index = this.state.selectedMarker;
    let user = { ...this.state.user };

    // if user liked the bathroom, undo like
    if (!this.state.user.data[0].disliked && this.state.user.data[0].liked) {
      restrooms[index].like--;
      user.data[0].liked = false;
      user.data[0].likedColor = '#FFFFFF';
      this.setState({ restrooms });
      this.setState({ user });
      return;
    }

    // check if user already disliked
    // if disliked, undo
    if (this.state.user.data[0].disliked) {
      console.log('Already disliked.');

      restrooms[index].dislike--;
      user.data[0].disliked = false;
      user.data[0].dislikedColor = '#FFFFFF';
      this.setState({ restrooms });
      this.setState({ user });
      return;
    }

    // update like #
    restrooms[index].dislike++;
    this.setState({ restrooms });
    console.log('Disliked');

    // update user like status
    user.data[0].disliked = true;
    user.data[0].dislikedColor = '#ff8a68';
    this.setState({ user });
  };

  render() {
    return (
      <React.Fragment>
        <div className='MapContainer'>
          <Map
            defaultOptions={{
              disableDefaultUI: true,
              gestureHandling: 'greedy',
              styles: mapStyles
            }}
            onMapMounted={this.handleMapMounted}
            defaultZoom={13}
            defaultCenter={{ lat: 45.5017,
              lng: -73.5673 }}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div style={{ height: `${this.state.mapHeight}px` }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
            onZoomChanged={this.handleZoomChanged}
            restrooms={this.state.restrooms}
            markerIcon={this.state.markerIcon}
            onMarkerClick={this.handleMarkerClick}
          />
        </div>
        <div
          className='CardContainer'
          style={{ position: 'absolute', top: '0px', zIndex: 1 }}
        >
          {this.state.isCardShown && (
            <InfoCard
              className={InfoCard}
              restroom={this.state.restrooms[this.state.selectedMarker]}
              index={this.state.selectedMarker}
              onLikeButtonClicked={this.handleLikeButtonClicked}
              onDislikeButtonClicked={this.handleDislikeButtonClicked}
              user={this.state.user}
              onCloseButton={this.handleCloseButton}
            />
          )}
        </div>
        <div>{this.state.isConfettiShown && <Confetti />}</div>
      </React.Fragment>
    );
  }
}

export default PageView;
