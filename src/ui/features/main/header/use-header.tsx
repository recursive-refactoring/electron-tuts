import { useEffect } from "react";

export const useHeader = (props: any) => {
  const { webViewRef, setTabs, tabs } = props;

  const searchUrl = (search: any) => {
    if (search.startsWith("http://") || search.startsWith("https://")) {
      webViewRef.current.src = search;
    } else {
      webViewRef.current.src = `http://${search}`;
    }
  };

  const handleNewWindow = () => {
    const globalWindow: any = window as any;
    const api: any = globalWindow.api;
    api.newWindow();
  };

  const handleGoBack = () => {
    if (webViewRef?.current === null) return;
    webViewRef?.current.goBack();
  };

  const handleGoForward = () => {
    if (webViewRef?.current === null) return;
    webViewRef?.current.goForward();
  };

  const handleGoReload = () => {
    if (webViewRef?.current === null) return;
    webViewRef?.current.reload();
  };

  const switchToTab = (index: number) => {
    const tab = tabs?.[index];
    webViewRef.current.src = tab?.url;
  };

  const handleNewTab = () => {
    if (webViewRef?.current === null) return;
    const newTab = {
      title: `.`,
      url: "https://www.google.com",
    };
    setTabs((prevTabs: any[]) => {
      const updatedTabs = [...prevTabs, newTab];
      return updatedTabs;
    });
  };

  useEffect(() => {
    switchToTab(tabs?.length - 1);
  }, [tabs]);

  return {
    searchUrl,
    handleNewWindow,
    handleGoBack,
    handleGoForward,
    handleGoReload,
    handleNewTab,
  };
};
