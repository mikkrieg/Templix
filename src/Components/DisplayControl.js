import React from 'react';
import Home from './Home';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Layouts from './Layouts';
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';

export default class DisplayControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      aboutVisible: false,
      layoutsVisible: false,
      homeVisible: true,
      layout1Visible: false,
      layout2Visible: false,
      layout3Visible: false
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
      if(this.state.layout1Visible !== false) {
        currentlyVisibleState = <Layout1 />
      } else if(this.state.layout2Visible !== false) {
        currentlyVisibleState = <Layout2 />
      } else if(this.state.layout3Visible !== false) {
        currentlyVisibleState = <Layout3 />
      }
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