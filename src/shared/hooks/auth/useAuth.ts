// src/auth/useAuth.ts
import { useAuth0 } from "@auth0/auth0-react";

export const useAuth = () => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  return {
    isAuthenticated,
    isLoading,
    fetchAccessToken: async ({ forceRefreshToken }: { forceRefreshToken: boolean }) => {
      try {
        const token = await getAccessTokenSilently({
          cacheMode: forceRefreshToken ? "off" : "on",
        });
        return token;
      } catch {
        return null;
      }
    },
  };
};
