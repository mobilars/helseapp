<script context="module">
    import { dev } from "$app/env";
    import clsx from "clsx";
  
    export const hydrate = dev;
  </script>
  
  <div class="container">
    <h3>Log in</h3>
    <p><a href="/api/auth/signin/google">Sign in with Google</a></p>
    <p><a href="/api/auth/signin/oauth2">Sign in with Helse</a></p>
  </div>
  