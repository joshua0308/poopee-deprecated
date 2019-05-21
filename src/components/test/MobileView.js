import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import Axios from 'axios';
import Map from '../common/Map';
import mapStyles from '../../assets/mapStyles.json';
import zoomInMarkerIcon from '../../assets/zoomInMarker.png';
import zoomOutMarkerIcon from '../../assets/zoomOutMarker.png';
import InfoCard from '../common/InfoCard';

var refs = {
  map: undefined
};

// const mapHeight = window.innerHeight;

class MobileView extends Component {
  state = {
    zoom: null,
    indexBefore: 0,
    index: 0,
    userLatLng: { lat: 40.736362, lng: -73.998695 },
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

  componentWillMount() {
    // find user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        // set state
        const latLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        this.setState({
          userLatLng: latLng
        });
        console.log(latLng);
      });
    }
  }

  async componentDidMount() {
    // find the height of the user's window

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

  handleMapMounted = ref => {
    refs.map = ref;
  };

  handleMarkerClick = restroom => {
    console.log(restroom);
    let restrooms = [...this.state.restrooms];
    let index = restrooms.indexOf(restroom);
    let indexBefore = this.state.index;
    // let index = restroom.id;

    restrooms[indexBefore].selected = false;
    restrooms[index].selected = true;
    this.setState({ indexBefore });
    this.setState({ index });
    this.setState({ isCardShown: true });
    console.log(index);
  };

  handleZoomChanged = () => {
    let markerIcon =
      refs.map.getZoom() > 13 ? zoomInMarkerIcon : zoomOutMarkerIcon;
    this.setState({ zoom: refs.map.getZoom() });
    this.setState({ markerIcon });
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
    return (
      <div>
        <div>
          <Map
            defaultOptions={{
              disableDefaultUI: true,
              gestureHandling: 'greedy',
              styles: mapStyles
            }}
            defaultZoom={15}
            defaultCenter={{
              lng: this.state.userLatLng.lng,
              lat: this.state.userLatLng.lat
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
            onMarkerClick={this.handleMarkerClick}
            userLatLng={this.state.userLatLng}
          />
        </div>

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
    );
  }
}

export default MobileView;
