<script>
    import TempLogo from './TempLogo.svelte'
</script>
<nav class="shadow-md h-20 bg-stone-100 dark:bg-slate-800 dark:text-white">
    <div class="pl-6 pr-6 grid grid-rows-1 grid-cols-[200px_auto_200px] h-full items-center">
        <a href="/" class="h-8 w-8">
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
        <div class="justify-self-end flex flex-row gap-3">
            <a href="https://www.chess.com/clubs/members/manhattan-chess" target="_blank" class="h-8 w-8">
                <img alt="chesscom_logo" class="h-8 m-auto" src="images/chesscom_pawn.png">
            </a>
            <a href="https://www.flickr.com/photos/198250331@N07/" target="_blank">
                <img alt="flickr_logo" class="h-8 rounded-lg" src="images/flickr_logo.png">
            </a>
            <a href="https://www.facebook.com/Manhattanhessclub" target="_blank">
                <img alt="fb_logo" class="h-8" src="images/Facebook_Logo_Primary.png">
            </a>
        </div>
    </div>
</nav>
