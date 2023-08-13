// Components
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
import Template from './pages/Template.svelte'

// Export the route definition object
export default {
    '/': Home,
    '/currentTournament.html': CurrentTournament,
    '/1600final.html': U1600Final,
    '/aboutUs.html': AboutUs,
    '/upcomingTournaments.html': UpcomingTournaments,
    '/tournamentHistory.html': TournamentHistory,
    '/whatINeed.html': WhatINeed,
    '/clubPairings.html': ClubPairings,
    '/clubStandings.html': ClubStandings,
    '/openfinal.html': OpenFinal,
    '/seniorfinal.html': SeniorFinal,
    '/donors.html': Donors,
    '/lessons.html': Lessons,
    '/runningATournament.html': RunningATournament,
    '/template.html': Template,
}