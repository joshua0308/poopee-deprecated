import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import instagramButton from '../../assets/instagram.png';

function SideBar(props) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100%',
        width: props.sideBarWidth,
        backgroundColor: '#f7f7f7',
        transition: '0.6s',
        overflowX: 'hidden',
        zIndex: 2
      }}
    >
      <List style={{}}>
        <ListItem button onClick={() => props.onSideBarClose(false)}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary='Close' style={{ padding: 0 }} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <a
            href='https://urlgeni.us/instagram/L6Qu'
            style={{ display: 'flex', flow: 'row wrap', padding: 0, margin: 0 }}
          >
            <ListItemIcon>
              <img
                src={instagramButton}
                style={{ width: '24px', height: '24px' }}
              />
            </ListItemIcon>
            <ListItemText primary='@heypoopee' style={{ padding: 0 }} />
          </a>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
}

export default SideBar;
