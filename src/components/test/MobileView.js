import React, { Component } from 'react';
import Axios from 'axios';
import Map from '../common/Map';
import mapStyles from '../../assets/mapStyles.json';
import zoomInMarkerIcon from '../../assets/zoomInMarker.png';
import zoomOutMarkerIcon from '../../assets/zoomOutMarker.png';
import InfoCard from '../common/InfoCard';
import NavigationIcon from '@material-ui/icons/Navigation';
import SideBar from '../common/SideBar';
import Fab from '@material-ui/core/Fab';
import sideBarButton from '../../assets/sidenavbar.png';
// import ReactSwipe from 'react-swipe';

var refs = {
  map: undefined
};

// const mapHeight = window.innerHeight;

class MobileView extends Component {
  state = {
    // sideBarOpen: false,
    sideBarWidth: '0px',
    zoom: null,
    indexBefore: 0,
    index: 0,
    userLatLng: { lat: null, lng: null },
    currentLatLng: { lat: 40.7308, lng: -73.997541 },
    isCardShown: false,
    rerender: null,
    panes: [],
    mapHeight: window.innerHeight,
    mapWidth: window.innerWidth,
    markerIcon: zoomInMarkerIcon,
    restrooms: [],
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
    }
  };

  async componentDidMount() {
    // find the height of the user's window
    let userLatLng;
    if (navigator.geolocation) {
      console.log('Inside if statement');
      navigator.geolocation.getCurrentPosition(position => {
        console.log('Inside getCurrentPosition');
        userLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log('lat: ' + userLatLng.lat, 'lng: ' + userLatLng.lng);
        this.setState({ userLatLng });
      });
    }

    // import restrooms from backend in mongodb
    try {
      // get restroom data from backend
      const { data: restrooms } = await Axios.get(
        'https://mysterious-earth-50755.herokuapp.com/api/restrooms'
      );
      this.setState({ restrooms });

      // create panes with restroom data
      const panes = this.createPanes(restrooms);
      this.setState({ panes });
      // console.log(panes);
    } catch (e) {
      console.error(e);
    }
  }

  handleFindMyLocation = () => {
    if (this.state.userLatLng.lat == null) {
      alert(
        'Please give it a few seconds...\n\n*Make sure you enabled location service in your settings*'
      );
    } else {
      this.setState({ currentLatLng: this.state.userLatLng });
    }
  };

  handleSideBar = status => {
    if (status) {
      this.setState({ sideBarWidth: '170px' });
    } else {
      this.setState({ sideBarWidth: '0px' });
    }
    console.log('sidebar button clicked');
  };

  handleMapMounted = ref => {
    refs.map = ref;
  };

  handleMarkerClick = restroom => {
    console.log(restroom);
    let restrooms = [...this.state.restrooms];
    let index = restrooms.indexOf(restroom);
    let indexBefore = this.state.index;

    restrooms[indexBefore].selected = false;
    restrooms[index].selected = true;
    this.setState({ indexBefore });
    this.setState({ index });
    this.setState({ isCardShown: true });
    console.log(index);
  };

  handleZoomChanged = () => {
    let markerIcon =
      refs.map.getZoom() > 14 ? zoomInMarkerIcon : zoomOutMarkerIcon;
    this.setState({ zoom: refs.map.getZoom() });
    this.setState({ markerIcon });
  };

  handleCenterChanged = () => {
    let center = refs.map.getCenter();
    let currentLatLng = { lat: center.lat(), lng: center.lng() };
    this.setState({ currentLatLng });
    // console.log(userLatLng);
  };

  createPanes = restrooms => {
    const panes = Array.apply(null, Array(restrooms.length)).map((_, i) => {
      return (
        <div key={i}>
          <div style={{ padding: '5px' }}>
            <InfoCard
              className={InfoCard}
              restroom={restrooms[i]}
              index={i}
              // onLikeButtonClicked={() => {
              //   console.log('Like button');
              // }}
              // onDislikeButtonClicked={() => {
              //   console.log('Dislike button');
              // }}
              user={this.state.user}
              onCloseButton={() => {
                console.log('Close button');
                this.setState({ isCardShown: false });
              }}
            />
          </div>
        </div>
      );
    });

    return panes;
  };

  render() {
    // var sideNavBarStyle = ;
    // var sideBarStyle = ;
    return (
      <div>
        <div className='mapDiv'>
          <Map
            defaultOptions={{
              disableDefaultUI: true,
              gestureHandling: 'greedy',
              styles: mapStyles
            }}
            defaultZoom={16}
            center={{
              lng: this.state.currentLatLng.lng,
              lat: this.state.currentLatLng.lat
            }}
            googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyA1qg3OHSHEjNHsL6hg6A-1NX-5lsCFquw&v=3.exp&libraries=geometry,drawing,places'
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div style={{ height: `${this.state.mapHeight}px` }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
            onMapMounted={this.handleMapMounted}
            restrooms={this.state.restrooms}
            markerIcon={this.state.markerIcon}
            onZoomChanged={this.handleZoomChanged}
            onCenterChanged={this.handleCenterChanged}
            onMarkerClick={this.handleMarkerClick}
            userLatLng={this.state.userLatLng}
          />
        </div>
        <SideBar
          className='sideNavBar'
          sideBarWidth={this.state.sideBarWidth}
          onSideBarClose={this.handleSideBar}
        />
        <div className='sideBarButton'>
          <Fab
            variant='extended'
            aria-label='Delete'
            style={{
              position: 'absolute',
              padding: 0,
              top: '1em',
              right: '1em',
              zIndex: 1,
              backgroundColor: '#FFD600',
              color: '#5D4037'
            }}
            onClick={() => {
              this.handleSideBar(true);
            }}
          >
            <img src={sideBarButton} style={{ width: '48px' }} />
          </Fab>
        </div>
        <div className='findMyLocationButton'>
          <Fab
            variant='extended'
            aria-label='Delete'
            style={{
              position: 'absolute',
              padding: 0,
              top: '6em',
              right: '1em',
              zIndex: 1,
              backgroundColor: '#FFD600',
              color: '#5D4037',
              transform: 'rotate(-45deg)'
            }}
            onClick={this.handleFindMyLocation}
          >
            <NavigationIcon />
          </Fab>
          {this.state.isCardShown && (
            <div
              style={{
                margin: '0 auto',
                width: '100%',
                position: 'absolute',
                bottom: '0px',
                zIndex: 1
              }}
            >
              {this.state.panes[this.state.index]}
              {/* <ReactSwipe
              ref={reactSwipe => (this.reactSwipe = reactSwipe)}
              className='mySwipe'
              swipeOptions={{
                startSlide: this.state.index,
                disableScroll: false,
                continuous: true,
                widthOfSiblingSlidePreview: 10
                // transitionEnd: (index, element) =>
                //   this.showSelectedMarker(index)
              }}
            >
              {this.state.panes}
            </ReactSwipe> */}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MobileView;
