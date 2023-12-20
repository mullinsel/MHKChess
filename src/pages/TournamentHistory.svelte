<script>
    import Footer from "../layout/Footer.svelte";

</script>
<svelte:head>
    <title>Tournament History</title>
</svelte:head>

<div class="tournament-history">
<div class = "Header">
    <img src="images/logo.png" alt="Club logo" style = "position:absolute; top:4px; left:30px;" width="225" height="190"/>
    <img src="images/white.png" alt="Header" width="980" height="200" style = "border: 1px solid black;"/>
    <p style="color:black; position:absolute; top:-40px; left:275px; font-size:70px;">Tournament History</p>
    <a target="_blank" href ="https://www.chess.com/clubs/members/manhattan-chess"> <img src="images/chess.png" style="position:absolute; top:150px; left:880px" alt="Chess Logo" width="100" height="40"/></a>
    <a target="_blank" href ="https://www.flickr.com/photos/198250331@N07/"> <img src="images/flickerlogo.png" style="position:absolute; top:100px; left:900px" alt="Flicker Logo" width="80" height="40"/></a>
    <a target="_blank" href = "https://www.facebook.com/Manhattanhessclub"><img src="images/fblogo.png" style="position:absolute; top:50px; left:940px" alt="Facebook Logo" width="40" height="40"/></a>
    <p style="color:black; position:absolute; top:100px; left:275px; font-size:30px;">Thursdays and Sundays 5pm</p>
    <p style="color:black; position:absolute; top:130px; left:275px; font-size:30px;">at UFM Community Learning Center</p>
    <!--<p style="color:black; position:absolute; top:130px; left:325px; font-size:30px;">Thursday 6pm-9pm and Sunday 6pm-9pm</p>--->
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
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202305217832-30543972" class="button">Manhattan Open and Kansas Senior Championship 2023 (Guy Coffee Memorial) </a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202308263222-30543972" class="button">MHK Back To School Tournament </a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202312167702-30586962" class="button">Winter Physics/Math Open </a></h4>


<br>
<br>
<h2 style="background: white; margin: 10px; padding: 10px; border: 1px solid black;">Club Night Tournaments</h2>
<h4><a href="https://docs.google.com/spreadsheets/d/1BF9-v2nxsVGppqN8Jkk4_nFox_zaBU8ihNH6qsxRZWE/edit?usp=sharing" class="button">Club Night League Standings</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202312146792-30586962" class="button">Club Night 12/14/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202312076782-30586962" class="button">Club Night 12/07/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202311306722-30543972" class="button">Club Night 11/30/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202311169542-30543972" class="button">Club Night 11/16/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202311098882-30543972" class="button">Club Night 11/09/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202311021132-30543972" class="button">Club Night 11/02/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202310260192-30586962" class="button">Club Night 10/26/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202310195602-30586962" class="button">Club Night 10/19/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202310127832-30586962" class="button">Club Night 10/12/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202310057812-30586962" class="button">Club Night 10/05/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202309281942-30586962" class="button">Club Night 9/28/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202309217822-30586962" class="button">Club Night 9/21/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202309140902-30586962" class="button">Club Night 9/14/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202309079312-30586962" class="button">Club Night 9/07/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202308314182-30543972" class="button">Club Night 8/31/23</a></h4>
<h4><a href="http://www.uschess.org/msa/XtblMain.php?202308240112" class="button">Club Night 8/24/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202308177452-15398493" class="button">Club Night 8/17/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202308102032-30543972" class="button">Blitz Night 8/10/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202308038482-30543972" class="button">Club Night 8/3/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202307274692-30543972" class="button">Club Night 7/27/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202307200572-30543972" class="button">Club Night 7/20/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202307136412-15398493" class="button">Club Night 7/13/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202307063152-30543972" class="button">Club Night 7/6/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202306299872-16077342" class="button">Club Night 6/29/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202306225142-16077342" class="button">Club Night 6/22/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202306151402-16077342" class="button">Club Night 6/15/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202306087732-16077342" class="button">Club Night 6/08/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202306013892-30543972" class="button">Club Night 6/01/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202305250152-16077342" class="button">Club Night 5/25/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202305185072-30543972" class="button">Club Night 5/18/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202305110662-30543972" class="button">Club Night 5/11/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202305046472-30543972" class="button">Club Night 5/4/23</a></h4>
<h4><a href="http://www.uschess.org/msa/XtblMain.php?202304272432-30543972" class="button">Club Night 4/27/23</a></h4>
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202304208432-30543972"class="button">Club Night 4/20/23</a></h4>
<h4><a href="http://www.uschess.org/msa/XtblMain.php?202304134382-30543972"class="button">Club Night 4/13/23</a></h4>
<h4><a href="http://www.uschess.org/msa/XtblMain.php?202304061502-30543972"class="button">Club Night 4/06/23</a></h4>
<h4><a href="http://www.uschess.org/msa/XtblMain.php?202303307192-30543972"class="button">Club Night 3/30/23</a></h4>
<h4><a href="http://www.uschess.org/msa/XtblMain.php?202303232832-30543972"class="button">Club Night 3/23/23</a></h4>
<h4><a href="http://www.uschess.org/msa/XtblMain.php?202303169722-14176213"class="button">Club Night 3/16/23</a></h4>
<h4><a href="http://www.uschess.org/msa/XtblMain.php?202303094792-30543972"class="button">Club Night 3/09/23</a></h4>
<h4><a href="http://www.uschess.org/msa/XtblMain.php?202303020532-30543972"class="button">Club Night 3/02/23</a></h4>
<h4><a href="http://www.uschess.org/msa/XtblMain.php?202302235852-30543972"class="button">Club Night 2/23/23</a></h4>
<h4><a href="http://www.uschess.org/msa/XtblMain.php?202302097792-30543972"class="button">Club Night 2/09/23</a></h4>
<h4><a href="http://www.uschess.org/msa/XtblMain.php?202302024022-30543972"class="button">Club Night 2/02/23</a></h4>
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
<h4><a href="https://www.uschess.org/msa/XtblMain.php?202312167712"class="button">Winter Physics/Math Scholastic 6/25/23</a></h4>


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
