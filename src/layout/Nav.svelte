<script>
    import TempLogo from './TempLogo.svelte'
    import HamburgerSvg from './HamburgerSvg.svelte'

    // Whether to show the mobile nav dropdown or not
    let showMobileNav = false;
    function onHamburgerClick() {
        showMobileNav = !showMobileNav;
    }

    const pages = [
        {href: '#/currentTournament', name: 'Current Tournament'},
        {href: '#/upcomingTournaments', name: 'Upcoming Tournaments'},
        {href: '#/tournamentHistory', name: 'Tournament History'},
        {href: '#/aboutUs', name: 'About Us'},
    ]
</script>

<nav class="bg-stone-100 shadow">
    <div class="pl-6 pr-6 grid grid-rows-1 grid-cols-[10rem_auto_10rem] h-full items-center">
        <!-- Main Logo -->
        <a href="/" class="h-8 w-8">
            <TempLogo/>
        </a>
        <!-- Pages -->
        <div class="justify-self-center hidden md:flex md:flex-row">
            <ul class="list-none flex flex-row gap-6">
                {#each pages as page}
                    <li><a href={page.href}>{page.name}</a></li>
                {/each}
            </ul>
        </div>
        <!-- Hamburger menu shows when mobile -->
        <button on:click={onHamburgerClick} class="justify-self-center md:hidden h-8 w-8">
            <HamburgerSvg/>
        </button>
        <!-- Links to other sites -->
        <div class="justify-self-end flex flex-row gap-3">
            <a href="https://www.chess.com/clubs/members/manhattan-chess" target="_blank" class="h-8 w-7">
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
