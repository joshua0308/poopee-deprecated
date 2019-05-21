import React from 'react';
import ReactSwipe from 'react-swipe';

// let reactSwipeEl;
class CarouselDynamic extends React.Component {
  state = {
    message: 'HI',
    index: 0,
    panes: [
      <div key={1}>PANE 1</div>,
      <div key={2}>PANE 2</div>,
      <div key={3}>PANE 3</div>
    ]
  };

  test = () => {
    console.log(this.reactSwipeEl.getPos());
    // let { panes } = this.state;
    // let length = panes.length + 1;
    // panes.push(<div key={length}>Pane {length}</div>);
    // this.setState({ panes });
    // console.log(panes);
  };

  next = () => {
    this.reactSwipeEl.next();
    // this.setState({ index: this.state.index + 1 });
    // let { panes } = this.state;
    // let length = panes.length + 1;
    // panes.push(<div key={length}>Pane {length}</div>);
    // this.setState({ panes });
    // this.setState({ index: this.state.index + 1 });
    // console.log(this.state.panes);
  };

  prev = () => {
    this.reactSwipeEl.prev();
  };

  render() {
    let { index, panes } = this.state;
    return (
      <div>
        <ReactSwipe
          className='carousel'
          swipeOptions={{
            startSlide: index,
            continuous: true,
            callback: this.test
          }}
          ref={el => (this.reactSwipeEl = el)}
          // key={panes.length}
        >
          {panes}
        </ReactSwipe>
        <button onClick={() => this.prev()}>Previous</button>
        <button onClick={() => this.next()}>Next</button>
      </div>
    );
  }
}

export default CarouselDynamic;
