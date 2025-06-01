import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
} from "react-router";
import "./index.css";

import {  ConvexProviderWithAuth, ConvexReactClient } from "convex/react";
import { Provider } from "react-redux";
import { store } from "./shared/redux/store.ts";
import router from "./components/routes/mainRoutes.tsx";
import { useAuth } from "./shared/hooks/auth/useAuth.ts";
import { Auth0Provider } from "@auth0/auth0-react";

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
    >
    <ConvexProviderWithAuth client={convex} useAuth={useAuth}>
    <Provider store={store}>
      
     <RouterProvider router={router} />
     
      </Provider>
      </ConvexProviderWithAuth>
</Auth0Provider>
</StrictMode>
  
);
