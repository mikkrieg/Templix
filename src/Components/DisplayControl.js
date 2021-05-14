import React from 'react';
import Home from './Home';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Layouts from './Layouts';

export default class DisplayControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      aboutVisible: false,
      layoutsVisible: false,
      homeVisible: true,
    }
  }


  handleAboutClick = () => {
      this.setState({
        aboutVisible: true,
        homeVisible: false,
        layoutsVisible: false
      })
  }

  handleHomeClick = () => {
    this.setState({
      homeVisible: true,
      aboutVisible: false,
      layoutsVisible: false
    })
  }

  handleLayoutsClick = () => {
    this.setState({
      layoutsVisible: true,
      aboutVisible: false,
      homeVisible: false
    })
  }

  render() {
    let currentlyVisibleState = null;
    if(this.state.aboutVisible !== false) {
      currentlyVisibleState = <About/>
    } else if(this.state.layoutsVisible !== false) {
      currentlyVisibleState = <Layouts />
    } else {
      currentlyVisibleState = <Home layoutClick={this.handleLayoutsClick}/>
    }
    return(
      <>
        <Header aboutClick={this.handleAboutClick} homeClick={this.handleHomeClick} layoutClick={this.handleLayoutsClick}/>
        {currentlyVisibleState}
        <Footer/>
      </>
    )
  }
} 