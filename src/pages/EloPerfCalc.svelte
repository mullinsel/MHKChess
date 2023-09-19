
<script lang="ts">
    import Footer from "../layout/Footer.svelte";

    let CurrentElo: number;
    let NumberOfRounds: number;
    let totalGames: number;
    let YourScore: number;
    let Round1Opponent: number = 0;
    let Round2Opponent: number = 0;
    let Round3Opponent: number = 0;
    let Round4Opponent: number = 0;
    let Round5Opponent: number = 0;
    let display: number = 0;
    let display2: number = 0;
    let display3: string = '';
    let Round1Opponentnorm: number = 0;
    let Round2Opponentnorm: number = 0;
    let Round3Opponentnorm: number = 0;
    let Round4Opponentnorm: number = 0;
    let Round5Opponentnorm: number = 0;
    let NumberOfRoundsnorm: number;
    let YourScorenorm: number;
    let totalGamesnorm: number;


    function calcElo(){
        var R0 = CurrentElo;
        var Nrounds = NumberOfRounds;
        var N = totalGames;
        var S = YourScore;
        var Nstar = Math.round(50/(Math.sqrt(0.662+0.00000739*(2569-R0)*(2569-R0))));
        var Nprime = 0;
        if (Nstar < N){
            Nprime=Nstar;
        }
        else{
            Nprime=N;
        }
        var K = 800/(Nprime+Nrounds);
        const Ri = [Round1Opponent, Round2Opponent, Round3Opponent, Round4Opponent, Round5Opponent];
        var Efinal = 0;
        var Ra = 0;
        for (let i = 0; i < Nrounds; i++) {
            if (Ri[i]!=0){
                Efinal += W(R0,Ri[i]);
            }
        }
        for (let i = 0; i < Nrounds; i++) {
            if (Ri[i]!=0){
                Ra += Ri[i];
            }
        }
        var stepone = K*(S-Efinal)-14*Math.sqrt(bonus(Nrounds,4));
        var steptwo = bonus(0,stepone);
        var Rs = R0 + K*(S-Efinal)+steptwo;
        display = Math.round(Rs);
        var perfR = (Ra/Nrounds) + (400*(S-(Nrounds-S)))/(Nrounds)
        display2 = perfR;
    }

    function calcNorm() {
        var Nrounds = NumberOfRoundsnorm;
        var S = YourScorenorm;
        const Ri = [Round1Opponentnorm, Round2Opponentnorm, Round3Opponentnorm, Round4Opponentnorm, Round5Opponentnorm];
        const normLevels = [1200,1400,1600,1800,2000,2200,2400];
        const delta = [];
        const CT = [];
        const STCT = [];
        var CTsum = 0;
        for (let i = 0; i < Nrounds; i++) {
            for (let j = 0; j < 7; j++) {
                if (Ri[i]!=0){
                    delta[i][j] = normLevels[j] - Ri[i];
                }
            }
        }
        for (let i = 0; i < Nrounds; i++) {
            for (let j = 0; j < 7; j++) {
                if (delta[i][j] <= -400){
                    CT[i][j] = 0;
                }
                else if (-400 < delta[i][j] && delta[i][j] <= 0){
                    CT[i][j]=0.5+delta[i][j]/800;
                }
                else if (0 < delta[i][j] && delta[i][j] <= 200){
                    CT[i][j]=0.5+delta[i][j]/400;
                }
                else if (200 < delta[j][i]){
                    CT[i][j]=1;
                }
            }
        }
        for (let j = 0; j < 7; j++) {
            CTsum = 0;
            for (let i = 0; i < Nrounds; i++) {
                CTsum += CT[i][j];
            }
            STCT[j] = S - CTsum;
        }
        var norm = 0;
        for (let j = 0; j < 7; j++) {
            if (STCT[j]>1){
                norm += 1;
            }
        }
        if (norm == 1){
            display3 = '4th category norm';
        }
        else if (norm == 2){
            display3 = '3rd category norm';
        }
        else if (norm == 3){
            display3 = '2nd category norm';
        }
        else if (norm == 4){
            display3 = '1st category norm';
        }
        else if (norm == 5){
            display3 = 'CM norm';
        }
        else if (norm == 6){
            display3 = 'LM norm';
        }
        else if (norm == 7){
            display3 = 'LSM norm';
        }
        else if (norm == 0){
            display3 = 'No norm';
        }
    }

    function W(X,Y){
        return 1/(1+Math.pow(10,-(X-Y)/400));
    }

    function bonus(a,b){
        return (a+b+Math.abs(a-b))/2;
    }
