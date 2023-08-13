<script lang="ts">
  import { Router, Link, Route, links } from 'svelte-routing';

  import CurrentTournament from './pages/CurrentTournament.svelte';
  import Home from './pages/Home.svelte';

  export let url = '/';
</script>

<Router {url}>
  <div use:links>
    <Route path='/' component={Home}/>
    <Route path='/currentTournament.html' component={CurrentTournament}/>
  </div>
</Router>
