import { useState } from "react";
import "./App.css";
import LoadingBar from "./components/common/LoadingBar/LoadingBar";
import HeaderBar from "./components/common/OSD/headerBar/headerBar"
import Window from "./components/common/Window/Window";
import Page from "./components/common/Page/Page";

function App() {
  const [loading, setLoading] = useState(true);

  function handlePageLoaded() {
    setLoading(false);
  }

  return (
    <Window>
      <HeaderBar title="Ink-art"></HeaderBar>
      {loading && <LoadingBar type="knight-rider"></LoadingBar>}
      <Page onLoaded={handlePageLoaded}>
      </Page>
    </Window>
  );
}

export default App;
