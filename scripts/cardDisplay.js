const sides = {
	mukaki:"devil",
	makari:"god"
};
const types = {
	hero:"hero",
	spell:"spell"
};
const modes = {
	pvp:"takeover",
	coop:"conquest"
};
const categoryNames = {
	"energy":"Energy generation",
	"card": "Card generation",
	"rmenergy": "Energy removal",
	"rmcard": "Card removal",
	"special": "Special effect",
	"swap": "Card swap",
	"trial": "Trial effects",
};
let type = "";
let mode = modes.pvp;
let currentCard = "";
let color = "red";
let side = sides.makari;
function load(){
	document.getElementById("cardimgfull").style.visibility = "hidden";
	document.getElementById("side").style.backgroundColor = "#D9A94D";
	document.getElementById("display").style.display = "none";
}
function filter(arr){
	let str = "";
	let [a, b, c, d] = arr;
	let nArr = [a, b, c, d].filter((m) =>{
		value != undefined;
	});
	nArr.forEach(cat => {
		str.concat(`${categoryNames[cat]} `);
	});
	return str;
}
function changeCard(cardName) {
	currentCard = cardName;
	type = types.hero;
	document.getElementById("display").style.display = "";
	document.getElementById("colorselect").style.display = "none";
	document.getElementById("cardimgfull").style.visibility = "visible";
	fetch(`./scripts/resources/cards_${mode}.json`)
	.then((res) => res.json())
	.then((data) => {
		let img = new Image();
		let currentData = data[currentCard];
		let info = currentData[`info_${side}`];
		img.src = currentData[`src_${side}`];
		document.getElementById("cardimgfull").src = img.src;
		document.getElementById("abil").textContent = `Active Ability: ${info["ability"]}`
		document.getElementById("abil2").textContent = `Passive Ability: ${info["passive"]}`
		document.getElementById("cost").textContent = `Summon cost: ${currentData["cost"]}`
		document.getElementById("title").textContent = currentData["name"];
		document.getElementById("title2").textContent = currentData["title"];
		document.getElementById("title2").style.width = document.getElementById("title").style.width;
		document.getElementById("cat").textContent = `Categories: ${filter(currentData["types"])}`;
	});
}
function changeColor(newColor){
	color = newColor;
	changeSpell(currentCard);
}
function changeSpell(spellName){
	currentCard = spellName;
	type = types.spell;
	console.log(color);
	document.getElementById("display").style.display = "";
	document.getElementById("colorselect").style.display = "";
	document.getElementById("cardimgfull").style.visibility = "visible";
	fetch(`./scripts/resources/spells_${mode}.json`)
	.then((res) => res.json())
	.then((data) => {
		let img = new Image();
		let name = data[currentCard]["name"];
		let desc = data[currentCard][`desc_${side}`];
		img.src = data[currentCard]["srcs"][color];
		document.getElementById("cardimgfull").src = img.src;
		document.getElementById("abil").textContent = `Ability: ${desc}`;
		
		document.getElementById("cost").textContent = "";
		document.getElementById("abil2").textContent = "";
		document.getElementById("title").textContent = name;
		document.getElementById("title2").textContent = "Spell Card";
		document.getElementById("title2").style.width = document.getElementById("title").style.width;
		document.getElementById("cat").textContent = "";
	})
}
function changeMode(){
	let button = document.getElementById("mode");
	switch(mode){
		case modes.pvp:
			button.textContent = "Conquest Trial";
			mode = modes.coop;
			break;
		case modes.coop:
			button.textContent = "Takeover Trial";
			mode = modes.pvp;
			break;
	}
	if (currentCard === "") {
		return;
	}
	switch (type) {
		case types.hero:
			changeCard(currentCard);
			break;
		case types.spell:
			changeSpell(currentCard);
			break;
	}
}
function changeSide(){
	let button = document.getElementById("side");
	
	switch (side) {
		case sides.makari:
			side = sides.mukaki;
			button.textContent = "Mukaki's Side";
			button.style.color = "#FFFFFF";
			button.style.backgroundColor = "#240E41";
			break;
		case sides.mukaki:
			side = sides.makari;
			button.textContent = "Makari-Hari's Side";
			button.style.color = "#343434";
			button.style.backgroundColor = "#D9A94D";
			break;
	};
	if (currentCard === "") {
		return;
	}
	switch (type) {
		case types.hero:
			changeCard(currentCard);
			break;
		case types.spell:
			changeSpell(currentCard);
			break;
	}
}