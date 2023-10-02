<script>
    import TempLogo from './TempLogo.svelte'
</script>
<nav class="shadow-md h-20 bg-stone-100 dark:bg-slate-800 dark:text-white">
    <div class="pl-6 pr-6 grid grid-rows-1 grid-cols-[200px_auto_200px] h-full items-center">
        <a href="/" class="">
            <TempLogo/>
        </a>
        <div class="justify-self-center flex flex-row">
            <ul class="list-none flex flex-row gap-6">
                <li><a href="#/currentTournament">Current Tournament</a></li>
                <li>
                    <a href="#/upcomingTournaments">Upcoming Tournaments</a>
                </li>
                <li><a href="#/tournamentHistory">Tournament History</a></li>
                <li><a href="#/aboutUs">About Us</a></li>
            </ul>
        </div>
        <img class="h-9 justify-self-end" src="images/Facebook_Logo_Primary.png">
    </div>
</nav>
