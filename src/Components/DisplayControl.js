import React from 'react';
import Home from './Home';

export default class DisplayControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisible: false
    }
  }

  render() {
    let currentlyVisibleState = null;
    if(this.state.formVisible != false) {
      currentlyVisibleState = null
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