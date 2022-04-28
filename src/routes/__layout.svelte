<script>
    import patient from '$lib/patient';
    import { page, session } from "$app/stores";
    import clsx from "clsx";
</script>

  <main>
    
  </main>

  
  {#if $session?.user}
    <!--Session user: {JSON.stringify($session)}-->
    <slot />
  {:else}
    <div class="container">
      <h3>Du er ikke logget inn</h3>
      <a class="waves-effect waves-light btn" href="/api/auth/signin/oauth2">Logg inn</a>
    </div>
  {/if}

  <style>
    main {
      width: 100%;
      height: 100%;
    }
  </style>
  