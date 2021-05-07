import React from 'react';
import Home from './Home';
import About from './About';
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
    if(this.state.aboutVisible === null) {
      this.setState({
        formVisible: true,
        homeVisible: false
      })
    }
  }
  render() {
    let currentlyVisibleState = null;
    if(this.state.aboutVisible != false) {
      currentlyVisibleState = <About/>

    } else if(this.state.layoutsVisible != false) {
      currentlyVisibleState = <Layouts />

    } else {
      currentlyVisibleState = <Home/>

    }
    return(
      <>
        {currentlyVisibleState}
      </>
    )
  }
} 