// =========================
// TOSH-X-BOT v2
// =========================

const bots = [

{
icon:"🚀",
name:"TOSH Alpha Bot",
strategy:"Trend Strategy",
risk:"LOW",
confidence:91
},

{
icon:"⚛️",
name:"TOSH Quantum Bot",
strategy:"Momentum Strategy",
risk:"LOW",
confidence:94
},

{
icon:"📈",
name:"Rise/Fall AI",
strategy:"Rise / Fall Analysis",
risk:"MEDIUM",
confidence:87
},

{
icon:"🔢",
name:"Digit Hunter",
strategy:"Digit Pattern Engine",
risk:"MEDIUM",
confidence:89
},

{
icon:"📊",
name:"Trend Scanner",
strategy:"EMA Scanner",
risk:"LOW",
confidence:92
},

{
icon:"⚡",
name:"Market Pulse",
strategy:"Fast Market Tracking",
risk:"LOW",
confidence:88
},

{
icon:"🎯",
name:"Match Hunter",
strategy:"Matches Strategy",
risk:"HIGH",
confidence:82
},

{
icon:"♾️",
name:"Odd / Even Master",
strategy:"Probability Engine",
risk:"MEDIUM",
confidence:90
}

];

const dashboard=document.getElementById("dashboard");

function buildDashboard(){

dashboard.innerHTML="";

bots.forEach(bot=>{

const card=document.createElement("div");

card.className="bot-card";

card.innerHTML=`

<div class="bot-icon">
${bot.icon}
</div>

<h2 class="bot-title">
${bot.name}
</h2>

<p class="bot-strategy">
${bot.strategy}
</p>

<div class="bot-percent">
${bot.confidence}%
</div>

<div class="progress">

<div class="progress-fill"

style="width:${bot.confidence}%">

</div>

</div>

<p class="bot-risk">
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

// =========================
// Navigation
// =========================

const navButtons=document.querySelectorAll(".subnav button");

const pages=document.querySelectorAll(".page");

navButtons.forEach(button=>{

button.onclick=function(){

navButtons.forEach(btn=>btn.classList.remove("active"));

this.classList.add("active");

const page=this.dataset.page;

pages.forEach(section=>{

section.classList.remove("active-page");

});

document.getElementById(page).classList.add("active-page");

};

});

// =========================
// Live Confidence Engine
// =========================

setInterval(()=>{

document.querySelectorAll(".bot-percent").forEach((percent,index)=>{

let value=parseInt(percent.innerText);

value+=Math.floor(Math.random()*5)-2;

if(value>97)value=97;

if(value<72)value=72;

percent.innerText=value+"%";

document.querySelectorAll(".progress-fill")[index].style.width=value+"%";

});

},2500);

// =========================
// Header Buttons
// =========================

document.getElementById("notifyBtn").onclick=function(){

alert("🔔 No new notifications.");

};

document.getElementById("disciplineBtn").onclick=function(){

alert(`🛡️ TOSH Systemic Discipline Protocol

1. Risk Capital Only

2. No Revenge Trading

3. Lock In Profits

4. Trust The Math Engine

5. Monitor Active Sessions

6. Psychology First`);

};

document.getElementById("loginBtn").onclick=function(){

alert("Deriv Login will be connected in the next phase.");

};

document.getElementById("signupBtn").onclick=function(){

window.location.href="https://partner-tracking.deriv.com/click?a=31609&o=1&c=3&link_id=1";

};

// =========================
// Build Empty Pages
// =========================

document.getElementById("builder").innerHTML = `

<h1>🤖 Bot Builder</h1>

<div class="page-card">

<h2>Create Advanced Strategy</h2>

<p>Configure EMA, Momentum, Bollinger Bands, RSI, MACD and custom filters.</p>

<button class="bot-btn">

COMING SOON

</button>

</div>

`;

document.getElementById("analysis").innerHTML = `

<h1>📈 Analysis Center</h1>

<div class="page-card">

<h2>Performance Dashboard</h2>

<p>Win Rate, Profit, Loss, Active Trades and History will appear here.</p>

</div>

`;

document.getElementById("chat").innerHTML = `

<h1>💬 Live Chat</h1>

<div class="page-card">

<h2>Live Market</h2>

<iframe
src="https://s.tradingview.com/widgetembed/?symbol=OANDA:EURUSD&interval=1&theme=dark"
width="100%"
height="350"
frameborder="0">
</iframe>

</div>

<div class="page-card">

<h2>Community Chat</h2>

<p>Coming Soon...</p>

</div>

`;

console.log("Builder:", document.getElementById("builder"));
console.log("Analysis:", document.getElementById("analysis"));
console.log("Chat:", document.getElementById("chat"));

// =========================
// TOSH Pages
// =========================

// Bot Builder
document.getElementById("builder").innerHTML = `
<h1>🤖 TOSH Bot Builder</h1>

<div class="page-card">
<h2>Custom Strategy Builder</h2>

<p>Create your own professional bot using mathematical indicators.</p>

<ul style="margin-top:15px;line-height:2;">
<li>✅ EMA Trend Engine</li>
<li>✅ RSI Momentum</li>
<li>✅ MACD Confirmation</li>
<li>✅ Bollinger Bands</li>
<li>✅ Tick Speed Detection</li>
<li>✅ Volatility Filter</li>
</ul>

<button class="bot-btn">
CREATE BOT
</button>

</div>
`;

// Analysis
document.getElementById("analysis").innerHTML = `
<h1>📈 Analysis Center</h1>

<div class="page-card">

<h2>Performance Statistics</h2>

<p>Today's Win Rate</p>

<h1 style="color:#00ffd5;">91%</h1>

<hr style="margin:20px 0;">

<p>Total Trades : 0</p>

<p>Total Profit : $0.00</p>

<p>Running Bots : 0</p>

</div>
`;

// Live Chat
document.getElementById("chat").innerHTML = `
<h1>💬 Live Trading Room</h1>

<div class="page-card">

<h2>Live Market</h2>

<iframe
src="https://s.tradingview.com/widgetembed/?symbol=OANDA:EURUSD&interval=1&theme=dark"
width="100%"
height="350"
frameborder="0">
</iframe>

</div>

<div class="page-card">

<h2>Community Chat</h2>

<p>Community chat will be connected in the next phase.</p>

</div>
`;
