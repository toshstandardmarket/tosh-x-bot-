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

else{

dashboard.innerHTML=`

<div style="padding:80px;text-align:center;">

<h1>${page}</h1>

<br>

<h3>

Coming Soon...

</h3>

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
