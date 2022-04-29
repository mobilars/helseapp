import { SvelteKitAuth, type JWT , type Session} from "sk-auth";
import {
  OAuth2Provider,
  GoogleOAuth2Provider,
} from "sk-auth/providers";
import { TokenClass, updateLanguageServiceSourceFile } from "typescript";

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
    signIn() {
      console.log("signIn");
      return true;
    },
    jwt(token, profile) {
      //console.log('jwt');
      var date = new Date();
      //console.log("Time:        ", date.getTime());
      //console.log('Expiry time: ', token?.exp);
      if (token?.exp < date.getTime()/1000) {
        console.log("Token expired");
        return {} as JWT;
      }
      //console.log("token: ", JSON.stringify(token));
      //console.log("profile: ", JSON.stringify(profile));
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
      //console.log("Redirecting to:", url);
      return "/patientlist";
    },
    session(token: JWT, session: Session) {
      //console.log('session')
      var date = new Date();
      //console.log("Time:        ", date.getTime()/1000);
      //console.log('Expiry time: ', token?.exp);
      if (token?.exp < date.getTime()/1000) {
        console.log("Token expired");
        return {} as Session;
      }
      //console.log("Session:", JSON.stringify(session));
      //console.log("Token:", JSON.stringify(token));
      return session;
    },

  },
  jwtSecret: import.meta.env.VITE_JWT_SECRET_KEY,
});
