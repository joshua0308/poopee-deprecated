import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactSwipe from 'react-swipe';
import InfoCard from '../common/InfoCard';

const imageStyles = {
  margin: '0 auto',
  width: '60%',
  height: '200px',
  backgroundColor: 'green',
  fontSize: '50px',
  textAlign: 'center'
};

const restrooms = [
  {
    name: 'Starbucks',
    position: { lat: 40.73862, lng: -73.994366 },
    index: 0,
    like: 0,
    dislike: 0,
    selected: false,
    image:
      'https://s20998.pcdn.co/wp-content/uploads/2018/03/Starbucks_cup-1024x586.jpg'
  },
  {
    name: 'Think Coffee',
    position: { lat: 40.73562, lng: -73.994066 },
    index: 1,
    like: 10,
    dislike: 10,
    selected: false,
    image: 'https://pbs.twimg.com/media/DKBBnBGWAAAZO29.jpg'
  },
  {
    name: 'The Bean',
    position: { lat: 40.7382, lng: -74 },
    index: 2,
    like: 20,
    dislike: 20,
    selected: false,
    image:
      'https://i.pinimg.com/originals/51/98/7e/51987e34a05a8d773259d416ca2424b1.jpg'
  }
];

const user = {
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
};

// generate slide panes
const numberOfSlides = 3;
const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
  return (
    <div key={i}>
      <div style={{ padding: '5px' }}>
        <InfoCard
          className={InfoCard}
          restroom={restrooms[i]}
          index={i}
          onLikeButtonClicked={() => {
            console.log('like button');
          }}
          onDislikeButtonClicked={() => {
            console.log('dislike button');
          }}
          user={user}
          onCloseButton={() => {
            console.log('close button');
          }}
        />
      </div>
    </div>
  );
});

// change Swipe.js options by query params
const startSlide = 0;

class Carousel extends Component {
  state = {
    index: 0,
    panes: paneNodes
  };

  next = () => {
    this.reactSwipe.next();
    // this.setState({ index: this.state.index + 1 });
  };

  prev = () => {
    this.reactSwipe.prev();
    // this.setState({ index: this.state.index - 1 });
  };

  test = () => {
    let { panes } = this.state;
    let length = panes.length;
    panes.push(
      <div key={length}>
        <InfoCard
          className={InfoCard}
          marker={restrooms[2]}
          index={2}
          onLikeButtonClicked={() => {
            console.log('like button');
          }}
          onDislikeButtonClicked={() => {
            console.log('dislike button');
          }}
          user={user}
          onCloseButton={() => {
            console.log('close button');
          }}
        />
      </div>
    );
    this.setState({ panes });
  };

  render() {
    return (
      <div
        className='center'
        style={{ margin: '0 auto', width: '340px', backgroundColor: 'blue' }}
      >
        <ReactSwipe
          // childCount={this.state.panes.length}
          ref={reactSwipe => (this.reactSwipe = reactSwipe)}
          className='mySwipe'
          swipeOptions={{
            startSlide: 0,
            disableScroll: false,
            continuous: true,
            widthOfSiblingSlidePreview: 10
            // speed: 300,
            // transitionEnd: this.test
          }}
        >
          {this.state.panes}
        </ReactSwipe>

        <div style={{ textAlign: 'center', margin: '0 auto' }}>
          <button type='button' onClick={() => this.prev()}>
            Prev
          </button>
          <button type='button' onClick={() => this.next()}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
// render(<Page />, document.getElementById("root"));
