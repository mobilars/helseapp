<script>
  import { onMount } from "svelte";
  /**
  * @type {any[]}
  */
  let patients = [];
  onMount(async function () {
        try {
            const response = await fetch('/api/patient');
            var data = await response.json();
            //console.log(data.pasienter);
            patients = data.patients;
            console.log(patients);
        } catch (error) {
            console.log("Error: ", error);
        }
    });

</script>

<svelte:head>
    <title>Pasientregister</title>
</svelte:head>

<nav class="pushpin-demo-nav" data-target="blue">
  <div class="nav-wrapper light-blue">    
      <div class="container">
          <a href="/" class="breadcrumb"><i class="material-icons">home</i></a>
          <a href="/patientlist" class="breadcrumb">Pasientregister</a>
          <ul id="nav-mobile" class="right">
              <li><a href="/profile">Brukerprofil</a></li>
              <li><a href="/api/auth/signout?redirect=/">Logg ut</a></li>
          </ul>
      </div>

  </div>
</nav>

<div class="container">
    <h4>Pasientregister</h4>
    <div class="row">
        <form class="col s12">
            <div class="row">
                <div class="input-field col s6">
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
                <!--
                <button class="btn waves-effect waves-light" type="submit" name="action">Søk
                    <i class="material-icons right">send</i>
                </button>
                -->
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
          {#each patients as pat}
          <tr>
            <td>{pat.name.family}, {pat.name.given}</td>
            <td>{pat.birthDate}</td>
            <td>{pat.identifiers.find(
// @ts-ignore
            obj => {return obj.type === 'FNR'})?.value }</td>
            <td><a href="/dashboard?patient={pat._id}">Målinger</a></td>
          </tr>
          {/each}
  
        </tbody>
      </table>
</div>