<script lang="ts">
  import Router from 'svelte-spa-router';

  import Home from './pages/Home.svelte';
  import CurrentTournament from './pages/CurrentTournament.svelte';
  import U1600Final from './pages/U1600Final.svelte';
  import AboutUs from './pages/AboutUs.svelte';
  import UpcomingTournaments from './pages/UpcomingTournaments.svelte';
  import TournamentHistory from './pages/TournamentHistory.svelte';
  import WhatINeed from './pages/WhatINeed.svelte';
  import ClubPairings from './pages/ClubPairings.svelte';
  import ClubStandings from './pages/ClubStandings.svelte';
  import OpenFinal from './pages/OpenFinal.svelte';
  import SeniorFinal from './pages/SeniorFinal.svelte';
  import Donors from './pages/Donors.svelte';
  import Lessons from './pages/Lessons.svelte';
  import RunningATournament from './pages/RunningATournament.svelte';
  import Template from './layout/Template.svelte'
  import EloPerfCalc from './pages/EloPerfCalc.svelte';
  import OpenR1 from './pages/OpenR1.svelte';
  import OpenR2 from './pages/openR2.svelte';
  import OpenResults_v2 from './pages/openresults_v2.svelte';
  import OpenResults from './pages/openresults.svelte';
  import U1400R1 from './pages/u1400R1.svelte'
  import U1400R2_v2 from './pages/u1400R2_v2.svelte'
  import U1400R2 from './pages/u1400R2.svelte'
  import U1400R3 from './pages/u1400R3.svelte'
  import U1400Results_v2 from './pages/u1400results_v2.svelte'
  import U1400Results from './pages/u1400results.svelte'


  const routes = {
      '/': Home,
      '/currentTournament': CurrentTournament,
      '/1600final': U1600Final,
      '/aboutUs': AboutUs,
      '/upcomingTournaments': UpcomingTournaments,
      '/tournamentHistory': TournamentHistory,
      '/whatINeed': WhatINeed,
      '/clubPairings': ClubPairings,
      '/clubStandings': ClubStandings,
      '/openfinal': OpenFinal,
      '/seniorfinal': SeniorFinal,
      '/donors': Donors,
      '/lessons': Lessons,
      '/runningATournament': RunningATournament,
      '/template': Template,
      '/elo-perf-calc': EloPerfCalc,
      '/openR1': OpenR1,
      '/openR2': OpenR2,
      '/openresults_v2': OpenResults_v2,
      '/openresults': OpenResults,
      '/u1400R1': U1400R1,
      '/u1400R2_v2': U1400R2_v2,
      '/u1400R2': U1400R2,
      '/u1400R3': U1400R3,
      '/u1400results_v2': U1400Results_v2,
      '/u1400results': U1400Results,
  }
</script>

<Router {routes} />

