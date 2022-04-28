import { SvelteKitAuth } from "sk-auth";
import {
  OAuth2Provider,
  GoogleOAuth2Provider,
} from "sk-auth/providers";

export const appAuth = new SvelteKitAuth({
  providers: [
    new GoogleOAuth2Provider({
      clientId: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_SECRET,
      profile(profile) {
        return { ...profile, provider: "google" };
      },
    }),
    new OAuth2Provider({
      id: 'oauth2',
      clientId: import.meta.env.VITE_OAUTH_CLIENT_ID,
      clientSecret: import.meta.env.VITE_OAUTH_CLIENT_SECRET,
      authorizationUrl: import.meta.env.VITE_OAUTH_AUTHORIZATION_URL,
      scope: import.meta.env.VITE_OAUTH_CLIENT_SCOPE,
      accessTokenUrl: import.meta.env.VITE_OAUTH_ACCESS_TOKEN_URL,
      profileUrl: import.meta.env.VITE_OAUTH_PROFILE_URL,
      contentType: 'application/x-www-form-urlencoded',
      profile(profile) {
        return { ...profile, provider: "oauth" };
      },
    }),
  ],
  callbacks: {
    jwt(token, profile) {
      if (profile?.provider) {
        const { provider, ...account } = profile;
        token = {
          ...token,
          user: {
            ...(token.user ?? {}),
            connections: { ...(token.user?.connections ?? {}), [provider]: account },
          },
        };
      }

      return token;
    },
    redirect(url: string) {
      console.log("Redirecting to:", url);
      return "/patientlist";
    }
  },
  jwtSecret: import.meta.env.VITE_JWT_SECRET_KEY,
});
