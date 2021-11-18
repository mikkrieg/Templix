import React, { useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [layoutsVisible, setLayoutsVisible] = useState(false);
    const [homeVisible, setHomeVisible] = useState(true);
    const [layout1, setLayout1] = useState(false);
    const [layout2, setLayout2] = useState(false);
    const [layout3, setLayout3] = useState(false);
    const [animation1, setAnimation1] = useState(null);
    const [animation2, setAnimation2] = useState(null);
    const [animation3, setAnimation3] = useState(null);
    const [modalShow, setModalShow] = useState(false);


  return (
    <AppContext.Provider value=
    {{
      animation1,
      setAnimation1,
      animation2,
      setAnimation2,
      animation3,
      setAnimation3,
      layoutsVisible,
      setLayoutsVisible,
      homeVisible,
      setHomeVisible,
      layout1,
      setLayout1,
      layout2,
      setLayout2,
      layout3,
      setLayout3,
      modalShow,
      setModalShow
      }}
    >
      {children}
    </AppContext.Provider>
  );
}