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
    <Route path='/AboutUs.html' component={CurrentTournament}/>
    <Route path='/ClubPairings.html' component={CurrentTournament}/>
    <Route path='/ClubStandings.html' component={CurrentTournament}/>
    <Route path='/Donors.html' component={CurrentTournament}/>
    <Route path='/EloPerfCalc.html' component={CurrentTournament}/>
    <Route path='/Lessons.html' component={CurrentTournament}/>
    <Route path='/OpenFinal.html' component={CurrentTournament}/>
    <Route path='/RunningATournament.html' component={CurrentTournament}/>
    <Route path='/SeniorFinal.html' component={CurrentTournament}/>
    <Route path='/Template.html' component={CurrentTournament}/>
    <Route path='/TournamentHistory.html' component={CurrentTournament}/>
    <Route path='/UpcomingTournaments.html' component={CurrentTournament}/>
    <Route path='/WhatINeed.html' component={CurrentTournament}/>
  </div>
</Router>
