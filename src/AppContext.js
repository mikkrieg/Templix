import React, { useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [aboutVisible, setAboutVisible] = useState(false);
    const [layoutsVisible, setLayoutsVisible] = useState(false);
    const [homeVisible, setHomeVisible] = useState(true);
    const [layout1, setLayout1] = useState(false);
    const [layout2, setLayout2] = useState(false);
    const [layout3, setLayout3] = useState(false);


  return (
    <AppContext.Provider value=
    {{
      aboutVisible,
      setAboutVisible,
      layoutsVisible,
      setLayoutsVisible,
      homeVisible,
      setHomeVisible,
      layout1,
      setLayout1,
      layout2,
      setLayout2,
      layout3,
      setLayout3
      }}
    >
      {children}
    </AppContext.Provider>
  );
}