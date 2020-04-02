import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { toggleMenuDrawer } from './store/actions/menuDrawer';
import MenuDrawer from './components/MenuDrawer';
import MainContainer from './components/MainContainer.jsx'
const useStyles = makeStyles((theme: any) => ({
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

function App(props: any) {
  const classes = useStyles();
  useEffect(() => {
    fetch("http://localhost:9000/homepage")
      .then(res => {
        console.log("in homepage");
      })
  }, []);

  return (
    <div>
      <AppBar >
        <Toolbar>
          <IconButton >
            <MenuIcon onClick={props.toggleMenuDrawer} />
          </IconButton>
          <Typography>
            Finance-Broker
        </Typography>
        </Toolbar>
        <Container >
          <MenuDrawer></MenuDrawer>
        </Container>
      </AppBar>
      <MainContainer></MainContainer>
    </div>
  );
}

const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = (dispatch: any) => {
  return ({
    toggleMenuDrawer: () => dispatch(toggleMenuDrawer())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
