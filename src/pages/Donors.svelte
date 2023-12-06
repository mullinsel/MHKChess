<script>
    import Footer from "../layout/Footer.svelte";

</script>
<svelte:head>    
    <title>Donors</title>
</svelte:head>

<div class="donors">
    <div class = "Header">
        <img src="images/logo.png" alt="Club logo" style = "position:absolute; top:4px; left:30px;" width="225" height="190"/>
        <img src="images/white.png" alt="Header" width="980" height="200" style = "border: 1px solid black;"/>
        <p style="color:black; position:absolute; top:-20px; left:275px; font-size:80px;">Donors</p>
        <a target="_blank" href ="https://www.chess.com/clubs/members/manhattan-chess"> <img src="images/chess.png" style="position:absolute; top:150px; left:880px" alt="Chess Logo" width="100" height="40"/></a>
        <a target="_blank" href ="https://www.flickr.com/photos/198250331@N07/"> <img src="images/flickerlogo.png" style="position:absolute; top:100px; left:900px" alt="Flicker Logo" width="80" height="40"/></a>
        <a target="_blank" href = "https://www.facebook.com/Manhattanhessclub"><img src="images/fblogo.png" style="position:absolute; top:50px; left:940px" alt="Facebook Logo" width="40" height="40"/></a>
        <!--<p style="color:black; position:absolute; top:130px; left:325px; font-size:30px;">Thursday 6pm-9pm and Sunday 6pm-9pm</p>--->
    </div>

    <div class = "Navigation bar">
        <button><a href="#/currentTournament" class="button">Current Tournament</a></button>
        <button><a href="#/upcomingTournaments"class="button" style="display:inline;">Upcoming Tournaments</a></button>
        <button><a href="#/tournamentHistory"class="button">Tournament History</a></button>
        <button><a href="#/aboutUs" class="button">About Us</a></button>
    </div>
    <br>
    <h2 style="background: white; margin: 10px; padding: 10px; border: 1px solid black; color:black;">King Level Donors <br> (100 Dollars) </h2>
    <h3 style="color:black;">Mory Mort</h3>
    <h3 style="color:black;">Lee Schnee</h3>
    <br>
    <br>
    <h2 style="background: white; margin: 10px; padding: 10px; border: 1px solid black; color:black;">Knight Level Donors <br> (50 Dollars)</h2>
    <h3 style="color:black;">Charles Carlson</h3>
    <h3 style="color:black;">Tom Claman</h3>
    <h3 style="color:black;">Eric Mullins</h3>

    <br>
    <br>
    <h2 style="background: white; margin: 10px; padding: 10px; border: 1px solid black; color:black;">Pawn Level Donors <br> (25 Dollars) </h2>
    <h3 style="color:black;">Andrew McCready</h3>
    <h3 style="color:black;">John Miller</h3>


    <Footer top={800}/>
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
    .donors {
            text-align: center;
            background-color: LightBlue;
            color: white;
    }
    .donors {
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