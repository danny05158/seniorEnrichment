import React from 'react';
import { Link } from 'react-router-dom';

//MATERIAL UI IMPORTS
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
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
          <Tab label="Home" />
            <Link to="/" />
          <Tab label="Item Three" />
        </Tabs>

        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
          </Typography>

          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link to="/countries">Countries</Link>
          </Typography>

          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link to="/aircrafts">Aircrafts</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navbar);
