<script>
    import Footer from "../layout/Footer.svelte";

</script>
<svelte:head>
    <title>Tournament History 2024</title>
</svelte:head>

<div class="tournament-history">
<div class = "Header">
    <img src="images/logo.png" alt="Club logo" style = "position:absolute; top:4px; left:30px;" width="225" height="190"/>
    <img src="images/white.png" alt="Header" width="980" height="200" style = "border: 1px solid black;"/>
    <p style="color:black; position:absolute; top:-40px; left:275px; font-size:70px;">Tournament History</p>
    <a target="_blank" href ="https://www.chess.com/clubs/members/manhattan-chess"> <img src="images/chess.png" style="position:absolute; top:150px; left:880px" alt="Chess Logo" width="100" height="40"/></a>
    <a target="_blank" href ="https://www.flickr.com/photos/198250331@N07/"> <img src="images/flickerlogo.png" style="position:absolute; top:100px; left:900px" alt="Flicker Logo" width="80" height="40"/></a>
    <a target="_blank" href = "https://www.facebook.com/Manhattanhessclub"><img src="images/fblogo.png" style="position:absolute; top:50px; left:940px" alt="Facebook Logo" width="40" height="40"/></a>
    <p style="color:black; position:absolute; top:100px; left:275px; font-size:30px;">Tuesdays 5:30pm</p>
    <!--<p style="color:black; position:absolute; top:130px; left:325px; font-size:30px;">Tuesday 5pm-9pm and Sunday 5pm-9pm</p>--->
</div>

<div class = "Navigation bar">
    <button><a href="#/"class="button">Home</a></button>
    <button><a href="#/currentTournament" class="button">Current Tournament</a></button>
    <button><a href="#/upcomingTournaments"class="button" style="display:inline;">Upcoming Tournaments</a></button>
    <button><a href="#/aboutUs" class="button">About Us</a></button>
</div>
<br>
<br>
<h2 style="background: white; margin: 10px; padding: 10px; border: 1px solid black;">Prize Tournaments</h2>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202406020852-30543972" class="button">Manhattan Open (Guy Coffee Memorial) and Kansas Senior Championship 2024 (Tom Claman Memorial) </a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202305217832-30543972" class="button">Manhattan Open and Kansas Senior Championship 2023 (Guy Coffee Memorial) </a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202308263222-30543972" class="button">MHK Back To School Tournament </a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202312167702-30586962" class="button">Winter Physics/Math Open </a></h4>


<br>
<br>
<h2 style="background: white; margin: 10px; padding: 10px; border: 1px solid black;">Club Night Tournaments</h2>
<h4><a href="https://docs.google.com/spreadsheets/d/1BF9-v2nxsVGppqN8Jkk4_nFox_zaBU8ihNH6qsxRZWE/edit?usp=sharing" class="button">Club Night League Standings</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202502045772-30586962" class="button">Club Night 2/4/25</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202501281212-30586962" class="button">Club Night 1/28/25</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202501142642-30586962" class="button">Club Night 1/14/25</a></h4>
<br>
<br>
<h2 style="background: white; margin: 10px; padding: 10px; border: 1px solid black;">Saturday Showdown Tournaments</h2>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202306246262-30543972"class="button">Saturday Showdown 6/24/23</a></h4>
<h4><a href="http://www.uschess.org/msa/XtblMain.php?202304155422-30543972"class="button">Saturday Showdown 4/15/23</a></h4>
<h4><a href="http://www.uschess.org/msa/XtblMain.php?202304018442-30543972"class="button">Fools Mate Tournament 4/01/23</a></h4>
<h4><a href="http://www.uschess.org/msa/XtblMain.php?202301280652-30543972"class="button">Saturday Showdown 1/28/23</a></h4>
<br>
<br>
<h2 style="background: white; margin: 10px; padding: 10px; border: 1px solid black;">Other Tournaments</h2>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202308038572-30558709"class="button">MHK Match 8/3/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202306257022-17076527"class="button">Sunday Match 6/25/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202312167712"class="button">Winter Physics/Math Scholastic</a></h4>


<Footer top={2500}/>
</div>

<style>
    a.button {
            -webkit-appearance: button;
            -moz-appearance: button;
            appearance: button;
            height: 10px;
            width: 200px;
            font-size: 18px;
            text-decoration: none;
            color: initial;
    }
    .tournament-history {
            text-align: center;
            background-color: LightBlue;
            color: black;
    }
    .tournament-history {
       height:620px;
       width:1023px;
       position:absolute;
       box-sizing:border-box;
       transform-origin: 0 0;
       -moz-transform-origin:0 0;
       -o-transform-origin: 0 0;
       -webkit-transform-origin: 0 0;
    }
    a:link {
            color: black;
            background-color: transparent;
            text-decoration: underline;
    }
    a:visited {
            color: black;
            background-color: transparent;
            text-decoration: underline;
    }
    a:active {
            color: black;
            background-color: transparent;
    }
</style>

