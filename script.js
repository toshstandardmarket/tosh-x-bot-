alert("script.js loaded");

// =========================
// TOSH-X-BOT
// =========================

const bots = [

{
icon:"🚀",
name:"TOSH Alpha Bot",
strategy:"Trend Strategy",
risk:"LOW",
confidence:91,
color:"#00ffb3"
},

{
icon:"⚛️",
name:"TOSH Quantum Bot",
strategy:"Momentum Strategy",
risk:"LOW",
confidence:94,
color:"#00d9ff"
},

{
icon:"📈",
name:"Rise/Fall AI",
strategy:"Rise/Fall Analysis",
risk:"MEDIUM",
confidence:87,
color:"#ffd700"
},

{
icon:"🔢",
name:"Digit Hunter",
strategy:"Digit Pattern Engine",
risk:"MEDIUM",
confidence:89,
color:"#ff66ff"
},

{
icon:"📊",
name:"Trend Scanner",
strategy:"EMA Scanner",
risk:"LOW",
confidence:92,
color:"#00ff66"
},

{
icon:"⚡",
name:"Market Pulse",
strategy:"Fast Market Tracking",
risk:"LOW",
confidence:88,
color:"#00ffff"
},

{
icon:"🎯",
name:"Match Hunter",
strategy:"Matches AI",
risk:"HIGH",
confidence:82,
color:"#ff4444"
},

{
icon:"♾️",
name:"Odd/Even Master",
strategy:"Odd Even Probability",
risk:"MEDIUM",
confidence:90,
color:"#ffaa00"
}

];

const dashboard = document.getElementById("dashboard");

function buildDashboard(){

const dashboard=document.getElementById("dashboard");

dashboard.innerHTML="";

const bots=[

["🚀","TOSH Alpha Bot","Trend Strategy","91","LOW"],

["⚛️","TOSH Quantum Bot","Momentum Strategy","94","LOW"],

["📈","Rise/Fall AI","Rise/Fall Scanner","87","MEDIUM"],

["🔢","Digit Hunter","Digit Analysis","89","MEDIUM"],

["📊","Trend Scanner","EMA Scanner","92","LOW"],

["⚡","Market Pulse","Fast Market","88","LOW"],

["🎯","Match Hunter","Matches Engine","82","HIGH"],

["♾️","Odd/Even Master","Odd/Even AI","90","MEDIUM"]

];

bots.forEach(bot=>{

dashboard.innerHTML+=`

<div class="bot-card">

<div class="bot-icon">${bot[0]}</div>

<h2>${bot[1]}</h2>

<p>${bot[2]}</p>

<div class="bot-percent">${bot[3]}%</div>

<div class="progress">

<div class="progress-fill"

style="width:${bot[3]}%">

</div>

</div>

<p>Risk : ${bot[4]}</p>

<button class="bot-btn">

LOAD BOT

</button>

</div>

`;

});

}

// =========================
// Navigation
// =========================

document.querySelectorAll(".subnav button").forEach(button=>{

button.onclick=function(){

document.querySelectorAll(".subnav button").forEach(btn=>{

btn.classList.remove("active");

});

this.classList.add("active");

const page=this.innerText;

if(page.includes("Dashboard")){

if(chart){

chart.style.display="block";

}

buildDashboard();

}

else if(page.includes("Bot Builder")){

}

dashboard.innerHTML=`

<div class="page">

<h1>🤖 BOT BUILDER</h1>

<div class="builder-box">

<h3>Create Your Strategy</h3>

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

CREATE BOT

</button>

</div>

</div>

`;

}

else if(page.includes("Analysis")){

}

dashboard.innerHTML=`

<div class="page">

<h1>📈 ANALYSIS</h1>

<div class="analysis-grid">

<div class="stat-card">

<h3>Win Rate</h3>

<h1>91%</h1>

</div>

<div class="stat-card">

<h3>Total Trades</h3>

<h1>0</h1>

</div>

<div class="stat-card">

<h3>Profit</h3>

<h1>$0.00</h1>

</div>

<div class="stat-card">

<h3>Running Bots</h3>

<h1>0</h1>

</div>

</div>

</div>

`;

}

else if(page.includes("Live Chat")){

}

dashboard.innerHTML=`

<div class="page">

<h1>💬 LIVE CHAT</h1>

<div class="chat-box">

<div class="chat-message">

Welcome to TOSH Community.

</div>

<input
type="text"
placeholder="Type message...">

<button class="bot-btn">

SEND

</button>

</div>

</div>

`;

}

};

});
// =========================
// Live Confidence Engine
// =========================

setInterval(()=>{

document.querySelectorAll(".bot-percent").forEach(el=>{

let value=parseInt(el.innerText);

value+=Math.floor(Math.random()*5)-2;

if(value>97)value=97;

if(value<72)value=72;

el.innerHTML=value+"%";

const bar=el.parentElement.querySelector(".progress-fill");

if(bar){

bar.style.width=value+"%";

}

});

},2500);

// =========================
// Load Bot Workspace
// =========================

document.addEventListener("click",function(e){

if(e.target.classList.contains("bot-btn")){

const botName=e.target.parentElement.querySelector(".bot-title").innerText;


}

dashboard.innerHTML=`

<div class="page">

<button class="bot-btn back-btn">

⬅ Back To Dashboard

</button>

<h1>${botName}</h1>

<div class="analysis-grid">

<div class="stat-card">

<h3>Status</h3>

<h2 style="color:#00ff66;">READY</h2>

</div>

<div class="stat-card">

<h3>Confidence</h3>

<h2>LIVE</h2>

</div>

<div class="stat-card">

<h3>Market</h3>

<h2>Monitoring...</h2>

</div>

<div class="stat-card">

<h3>Trade</h3>

<button class="bot-btn">

START BOT

</button>

</div>

</div>

</div>

`;

}

if(e.target.classList.contains("back-btn")){


}

buildDashboard();

}

});
// =========================
// Notification Button
// =========================

const notifyBtn = document.getElementById("notifyBtn");

if(notifyBtn){

notifyBtn.onclick=function(){

alert(`🔔 Notifications

• Market Scanner Active
• 8 Bots Ready
• Live Feed Connected
• No new alerts`);

};

}

// =========================
// Discipline Button
// =========================

const disciplineBtn=document.getElementById("disciplineBtn");

if(disciplineBtn){

disciplineBtn.onclick=function(){

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

}

// =========================
// Card Entrance Animation
// =========================

function animateCards(){

const cards=document.querySelectorAll(".bot-card");

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(30px)";

setTimeout(()=>{

card.style.transition=".5s";

card.style.opacity="1";

card.style.transform="translateY(0px)";

},index*120);

});

}

animateCards();

// =========================
// Auto Refresh Dashboard
// =========================

const oldBuildDashboard=buildDashboard;

buildDashboard=function(){

oldBuildDashboard();

animateCards();

};
buildDashboard();
