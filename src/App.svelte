<script lang="ts">
  import { Router, Route, links } from 'svelte-routing';

  import CurrentTournament from './pages/CurrentTournament.svelte';
  import Home from './pages/Home.svelte';

  export let url = '/';
</script>

<Router {url}>
  <div use:links>
    <Route path='/' component={Home}/>
    <Route path='/currentTournament.html' component={CurrentTournament}/>
    <Route path='/1600final.html' component={CurrentTournament}/>
    <Route path='/aboutUs.html' component={CurrentTournament}/>
    <Route path='/clubPairings.html' component={CurrentTournament}/>
    <Route path='/clubStandings.html' component={CurrentTournament}/>
    <Route path='/donors.html' component={CurrentTournament}/>
    <Route path='/elo-perf-calc.html' component={CurrentTournament}/>
    <Route path='/lessons.html' component={CurrentTournament}/>
    <Route path='/openfinal.html' component={CurrentTournament}/>
    <Route path='/runningATournament.html' component={CurrentTournament}/>
    <Route path='/seniorFinal.html' component={CurrentTournament}/>
    <Route path='/template.html' component={CurrentTournament}/>
    <Route path='/tournamentHistory.html' component={CurrentTournament}/>
    <Route path='/upcomingTournaments.html' component={CurrentTournament}/>
    <Route path='/whatINeed.html' component={CurrentTournament}/>
  </div>
</Router>
