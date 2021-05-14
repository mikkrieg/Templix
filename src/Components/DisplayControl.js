import React, {useContext} from 'react';
import Home from './Home';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Layouts from './Layouts';
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';
import { AppContext } from '../AppContext';

export default function DisplayControl() {
  const { 
    aboutVisible,
    setAnimation1,  
    layoutsVisible, 
    layout1,
    layout2,
    layout3 } = useContext(AppContext);

    let currentlyVisibleState = null;

    if(aboutVisible !== false) {
      currentlyVisibleState = <About/>
    } else if(layoutsVisible !== false) {
      currentlyVisibleState = <Layouts />
    } else if(layout1 !== false) {
      currentlyVisibleState = <Layout1 />
    } else if(layout2 !== false) {
      currentlyVisibleState = <Layout2 />
    } else if(layout3 !== false) {
      currentlyVisibleState = <Layout3 />
    } else {
    currentlyVisibleState = <Home/>
    setAnimation1(false);
    }
    console.log(currentlyVisibleState);
    return(
      <>
        <Header/>
        {currentlyVisibleState}
        <Footer/>
      </>
    )
  }