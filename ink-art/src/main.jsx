import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Theme, ThemePanel } from '@radix-ui/themes';

import "./styles.css";
import '@radix-ui/themes/styles.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme style={{ backgroundColor: 'transparent' }}>
      <App />
    </Theme>
  </React.StrictMode>,
);