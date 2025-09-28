import { useRef, useState } from "react";

export const useMain = () => {
  const webViewRef = useRef(null);
  const [tabs, setTabs] = useState([{ title: "1", url: "about:blank" }]);

  return {
    webViewRef,
    tabs,
    setTabs,
  };
};
