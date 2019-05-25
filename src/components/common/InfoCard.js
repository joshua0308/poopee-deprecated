import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CommentThread from './CommentThread';
import '../../App.css';
import LikeButton from './LikeButton';
import DislikeButton from './DislikeButton';
import closeButton from '../../assets/closeButton.png';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  },
  actions: {
    display: 'flex'
  }
};

function InfoCard(props) {
  const { classes } = props;
  return (
    <Card
      className={classes.card}
      style={{
        display: 'block',
        margin: 'auto',
        position: 'relative',
        height: '220px',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <CardMedia
        style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
        component='img'
        alt='restroom'
        className={classes.media}
        height='90'
        image={props.restroom.image}
        title='restroom'
      />
      <img
        src={closeButton}
        alt='Like Button'
        style={{
          position: 'absolute',
          right: '10px',
          top: '10px',
          width: '25px'
        }}
        onClick={props.onCloseButton}
      />
      <CardContent>
        <Typography gutterBottom variant='h6' component='h1'>
          <span style={{ fontWeight: 'bold' }}>{props.restroom.name}</span>
        </Typography>
        <Typography component='p' style={{ fontSize: '12px' }}>
          {props.restroom.direction}
        </Typography>
        {/* <div style={{ margin: '10px' }}>
          <LikeButton
            onClick={props.onLikeButtonClicked}
            marker={props.restroom}
            user={props.user}
          />
          <DislikeButton
            onClick={props.onDislikeButtonClicked}
            marker={props.restroom}
            user={props.user}
          />
        </div> */}
        {/* <CommentThread /> */}
      </CardContent>
    </Card>
  );
}

InfoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InfoCard);
