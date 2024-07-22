import { useState } from "react";
import styles from "./App.module.css";
import { Window, LoadingBar, HeaderBar, Page } from "visage";

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
