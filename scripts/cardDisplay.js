const sides = {
	mukaki:"devil",
	makari:"god"
}
let currentCard = "";
let side = sides.makari;
function load(){
	document.getElementById("display").style.display = "none";
	document.getElementById("side").style.backgroundColor = "#D9A94D";
}
function changeCard(cardName) {
	currentCard = cardName;
	document.getElementById("display").style.display = "";
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
		document.getElementById("title2").textContent = data[cardName]["title"]
	});
}
function changeSide(){
	if (currentCard === ""){
		return;
	}
	let button = document.getElementById("side");
	switch(side){
		case sides.makari:
			side = sides.mukaki;
			button.textContent = "Mukaki";
			button.style.color = "#FFFFFF";
			button.style.backgroundColor = "#240E41";
			break;
		case sides.mukaki:
			side = sides.makari;
			button.textContent = "Makari-Hari";
			button.style.backgroundColor = "#D9A94D";
			break;
	};
	console.log(side);
	changeCard(currentCard);
}