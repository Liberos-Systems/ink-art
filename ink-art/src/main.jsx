import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Theme, ThemePanel } from '@radix-ui/themes';

import "./styles.css";
import '@radix-ui/themes/styles.css';
import 'visage/visage.css'; // Import stylów visage

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme style={{ backgroundColor: 'red' }}>
      <App />
    </Theme>
  </React.StrictMode>,
);