<script>
    import patient from '$lib/patient';
    $patient.name = 'Tone Døv';
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
                <li><a href="/">Brukerprofil</a></li>
                <li><a href="/">Logg ut</a></li>
            </ul>
        </div>

    </div>
</nav>


<div class="container">
    <h4>Undersøkelser for Tone Døv...</h4>
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
          <tr>
            <td>30.03.2022 16:55</td>
            <td><i class="material-icons">insert_chart</i></td>
            <td>EKG</td>
            <td>Hvile</td>
            <td><a href="/ecg">Se EKG</a></td>
          </tr>
          
        </tbody>
      </table>

</div>