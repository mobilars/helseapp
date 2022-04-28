<script>
    import patient from '$lib/patient';
    import { onMount } from "svelte";

    /**
    * @type {any[]}
    */
    let observations = [];

    onMount(async function () {
          try {
              const response = await fetch('/api/ecg');
              var data = await response.json();
              //console.log(data.pasienter);
              observations = data.ECGs;
              console.log(observations);
          } catch (error) {
              console.log("Error: ", error);
          }
      });

    $patient.name = 'Stridor, Broncho';
</script>

<svelte:head>
    <title>Undersøkelser</title>
</svelte:head>


<nav class="pushpin-demo-nav" data-target="blue">
    <div class="nav-wrapper light-blue">    
        <div class="container">
            <a href="/" class="breadcrumb"><i class="material-icons">home</i></a>
            <a href="/patientlist" class="breadcrumb">Pasientregister</a>
            <a href="/dashboard" class="breadcrumb">{$patient.name}</a>
            <ul id="nav-mobile" class="right">
                <li><a href="/profile">Brukerprofil</a></li>
                <!--<li><a href="https://id.roland.bz/realms/helse/protocol/openid-connect/logout?id_token_hint={}&post_logout_redirect_uri={encodeURIComponent('https://localhost:3000/api/auth/signout?redirect=/')}">Logg ut</a></li>-->
                <li><a href="/api/auth/signout?redirect=/">Logg ut</a></li>
            </ul>
        </div>

    </div>
</nav>


<div class="container">
    <h4>Undersøkelser for Stridor, Broncho</h4>
    <table>
        <thead>
          <tr>
            <th>Dato / tid</th>
            <th>Type</th>
            <th>System</th>
            <th>Undersøkelse</th>
            <th>Se målinger</th>
          </tr>
        </thead>
        <tbody>
        {#each observations as obs}
        <tr>
          <td>{obs.AnnotatedECG.componentOf.timepointEvent.componentOf.subjectAssignment.componentOf.clinicalTrial.activityTime}</td>
          <td><i class="material-icons">insert_chart</i></td>
          <td>EKG</td>
          <td>Hvile</td>
          <td><a href="/ecg?documentId={obs._id}">Se EKG</a></td>
        </tr>
        {/each}
        </tbody>
      </table>

</div>