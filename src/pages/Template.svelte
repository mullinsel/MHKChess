<svelte:head>
    <title>Template</title>
</svelte:head>

<div class="template">
<div class = "Header">
    <img src="images/logo.png" alt="Club logo" style = "position:absolute; top:4px; left:30px;" width="225" height="190"/>
    <img src="images/white.png" alt="Header" width="980" height="200" style = "border: 1px solid black;"/>
    <p style="color:black; position:absolute; top:-20px; left:275px; font-size:80px;">MHK Chess Club</p>
    <a target="_blank" href ="https://www.chess.com/clubs/members/manhattan-chess"> <img src="images/chess.png" style="position:absolute; top:150px; left:880px" alt="Chess Logo" width="100" height="40"/></a>
    <a target="_blank" href ="https://www.flickr.com/photos/198250331@N07/"> <img src="images/flickerlogo.png" style="position:absolute; top:100px; left:900px" alt="Flicker Logo" width="80" height="40"/></a>
    <a target="_blank" href = "https://www.facebook.com/Manhattanhessclub"><img src="images/fblogo.png" style="position:absolute; top:50px; left:940px" alt="Facebook Logo" width="40" height="40"/></a>
    <!--<p style="color:black; position:absolute; top:130px; left:325px; font-size:30px;">Thursday 6pm-9pm and Sunday 6pm-9pm</p>--->
</div>

<div class = "Navigation bar">
    <button><a href="#/currentTournament.html" class="button">Current Tournament</a></button>
    <button><a href="#/upcomingTournaments.html"class="button" style="display:inline;">Upcoming Tournaments</a></button>
    <button><a href="#/tournamentHistory.html"class="button">Tournament History</a></button>
    <button><a href="#/aboutUs.html" class="button">About Us</a></button>
</div>
<br>
<br>
<br>
<br>
<br>

<div class="Footer" style="position:absolute; top:600px; left:10px; ">
    <p style="color:black; position:absolute; top:70px; left:130px; font-size:20px;">USCF Affiliate: A7790127</p>
    <h2><a href="mailto:mullinsel93@gmail.com" style="position:absolute; top:85px; left:850px; border:2px solid; text-align:center; margin: 0px; font-size:20px;">Contact Us</a></h2>
    <img src="images/USCFlogo.png" alt="USCFlogo" style="position: absolute; top:22px; left:1px;" width="120" height="98"/>
    <img src="images/white.png" alt="Footerbg" width="980" height="100" style = "border: 1px solid black;"/>
</div>
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
    .template {
            text-align: center;
            background-color: LightBlue;
            color: white;
    }
    .template {
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