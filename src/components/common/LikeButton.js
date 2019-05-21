import React, { Component } from 'react';
import '../../App.css';
import like from '../../assets/like.png';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  }
};

function LikeButton(props) {
  const { classes } = props;

  return (
    <Fab
      style={{
        margin: '5px',
        // marginRight: '5px',
        width: '100px',
        background: props.user.data[0].likedColor
        // '#e0e0e0'
      }}
      variant='extended'
      aria-label='Like'
      className={classes.fab}
      onClick={props.onClick}
    >
      <img
        src={like}
        alt='Like Button'
        style={{
          width: '30px'
        }}
      />
      <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
        &nbsp;{props.marker.like}
      </span>
    </Fab>
  );
}

LikeButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LikeButton);
