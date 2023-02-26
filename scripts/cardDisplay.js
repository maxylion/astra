const sides = {
	mukaki:"devil",
	makari:"god"
}
let side = sides.makari;
function load(){
	document.getElementById("display").style.display = "none";
}
function changeCard(cardName) {
	document.getElementById("display").style.display = "";
	fetch("./scripts/resources/cards.json")
	.then((res) => res.json())
	.then((data) => {
		console.log(`src_${side}`);
		let img = new Image();
		img.src = data[cardName][`src_${side}`];
		document.getElementById("cardimgfull").src = img.src;
		document.getElementById("abil").textContent = `Active Ability: ${data[cardName]["info"]["ability"]}`
		document.getElementById("abil2").textContent = `Passive Ability: ${data[cardName]["info"]["passive"]}`
		document.getElementById("cost").textContent = `Summon cost: ${data[cardName]["info"]["cost"]}`
		document.getElementById("title").textContent = data[cardName]["name"];
		document.getElementById("title2").textContent = data[cardName]["title"]
	});
}
function changeSide(){
	switch(side){
		case sides.makari:
			side = sides.mukaki;
			break;
		case sides.mukaki:
			side = sides.makari;
			break;
	};
	fetch('./scripts/resources/cards.json')
	.then((res) => res.json())
	.then((data => {
		let keys = Object.keys(data);
		keys.forEach(name => {
			changeCard(name);
		});
	}))
}