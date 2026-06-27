alert("script.js loaded");
// =========================
// TOSH-X-BOT v1 Script
// =========================

const bots = [
{
icon:"🚀",
name:"TOSH Alpha Bot",
strategy:"Trend Engine",
risk:"LOW",
confidence:91,
color:"#00ffb3"
},
{
icon:"⚛️",
name:"TOSH Quantum Bot",
strategy:"Momentum AI",
risk:"LOW",
confidence:94,
color:"#00d9ff"
},
{
icon:"📈",
name:"Rise/Fall AI",
strategy:"Direction Scanner",
risk:"MEDIUM",
confidence:87,
color:"#ffcc00"
},
{
icon:"🔢",
name:"Digit Hunter",
strategy:"Digit Pattern",
risk:"MEDIUM",
confidence:89,
color:"#ff66ff"
},
{
icon:"📊",
name:"Trend Scanner Pro",
strategy:"EMA Tracker",
risk:"LOW",
confidence:93,
color:"#00ff66"
},
{
icon:"⚡",
name:"Market Pulse",
strategy:"Fast Volatility",
risk:"LOW",
confidence:88,
color:"#00ffff"
},
{
icon:"🎯",
name:"Match Hunter",
strategy:"Pattern Match",
risk:"HIGH",
confidence:82,
color:"#ff4444"
},
{
icon:"♾️",
name:"Odd/Even Master",
strategy:"Probability AI",
risk:"MEDIUM",
confidence:90,
color:"#ffaa00"
}
];

const dashboard = document.getElementById("dashboard");

function buildDashboard(){

dashboard.innerHTML="";

bots.forEach(bot=>{

const card=document.createElement("div");

card.className="bot-card";

card.innerHTML=`

<div class="bot-icon"
style="background:${bot.color};">

${bot.icon}

</div>

<h2 class="bot-title">
${bot.name}
</h2>

<p>${bot.strategy}</p>

<div class="bot-percent">
${bot.confidence}%
</div>

<div class="progress">

<div class="progress-fill"
style="width:${bot.confidence}%;background:${bot.color};">

</div>

</div>

<p class="bot-status">

Risk : ${bot.risk}

</p>

<button class="bot-btn">

LOAD BOT

</button>

`;

dashboard.appendChild(card);

});

}

buildDashboard();

const chart=document.querySelector(".chart-container");

if(chart){

chart.style.display="block";

}



// =======================
// Simulate Market
// =======================

setInterval(()=>{

document.querySelectorAll(".bot-percent").forEach(el=>{

let value=parseInt(el.innerText);

value+=Math.floor(Math.random()*5)-2;

if(value>97)value=97;

if(value<72)value=72;

el.innerHTML=value+"%";

el.parentElement

.querySelector(".progress-fill")

.style.width=value+"%";

});

},2500);



// =======================
// Navigation
// =======================

document.querySelectorAll(".subnav button")

.forEach(button=>{

button.onclick=function(){

document.querySelectorAll(".subnav button")

.forEach(btn=>btn.classList.remove("active"));

this.classList.add("active");

const page=this.innerText.trim();

if(page.includes("Dashboard")){

document.querySelector(".chart-container").style.display="block";

buildDashboard();

}

}

else if(page.includes("Bot Builder")){
  
document.querySelector(".chart-container").style.display="none";
dashboard.innerHTML=`

<div class="page">

<h1>🤖 BOT BUILDER</h1>

<div class="builder-box">

<label>EMA Fast</label>

<input type="range" min="5" max="50" value="10">

<label>EMA Slow</label>

<input type="range" min="20" max="200" value="50">

<label>Risk Level</label>

<select>

<option>Low</option>

<option>Medium</option>

<option>High</option>

</select>

<button class="bot-btn">

CREATE STRATEGY

</button>

</div>

</div>

`;

}

else if(page.includes("Analysis")){
  
document.querySelector(".chart-container").style.display="none";
dashboard.innerHTML=`

<div class="page">

<h1>📈 ANALYSIS</h1>

<div class="analysis-grid">

<div class="stat-card">

<h2>Win Rate</h2>

<h1>91%</h1>

</div>

<div class="stat-card">

<h2>Total Trades</h2>

<h1>0</h1>

</div>

<div class="stat-card">

<h2>Today's Profit</h2>

<h1>$0.00</h1>

</div>

<div class="stat-card">

<h2>Running Bots</h2>

<h1>0</h1>

</div>

</div>

</div>

`;

}

else if(page.includes("Live Chat")){
  
document.querySelector(".chart-container").style.display="none";
dashboard.innerHTML=`

<div class="page">

<h1>💬 LIVE CHAT</h1>

<div class="chat-box">

<div class="chat-message">

Welcome to TOSH Community.

</div>

<input

type="text"

placeholder="Type message..."

>

<button class="bot-btn">

SEND

</button>

</div>

</div>

`;

}

}

});



// =======================
// Discipline Button
// =======================

document.getElementById("disciplineBtn")

.onclick=function(){

alert(

`🛡️ TOSH Systemic Discipline Protocol

1. Risk Capital Only

2. No Revenge Trading

3. Lock In Profits

4. Trust The Math Engine

5. Monitor Active Sessions

6. Psychology First`

);

};



// =======================
// Notification
// =======================

document.getElementById("notifyBtn")

.onclick=function(){

alert(

"🔔 No new notifications."

);

};
