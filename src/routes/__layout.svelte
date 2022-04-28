<script>
    import patient from '$lib/patient';
    import { page, session } from "$app/stores";
    import clsx from "clsx";
</script>

  <main>
    <slot />
  </main>

  
  {#if $session?.user}
    <div class="container">
      Session user: {JSON.stringify($session)}
    </div>
  {:else}
    <div class="container">
      Aint no sunshine when she's gone: <a href=/login>Login</a>
    </div>
  {/if}

  <style>
    main {
      width: 100%;
      height: 100%;
    }
  </style>
  