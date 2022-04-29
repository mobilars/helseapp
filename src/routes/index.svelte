<script>
    import patient from '$lib/patient';
    import { page, session } from "$app/stores";
    import { signOut as authSignOut } from "sk-auth/client";
    import { goto } from '$app/navigation';
    $patient.name = '';

    function signOut() {
        console.log('signOut');
        authSignOut({basePath: '/'}).then(session.set);
    }

    function gotoPatientList()
    {
        console.log('gotoPatientList');
        goto('/patientlist');
    }

    if ($session?.user) {
        gotoPatientList();
    }
    
</script>

<div class="container">
    <h3>Velkommen</h3> 
    <a class="waves-effect waves-light btn" href="/api/auth/signin/oauth2">Logg inn</a>
</div>