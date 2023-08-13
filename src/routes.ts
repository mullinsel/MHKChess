// Components
import Home from './pages/Home.svelte'
import CurrentTournament from './pages/CurrentTournament.svelte'
import U1600Final from './pages/U1600Final.svelte'

// Export the route definition object
export default {
    // Exact path
    '/': Home,

    '/currentTournament.html': CurrentTournament,
    '/1600final.html': U1600Final
}