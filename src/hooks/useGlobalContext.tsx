import React, {
  PropsWithChildren,
  useContext,
  useState,
  RefObject,
  useCallback,
} from "react";

export interface GlobalContextProps {}

const GlobalContext = React.createContext<GlobalContextProps>({});

export const GlobalProvider = (props: PropsWithChildren<{}>) => {
  return (
    <GlobalContext.Provider value={{}}>{props.children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
