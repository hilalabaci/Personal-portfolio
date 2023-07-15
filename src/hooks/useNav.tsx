import { useEffect, useRef } from "react";
import useOnScreen from "./useOnScreen";
import { useNavContext } from "../contexts/NavContext";

const useNav = <T extends HTMLElement>(activeLinkId: string) => {
  const ref = useRef<T>(null);
  const { setActiveLinkId } = useNavContext();

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) setActiveLinkId(activeLinkId);
  }, [isOnScreen, setActiveLinkId, activeLinkId]);
  return ref;
};

export default useNav;
