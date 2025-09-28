import "./App.css";
import { Main } from "./features";
import { MainLayout, RootLayout } from "./layouts";

function App() {
  return (
    <RootLayout>
      <MainLayout>
        <Main />
      </MainLayout>
    </RootLayout>
  );
}

export default App;
