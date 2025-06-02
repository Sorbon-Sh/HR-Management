import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import {  ConvexProviderWithAuth, ConvexReactClient } from "convex/react";
import { Provider } from "react-redux";
import { store } from "./shared/redux/store.ts";

import { useAuth } from "./shared/hooks/auth/useAuth.ts";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.tsx";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL!);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN!}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID!}
      authorizationParams={{
        redirect_uri: window.location.origin,
        // audience: "https://your-project.convex.cloud", // или без audience
      }}
        onRedirectCallback={() => {
    window.location.replace("/"); // ← отправим на главную после логина
  }}
    >
    <ConvexProviderWithAuth client={convex} useAuth={useAuth}>
    <Provider store={store}>   
     <App />
      </Provider>
      </ConvexProviderWithAuth>
</Auth0Provider>
</StrictMode>
  
);
