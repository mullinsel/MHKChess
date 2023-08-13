<script lang="ts">

  import routes from './routes';
  import Router from 'svelte-spa-router'

  import CurrentTournament from './pages/CurrentTournament.svelte';
  import Home from './pages/Home.svelte';
  import U1600Final from './pages/U1600Final.svelte'

  console.log(routes);
</script>

<Router {routes} />

