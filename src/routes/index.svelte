<script>
    import patient from '$lib/patient';
    $patient.name = '';
</script>

<div class="container">
    <h2>Logg in</h2>
    
    <div class="row">
        <div class="input-field col s3">
            <input placeholder="" id="username" type="text" class="validate">
            <label for="username">Brukernavn</label>
          </div>
    </div>
    <div class="row">
        <div class="input-field col s3">
          <input id="password" type="password" class="validate">
          <label for="password">Passord</label>
        </div>
    </div>
    <div class="row">
        <a class="waves-effect waves-light btn" href="/patientlist">Logg inn</a>
    </div>
    <div class="row">
        <a href="/">Glemt passord</a>
    </div>
    
</div>