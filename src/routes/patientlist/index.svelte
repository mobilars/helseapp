<script>
  import patient from '$lib/patient';
  $patient.name = '';
</script>

<nav class="pushpin-demo-nav" data-target="blue">
  <div class="nav-wrapper light-blue">    
      <div class="container">
          <a href="/" class="breadcrumb"><i class="material-icons">home</i></a>
          <a href="/patientlist" class="breadcrumb">Pasientregister</a>
          <ul id="nav-mobile" class="right">
              <li><a href="/">Brukerprofil</a></li>
              <li><a href="/">Logg ut</a></li>
          </ul>
      </div>

  </div>
</nav>

<div class="container">
    <h4>Pasientregister</h4>
    <div class="row">
        <form class="col s12">
            <div class="row">
                <div class="input-field col s3">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" class="validate">
                    <label for="icon_prefix">Etternavn</label>
                </div>
                <div class="input-field col s3">
                    <i class="material-icons prefix">date_range</i>
                    <input id="birthdate" type="date" class="validate">
                    <label for="birthdate">Fødselsdato</label>
                </div>
                <div class="input-field col s3">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="personnumber" type="number" inputmode="numeric" class="validate">
                    <label for="personnumber">Personnummer</label>
                </div>

                <button class="btn waves-effect waves-light" type="submit" name="action">Søk
                    <i class="material-icons right">send</i>
                </button>
            </div>    
        </form>
      </div>

    <table>
        <thead>
          <tr>
              <th>Navn</th>
              <th>Fødselsdato</th>
              <th>Personnummer</th>
              <th>Se målinger</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Tone</td>
            <td>Døv</td>
            <td>12345 000000</td>
            <td><a href="/dashboard">Målinger</a></td>
          </tr>
          <tr>
            <td>Line</td>
            <td>Danser</td>
            <td>12345 000000</td>
            <td><a href="/dashboard">Målinger</a></td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>12345 000000</td>
            <td><a href="/dashboard">Målinger</a></td>
          </tr>
        </tbody>
      </table>
</div>