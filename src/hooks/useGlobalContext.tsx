import React, {
  PropsWithChildren,
  useContext,
  useState,
  RefObject,
  useCallback,
} from "react";

export interface GlobalContextProps {
  scrollTop: number;
  setScrollTop: (y?: number) => void;
  scrollContentRef: RefObject<HTMLDivElement | null>;
  setScrollContentRef: (scrollRef: RefObject<HTMLDivElement>) => void;
}

const GlobalContext = React.createContext<GlobalContextProps>({
  scrollTop: 0,
  setScrollTop: () => {},
  scrollContentRef: React.createRef(),
  setScrollContentRef: () => {},
});

let scrollContentRef = React.createRef<HTMLDivElement | null>();

export const GlobalProvider = (props: PropsWithChildren<{}>) => {
  const [scrollTop, setSTop] = useState<number>(0);

  const setScrollTop = useCallback((y: number = 0) => {
    setSTop(y);
    if (scrollContentRef.current) {
      if ((scrollContentRef.current as HTMLDivElement).scrollTop !== y) {
        (scrollContentRef.current as HTMLDivElement).scrollTop = y;
      }
    }
  }, []);

  const setScrollContentRef = (scrollRef: RefObject<HTMLDivElement>) => {
    if (scrollRef) {
      scrollContentRef = scrollRef;
    }
  };

  return (
    <GlobalContext.Provider
      value={{ scrollTop, setScrollTop, scrollContentRef, setScrollContentRef }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
