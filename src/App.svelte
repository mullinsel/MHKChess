<script lang="ts">
  import Router from 'svelte-spa-router';

  import Home from './pages/Home.svelte';
  import CurrentTournament from './pages/CurrentTournament.svelte';
  import AboutUs from './pages/AboutUs.svelte';
  import UpcomingTournaments from './pages/UpcomingTournaments.svelte';
  import TournamentHistory from './pages/TournamentHistory.svelte';
  import WhatINeed from './pages/WhatINeed.svelte';
  import Donors from './pages/Donors.svelte';
  import Lessons from './pages/Lessons.svelte';
  import RunningATournament from './pages/RunningATournament.svelte';
  import EloPerfCalc from './pages/EloPerfCalc.svelte';
  import OpenResults_v2 from './pages/openresults_v2.svelte';
  import U1400Results_v2 from './pages/u1400results_v2.svelte'
  import GlobalStyle from './GlobalStyle.svelte';
    import TournamentHistory2025 from './pages/TournamentHistory2025.svelte';
  import TournamentHistory2024 from './pages/TournamentHistory2024.svelte';
  import TournamentHistory2023 from './pages/TournamentHistory2023.svelte'

  const routes = {
      '/': Home,
      '/currentTournament': CurrentTournament,
      '/aboutUs': AboutUs,
      '/upcomingTournaments': UpcomingTournaments,
      '/tournamentHistory': TournamentHistory,
      '/whatINeed': WhatINeed,
      '/donors': Donors,
      '/lessons': Lessons,
      '/runningATournament': RunningATournament,
      '/elo-perf-calc': EloPerfCalc,
      '/openresults_v2': OpenResults_v2,
      '/u1400results_v2': U1400Results_v2,
      '/tournamentHistory2025': TournamentHistory2025,
      '/tournamentHistory2024': TournamentHistory2024,
      '/tournamentHistory2023': TournamentHistory2023,

  }
</script>

<GlobalStyle>
  <Router {routes} />
</GlobalStyle>

