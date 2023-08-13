<script lang="ts">
  import { Router, Route, Link, links } from 'svelte-routing';

  import CurrentTournament from './pages/CurrentTournament.svelte';
  import Home from './pages/Home.svelte';
  import U1600Final from './pages/U1600Final.svelte'

  export let url = '/';
</script>

<Router {url}>
  <nav use:links>
    <Link to="/">Home</Link>
    <Link to="/currentTournament.html">CurrentTournament</Link>
    <Link to="/1600final.html">U1600Final</Link>
  </nav>
  <div>
    <Route path='/' component={Home}/>
    <Route path='/currentTournament.html' component={CurrentTournament}/>
    <Route path='/1600final.html' component={U1600Final}/>
    <!-- <Route path='/aboutUs.html' component={CurrentTournament}/>
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
    <Route path='/whatINeed.html' component={CurrentTournament}/> -->
  </div>
</Router>
