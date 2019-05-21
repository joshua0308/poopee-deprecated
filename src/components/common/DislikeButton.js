import React from 'react';
import '../../App.css';
import dislike from '../../assets/dislike.png';
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
        width: '100px',
        background: props.user.data[0].dislikedColor
      }}
      variant='extended'
      aria-label='Dislike'
      className={classes.fab}
      onClick={props.onClick}
    >
      <img
        src={dislike}
        alt='Dislike Button'
        style={{
          width: '30px'
        }}
      />
      <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
        &nbsp;{props.marker.dislike}
      </span>
    </Fab>
  );
}

LikeButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LikeButton);
