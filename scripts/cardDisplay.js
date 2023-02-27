const sides = {
	mukaki:"devil",
	makari:"god"
};
let currentCard = "";
let color = "";
let side = sides.makari;
function load(){
	document.getElementById("cardimgfull").style.visibility = "hidden";
	document.getElementById("side").style.backgroundColor = "#D9A94D";
}
function changeCard(cardName) {
	currentCard = cardName;
	document.getElementById("colorselect").style.display = "none";
	document.getElementById("cardimgfull").style.visibility = "visible";
	fetch("./scripts/resources/cards.json")
	.then((res) => res.json())
	.then((data) => {
		let img = new Image();
		let info = data[cardName][`info_${side}`];
		img.src = data[cardName][`src_${side}`];
		document.getElementById("cardimgfull").src = img.src;
		document.getElementById("abil").textContent = `Active Ability: ${info["ability"]}`
		document.getElementById("abil2").textContent = `Passive Ability: ${info["passive"]}`
		document.getElementById("cost").textContent = `Summon cost: ${data[cardName]["cost"]}`
		document.getElementById("title").textContent = data[cardName]["name"];
		document.getElementById("title2").textContent = data[cardName]["title"];
	});
}
function changeColor(newColor){
	color = newColor;
}
function changeSpell(spellName){
	currentCard = spellName;
	document.getElementById("colorselect").style.display = "";
	document.getElementById("cardimgfull").style.visibility = "visible";
	fetch("./scripts/resources/spells.json")
	.then((res) => res.json())
	.then((data) => {
		let img = new Image();
		let name = data[cardName]["name"];
		let desc = data[cardName]["desc"];
		img.src = data[cardName]["srcs"][color];
		document.getElementById("cardimgfull").src = img.src;
		document.getElementById("abil").textContent = `Ability: ${desc}`;
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
	if (currentCard === ""){
		return;
	}
	changeCard(currentCard);
}