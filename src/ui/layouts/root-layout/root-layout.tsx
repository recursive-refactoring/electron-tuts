import { UiThemeProvider } from "@/providers/ui-theme-provider";

export const RootLayout = (props: any) => {
  const { children } = props;
  return <UiThemeProvider>{children}</UiThemeProvider>;
};

export default RootLayout;
