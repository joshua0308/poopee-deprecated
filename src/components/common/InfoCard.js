import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../../App.css';
import closeButton from '../../assets/closeButton.png';
import joshAvatar from '../../assets/joshAvatar.png';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import CommentThread from './CommentThread';
import LikeButton from './LikeButton';
import DislikeButton from './DislikeButton';
// import redPin from '../../assets/redPin.png';
// import poopeeAvatar from '../../assets/poopeeAvatar.png';

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
        alt='Close Button'
        style={{
          position: 'absolute',
          right: '10px',
          top: '10px',
          width: '25px',
          cursor: 'pointer'
        }}
        onClick={props.onCloseButton}
      />
      <CardContent>
        {/* <div>{props.restroom.name}</div> */}
        {/* <Typography gutterBottom variant='h6' component='h2'> */}
        {/* <Typography component='p' style={{ fontSize: '12px' }}>
        </Typography> */}
        <Typography
          variant='subtitle1'
          style={{ margin: '0px', padding: '0px' }}
        >
          <span style={{ fontWeight: 'bold' }}>{props.restroom.name}</span>
        </Typography>
        {/* <img src={redPin} style={{ width: '15px' }} /> */}
        {props.restroom.direction && (
          <Comment.Group>
            {/* <Header as='h3' dividing /> */}
            <div style={{ height: '100%', overflowY: 'hidden' }}>
              <Comment>
                <Comment.Avatar src={joshAvatar} />
                <Comment.Content>
                  <Comment.Author as='a'>Josh</Comment.Author>
                  <Comment.Metadata>
                    <div>Pinned post by poopee</div>
                  </Comment.Metadata>
                  <Comment.Text>{props.restroom.direction}</Comment.Text>
                </Comment.Content>
              </Comment>
            </div>
          </Comment.Group>
        )}
        <div style={{ margin: '10px' }}>
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
        </div>
        <CommentThread />
      </CardContent>
    </Card>
  );
}

InfoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InfoCard);
