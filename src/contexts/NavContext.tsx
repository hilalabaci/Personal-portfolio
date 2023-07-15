import React, { createContext, useContext, useState } from "react";

const NavContext = createContext({
  activeLinkId: "",
  setActiveLinkId: (_: string) => {},
});

type NavProviderProps = { children?: React.ReactElement };

const NavProvider = ({ children }: NavProviderProps) => {
  const [activeLinkId, setActiveLinkId] = useState<string>("");
  return (
    <NavContext.Provider value={{ activeLinkId, setActiveLinkId }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);

export default NavProvider;
