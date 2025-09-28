import { useRef, useState } from "react";

export const useMain = () => {
  const webViewRef = useRef(null);

  return {
    webViewRef,
  };
};
