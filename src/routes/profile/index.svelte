<script>
    import { page, session } from "$app/stores";
</script>

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
    <h3>Din profil</h3> 
    <table>
        <tbody>
          <tr>
            <td>Brukernavn:</td>
            <td>{$session.user.connections.oauth.preferred_username}</td>
          </tr>
          <tr>
            <td>Navn:</td>
            <td>{$session.user.connections.oauth.name}</td>
          </tr>
          <tr>
            <td>Epost:</td>
            <td>{$session.user.connections.oauth.email}</td>
          </tr>
          <tr>
            <td>Id: </td>
            <td>{$session.user.connections.oauth.sub}</td>
          </tr>
          <tr><td></td><td></td></tr>
        </tbody>
    </table>
</div>
<p></p>
<div class="container">
    <div><a class="waves-effect waves-light btn blue" href="http://id.roland.bz/realms/helse/account/?referrer=app">Rediger profil</a></div>
</div>