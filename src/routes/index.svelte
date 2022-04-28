<script>
    import patient from '$lib/patient';
    import { page, session } from "$app/stores";
    import { signOut as authSignOut } from "sk-auth/client";
    $patient.name = '';

    function signOut() {
        console.log('signOut');
        authSignOut({basePath: '/'}).then(session.set);
    }

</script>

<div class="container">
    <h3>Velkommen</h3> 
    {#if $session?.user}
        Du er logget inn. 
        <p><a class="waves-effect waves-light btn" href="/patientlist">Søk etter pasienter</a></p>
        <p><a class="waves-effect waves-light btn" href="/api/auth/signout?redirect=/">Logg ut</a></p>
    {:else}
        <a class="waves-effect waves-light btn" href="/api/auth/signin/oauth2">Logg inn</a>
    {/if}

</div>