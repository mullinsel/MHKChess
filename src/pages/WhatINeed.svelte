<script>
    import Footer from "../layout/Footer.svelte";

</script>
<svelte:head>
    <title>What do I need?</title>
</svelte:head>

<div class="what-i-need">
<div class = "Header">
    <img src="images/logo.png" alt="Club logo" style = "position:absolute; top:4px; left:30px;" width="225" height="190"/>
    <img src="images/white.png" alt="Header" width="980" height="200" style = "border: 1px solid black;"/>
    <p style="color:black; position:absolute; top:-50px; left:275px; font-size:80px;">What do I need?</p>
    <a target="_blank" href ="https://www.chess.com/clubs/members/manhattan-chess"> <img src="images/chess.png" style="position:absolute; top:150px; left:880px" alt="Chess Logo" width="100" height="40"/></a>
    <a target="_blank" href ="https://www.flickr.com/photos/198250331@N07/"> <img src="images/flickerlogo.png" style="position:absolute; top:100px; left:900px" alt="Flicker Logo" width="80" height="40"/></a>
    <a target="_blank" href = "https://www.facebook.com/Manhattanhessclub"><img src="images/fblogo.png" style="position:absolute; top:50px; left:940px" alt="Facebook Logo" width="40" height="40"/></a>
    <p style="color:black; position:absolute; top:100px; left:275px; font-size:30px;">Thursdays and Sundays 5pm</p>
    <!--<p style="color:black; position:absolute; top:130px; left:325px; font-size:30px;">Thursday 6pm-9pm and Sunday 6pm-9pm</p>--->
</div>

<div class = "Navigation bar">
    <button><a href="#/" class="button">Home</a></button>
    <button><a href="#/currentTournament" class="button">Current Tournament</a></button>
    <button><a href="#/upcomingTournaments"class="button" style="display:inline;">Upcoming Tournaments</a></button>
    <button><a href="#/tournamentHistory"class="button">Tournament History</a></button>
    <button><a href="#/aboutUs" class="button">About Us</a></button>
</div>

<br>
<br>
<br>
<p style="color:black">To join and play with the MHK Chess club you simply need to come to one of our events. Events are open to all ages and playing strengths.
    <br> Our club plays a lot of US Chess Federation (USCF) rated games. In order to participate in these events, you will need to join USCF.</p>
<button><a target="_blank" href="https://new.uschess.org/join-us-chess" class="button">Join US Chess Federation</a></button>
<button><a target="_blank" href="https://new.uschess.org/sites/default/files/media/documents/us-chess-rule-book-online-only-edition-chapters-1-2-10-11-9-1-20.pdf" class="button">US Chess Federation rules</a></button>
<br>
<p style="color:black">Some events will supply equipment, however it is best to bring your own. We suggest buying the following clock and set.</p>
<br>
<img src="images/recboard.png" alt="Recommended board" class="inline" width="200" height="200"/>
<img src="images/recclock.png" alt="Recommended clock" class="inline" width="200" height="200"/>
<br>
<button><a target="_blank" href="https://www.amazon.com/Chess-Federation-Supreme-Triple-Weighted/dp/B076H9QZYR/ref=sr_1_40?keywords=chess%2Bset%2Bfor%2Btournament&qid=1687521321&sprefix=chess%2Bset%2Bfor%2Btourn%2Caps%2C112&sr=8-40&th=1" class="button">Recommended chess set</a></button>
<button><a target="_blank"href="https://www.amazon.com/Chess-Armory-Digital-Clock/dp/B07YVMBL8P/ref=pd_bxgy_vft_med_img_sccl_1/143-0462828-0617504?pd_rd_w=oVYxU&content-id=amzn1.sym.26a5c67f-1a30-486b-bb90-b523ad38d5a0&pf_rd_p=26a5c67f-1a30-486b-bb90-b523ad38d5a0&pf_rd_r=1S7STCS44ABCW7P0703Q&pd_rd_wg=Lv4tf&pd_rd_r=4eecd17a-dcf5-47ee-bbf8-daa8885db3b0&pd_rd_i=B07YVMBL8P&psc=1" class="button">Recommended clock</a></button>

<Footer top={1000}/>
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
    .what-i-need {
            text-align: center;
            background-color: LightBlue;
            color: white;
    }
    .what-i-need {
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