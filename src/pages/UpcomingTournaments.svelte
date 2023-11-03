<script>
    import Footer from "../layout/Footer.svelte";

</script>
<svelte:head>
    <title>Upcoming Tournaments</title>
</svelte:head>

<div class="upcoming-tournaments">
    <div class = "Header">
        <img src="images/logo.png" alt="Club logo" style = "position:absolute; top:4px; left:30px;" width="225" height="190"/>
        <img src="images/white.png" alt="Header" width="980" height="200" style = "border: 1px solid black;"/>
        <p style="color:black; position:absolute; top:-30px; left:275px; font-size:60px;">Upcoming Tournaments</p>
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
        <button><a href="#/tournamentHistory"class="button">Tournament History</a></button>
        <button><a href="#/aboutUs" class="button">About Us</a></button>
    </div>
    <br>
    <h2 style="background: white; margin: 10px; padding: 10px; border: 1px solid black;">Prize Tournaments</h2>
    <h4><a href="https://www.kingregistration.com/event/WinterPhysics" class="button">Winter Physics/Math Chess Tournament</a></h4>
    <br>
    <br>
    <br>
    <h2 style="background: white; margin: 10px; padding: 10px; border: 1px solid black;">Every Thursday night G/10;+2 swiss quick rated games</h2>
    <br>
    <br>
    <br>
    <h2 style="background: white; margin: 10px; padding: 10px; border: 1px solid black;"> Saturday Showdown tournament 4 round swiss G/30;d5 dual rated
    <br>We aim to host these every other saturday depending on other local tournaments</h2>
    <br>
    <br>
    <br>
    <h2 style="background: white; margin: 10px; padding: 10px; border: 1px solid black;">Other Tournaments in the area</h2>

    <br>
    <br>
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
    .upcoming-tournaments {
            text-align: center;
            background-color: LightBlue;
            color: black;
    }
    .upcoming-tournaments {
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
