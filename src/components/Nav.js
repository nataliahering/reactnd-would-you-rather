import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [pageTitle, setPageTitle] = useState('Home');
  const isLoggedIn = useSelector(state => state.authedUser !== null);

  const closeMenu = () => {
    setAnchorEl(null);
  }

  const handleClick = (event) => {
    isLoggedIn && setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    closeMenu()
  };

  const handleHomeClicked = () => {
    history.push('/home')
    setPageTitle('Home')
    closeMenu()
  };

  const handleLeaderboardClicked = () => {
    history.push('/leaderboard')
    setPageTitle('Leaderboard')
    closeMenu()
  };

  const handleAddQuestionClicked = () => {
    history.push('/add')
    setPageTitle('Add Question')
    closeMenu()
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          { isLoggedIn &&
            <Fragment>
              <Typography variant="h6" className={classes.title}>
                {pageTitle}
              </Typography>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleHomeClicked}>Home</MenuItem>
                <MenuItem onClick={handleLeaderboardClicked}>Leaderboard</MenuItem>
                <MenuItem onClick={handleAddQuestionClicked}>Add Question</MenuItem>
              </Menu>
            </Fragment>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}