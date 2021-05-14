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
    layoutsVisible, 
    layout1,
    setLayout1,
    layout2,
    setLayout2,
    layout3,
    setLayout3 } = useContext(AppContext);

    let currentlyVisibleState = null;

    if(aboutVisible !== false) {
      currentlyVisibleState = <About/>
    } else if(layoutsVisible !== false) {
      currentlyVisibleState = <Layouts />
      if(layout1 !== false) {
        currentlyVisibleState = <Layout1 />
      } else if(layout2 !== false) {
        currentlyVisibleState = <Layout2 />
      } else if(layout3 !== false) {
        currentlyVisibleState = <Layout3 />
      }
    } else {
      currentlyVisibleState = <Home/>
    }
    return(
      <>
        <Header/>
        {currentlyVisibleState}
        <Footer/>
      </>
    )
  }