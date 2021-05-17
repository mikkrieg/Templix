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
    layout2,
    layout3,
    setLayoutsVisible, 
    setLayout1,
    setLayout2,
    setLayout3 } = useContext(AppContext);

    function handleBackClick() {
      setLayoutsVisible(true);
      setLayout1(false);
      setLayout2(false);
      setLayout3(false);
    }

    let currentlyVisibleState = null;
    let headerVisible = null;
    let footerVisible = null;
    
    if(aboutVisible !== false) {
      currentlyVisibleState = <About/>
      headerVisible = <Header/>
      footerVisible = <Footer/>
    } else if(layoutsVisible !== false) {
      currentlyVisibleState = <Layouts />
      headerVisible = <Header/>
      footerVisible = <Footer/>
    } else if(layout1 !== false) {
      currentlyVisibleState = <Layout1 handleBackClick={handleBackClick}/>
    } else if(layout2 !== false) {
      currentlyVisibleState = <Layout2 handleBackClick={handleBackClick}/>
    } else if(layout3 !== false) {
      currentlyVisibleState = <Layout3 handleBackClick={handleBackClick}/>
    } else {
    currentlyVisibleState = <Home/>
    headerVisible = <Header/>
    footerVisible = <Footer/>
    }
    return(
      <>
        {headerVisible}
        {currentlyVisibleState}
        {footerVisible}
      </>
    )
  }