import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useDispatch } from 'react-redux';
import { removeAuthedUser } from '../actions/authedUser';

export default function LogOut() {
  const [userAnchorEl, setUserAnchorEl] = React.useState(null);
  const userMenuOpen = Boolean(userAnchorEl);
  const dispatch = useDispatch();
  const handleUserMenu = (event) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserAnchorEl(null)
  };

  const handleLogOut = () => {
    dispatch(removeAuthedUser())
  }

  return (
    <div>
      <IconButton
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleUserMenu}
        color='inherit'
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={userAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={userMenuOpen}
        onClose={handleUserMenuClose}
      >
        <MenuItem onClick={handleLogOut}>Log out</MenuItem>
      </Menu>
    </div>
  );
}