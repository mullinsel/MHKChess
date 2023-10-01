<script>
    import TempLogo from './TempLogo.svelte'
</script>
<nav class="shadow-md h-20 bg-stone-100 dark:bg-slate-800 dark:text-white">
    <div class="pl-6 pr-6 flex flex-row items-center h-full">
        <a href="/" class="button">
            <TempLogo/>
        </a>
        <ul class="list-none ml-auto flex flex-row gap-6">
            <li><a href="#/currentTournament" class="button">Current Tournament</a></li>
            <li>
                <a href="#/upcomingTournaments" class="button">Upcoming Tournaments</a>
            </li>
            <li><a href="#/tournamentHistory" class="button">Tournament History</a></li>
            <li><a href="#/aboutUs" class="button">About Us</a></li>
        </ul>
    </div>
</nav>
