export const useHeader = (props: any) => {
  const { setUrl } = props;

  const searchUrl = (search: any) => {
    if (search.startsWith("http://") || search.startsWith("https://")) {
      setUrl(search);
    } else {
      setUrl(`http://${search}`);
    }
  };

  return {
    searchUrl,
  };
};
