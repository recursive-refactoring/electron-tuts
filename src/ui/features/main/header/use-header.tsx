export const useHeader = (props: any) => {
  const { webViewRef } = props;

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
    else webViewRef?.current.goBack();
  };

  const handleGoForward = () => {
    if (webViewRef?.current === null) return;
    else webViewRef?.current.goForward();
  };

  const handleGoReload = () => {
    if (webViewRef?.current === null) return;
    else webViewRef?.current.reload();
  };

  const handleNewTab = () => {
    if (webViewRef?.current === null) return;
    else webViewRef?.current.reload();
  };

  return {
    searchUrl,
    handleNewWindow,
    handleGoBack,
    handleGoForward,
    handleGoReload,
    handleNewTab,
  };
};
