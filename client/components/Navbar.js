import React from 'react';
import { Link } from 'react-router-dom';

//MATERIAL UI IMPORTS
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Navbar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={0}>
          <Link to="/" className={classes.link}>
            <Tab label="Home" />
          </Link>

          <Link to="/countries">
            <Tab label="Countries" />
          </Link>

          <Link to="/aircrafts">
            <Tab label="Aircrafts" />
          </Link>
        </Tabs>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navbar);
