import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { Provider } from "react-redux";
import { store } from "./shared/redux/store.ts";
import App from "./App.tsx";
import { AppInitializer } from "./components/layouts/AppInitializer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AppInitializer>
        <App />
      </AppInitializer>
    </Provider>
  </StrictMode>,
);
