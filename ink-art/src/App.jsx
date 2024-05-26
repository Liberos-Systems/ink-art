import { useState } from "react";
import styles from "./App.module.css";
import LoadingBar from "./components/common/LoadingBar/LoadingBar";
import HeaderBar from "./components/common/OSD/headerBar/headerBar";
import Window from "./components/common/Window/Window";
import Page from "./components/common/Page/Page";

function App() {
  const [loading, setLoading] = useState(true);

  function handlePageLoaded() {
    setLoading(false);
  }

  return (
    <Window>
      <HeaderBar title="Ink-art" />
      {loading && <LoadingBar type="knight-rider" />}
      <Page onLoaded={handlePageLoaded} />
    </Window>
  );
}

export default App;
