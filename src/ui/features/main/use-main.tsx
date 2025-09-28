import { useState } from "react";

export const useMain = () => {
  const [url, setUrl] = useState("https://www.google.com");

  return {
    url,
    setUrl,
  };
};