</script>

<svelte:head>    
    <title>Elo Calculator</title>
</svelte:head>

<div class="elo-perf-calc">
    <div class = "Header">
        <img src="images/logo.png" alt="Club logo" style = "position:absolute; top:4px; left:30px;" width="225" height="190"/>
        <img src="images/white.png" alt="Header" width="980" height="200" style = "border: 1px solid black;"/>
        <p style="color:black; position:absolute; top:-20px; left:300px; font-size:60px;">Elo/Performance <br>Calculator</p>
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
    <br>
    <h2 style="background: white; margin: 10px; padding: 10px; border: 1px solid black; color: black;">Elo Calculator</h2>
    <input bind:value={CurrentElo} name="CurrentElo" id="CurrentElo" type="text" placeholder="Your Current Rating" required>
    <input bind:value={NumberOfRounds} name="NumberOfRounds" id = "NumberOfRounds" type="text" placeholder="Number Of Rounds" required>
    <input bind:value={YourScore} name="YourScore" id="YourScore" type="text" placeholder="Your Score" required>
    <input bind:value={totalGames} name="totalGames" id="totalGames" type="text" placeholder="Number of prior games" required>
    <br>
    <br>
    <input bind:value={Round1Opponent} name="Round1Opponent" id="Round1Opponent" type="text" placeholder="Round 1 Opponent's Elo">
    <br>
    <input bind:value={Round2Opponent} name="Round2Opponent" id="Round2Opponent" type="text" placeholder="Round 2 Opponent's Elo">
    <br>
    <input bind:value={Round3Opponent} name="Round3Opponent" id="Round3Opponent" type="text" placeholder="Round 3 Opponent's Elo">
    <br>
    <input bind:value={Round4Opponent} name="Round4Opponent" id="Round4Opponent" type="text" placeholder="Round 4 Opponent's Elo">
    <br>
    <input bind:value={Round5Opponent} name="Round5Opponent" id="Round5Opponent" type="text" placeholder="Round 5 Opponent's Elo">
    <br>
    <button type="submit" on:click={calcElo}>Calculate</button>
    <br>
    <h2 style="color: black;">Your Calculated Elo</h2>
    <input bind:value={display} type = "text" name="display" id = "display" disabled>
    <h2 style="color: black;">Your Performance Rating</h2>
    <input bind:value={display2} type = "text" name="display2" id = "display2" disabled>
    <br>
    <h2 style="background: white; margin: 10px; padding: 10px; border: 1px solid black; color: black;">Norm Calculator</h2>
    <input name="CurrentElonorm" id="CurrentElonorm" type="text" placeholder="Your Current Rating" required>
    <input bind:value={NumberOfRoundsnorm} name="NumberOfRoundsnorm" id = "NumberOfRoundsnorm" type="text" placeholder="Number Of Rounds" required>
    <input bind:value={YourScorenorm} name="YourScorenorm" id="YourScorenorm" type="text" placeholder="Your Score" required>
    <input bind:value={totalGamesnorm} name="totalGamesnorm" id="totalGamesnorm" type="text" placeholder="Number of prior games" required>
    <br>
    <br>
    <input bind:value={Round1Opponentnorm} name="Round1Opponentnorm" id="Round1Opponentnorm" type="text" placeholder="Round 1 Opponent's Post Event Elo">
    <br>
    <input bind:value={Round2Opponentnorm} name="Round2Opponentnorm" id="Round2Opponentnorm" type="text" placeholder="Round 2 Opponent's Post Event Elo">
    <br>
    <input bind:value={Round3Opponentnorm} name="Round3Opponentnorm" id="Round3Opponentnorm" type="text" placeholder="Round 3 Opponent's Post Event Elo">
    <br>
    <input bind:value={Round4Opponentnorm} name="Round4Opponentnorm" id="Round4Opponentnorm" type="text" placeholder="Round 4 Opponent's Post Event Elo">
    <br>
    <input bind:value={Round5Opponentnorm} name="Round5Opponentnorm" id="Round5Opponentnorm" type="text" placeholder="Round 5 Opponent's Post Event Elo">
    <br>
    <button type="submit" on:click={calcNorm}>Calculate</button>
    <br>
    <h2 style="color: black;">Your Calculated Norm</h2>
    <input bind:value={display3} type = "text" name="display3" id = "display3" disabled>
    <br>
    <br>
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
    .elo-perf-calc {
            text-align: center;
            background-color: LightBlue;
            color: white;
    }
    .elo-perf-calc {
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