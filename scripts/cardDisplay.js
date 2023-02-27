const sides = {
	mukaki:"devil",
	makari:"god"
};
const types = {
	hero:"hero",
	spell:"spell"
}
let type = "";
let currentCard = "";
let color = "red";
let side = sides.makari;
function load(){
	document.getElementById("cardimgfull").style.visibility = "hidden";
	document.getElementById("side").style.backgroundColor = "#D9A94D";
	document.getElementById("display").style.display = "none";
}
function changeCard(cardName) {
	currentCard = cardName;
	type = types.hero;
	document.getElementById("display").style.display = "";
	document.getElementById("colorselect").style.display = "none";
	document.getElementById("cardimgfull").style.visibility = "visible";
	fetch("./scripts/resources/cards.json")
	.then((res) => res.json())
	.then((data) => {
		let img = new Image();
		let info = data[currentCard][`info_${side}`];
		img.src = data[currentCard][`src_${side}`];
		document.getElementById("cardimgfull").src = img.src;
		document.getElementById("abil").textContent = `Active Ability: ${info["ability"]}`
		document.getElementById("abil2").textContent = `Passive Ability: ${info["passive"]}`
		document.getElementById("cost").textContent = `Summon cost: ${data[currentCard]["cost"]}`
		document.getElementById("title").textContent = data[currentCard]["name"];
		document.getElementById("title2").textContent = data[currentCard]["title"];
	});
}
function changeColor(newColor){
	color = newColor;
}
function changeSpell(spellName){
	currentCard = spellName;
	type = types.spell;
	document.getElementById("display").style.display = "";
	document.getElementById("colorselect").style.display = "";
	document.getElementById("cardimgfull").style.visibility = "visible";
	fetch("./scripts/resources/spells.json")
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
	})
}
function changeSide(){
	let button = document.getElementById("side");
	
	switch(side){
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
	if (type === types.hero){
		changeCard(currentCard);
	}
	else if (type === types.spell){
		changeSpell(currentCard);
	}
}