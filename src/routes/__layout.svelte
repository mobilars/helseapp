<script>
    import patient from '$lib/patient';
</script>

<!--
<nav class="pushpin-demo-nav" data-target="blue">
    <div class="nav-wrapper light-blue">
      <div class="container">
        <a href="/" class="brand-logo">Web applikasjon</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/">Brukerprofil</a></li>
          <li><a href="/patientlist">Pasientregister</a></li>
          <li><a href="/dashboard">{$patient.name}</a></li>
        </ul>
      </div>
    </div>
  </nav>
-->
  <main>
    <slot />
  </main>
  
  <style>
    main {
      width: 100%;
      height: 100%;
    }
  </style>
  