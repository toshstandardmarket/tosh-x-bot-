alert("script.js loaded");
// =========================
// TOSH-X-BOT v1 Script
// =========================

const bots = [
{
name:"TOSH Alpha Bot",
strategy:"Trend Strategy",
risk:"LOW",
confidence:91
},
{
name:"TOSH Quantum Bot",
strategy:"Momentum Strategy",
risk:"LOW",
confidence:94
},
{
name:"Rise/Fall AI",
strategy:"Rise/Fall Analysis",
risk:"MEDIUM",
confidence:84
},
{
name:"Digit Hunter",
strategy:"Digit Pattern Engine",
risk:"MEDIUM",
confidence:89
},
{
name:"Trend Scanner Pro",
strategy:"Trend Confirmation",
risk:"LOW",
confidence:92
},
{
name:"Market Pulse",
strategy:"Fast Market Scanner",
risk:"LOW",
confidence:88
},
{
name:"Match Hunter",
strategy:"Pattern Matching",
risk:"HIGH",
confidence:81
},
{
name:"Odd/Even Master",
strategy:"Odd / Even Logic",
risk:"MEDIUM",
confidence:90
}
];

const dashboard = document.getElementById("dashboard");

function buildDashboard(){

dashboard.innerHTML="";

bots.forEach(bot=>{

const card=document.createElement("div");

card.className="bot-card";

card.innerHTML=`

<h2 class="bot-title">${bot.name}</h2>

<p>${bot.strategy}</p>

<div class="bot-percent">${bot.confidence}%</div>

<p class="bot-status">

Risk : ${bot.risk}

</p>

<button class="bot-btn">

LOGIN TO TRADE

</button>

`;

dashboard.appendChild(card);

});

}

buildDashboard();



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

buildDashboard();

}

else if(page.includes("Bot Builder")){

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
