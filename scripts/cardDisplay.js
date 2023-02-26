var currentCard = ""
function hide(){
	document.getElementById("display").style.display = "none";
	console.log(document.getElementById("display").style.display);
}
function changeCard(cardName) {
	currentCard = cardName;
	document.getElementById("display").style.display = "";
	fetch("./scripts/resources/cards.json")
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		var img = new Image();
		img.src = data[cardName]["src"];
		document.getElementById("cardimgfull").src = img.src;
		document.getElementById("abil").textContent = `Active Ability: ${data[cardName]["info"]["ability"]}`
		document.getElementById("abil2").textContent = `Passive Ability: ${data[cardName]["info"]["passive"]}`
		document.getElementById("cost").textContent = `Summon cost: ${data[cardName]["info"]["cost"]}`
		document.getElementById("title").textContent = data[cardName]["name"];
		document.getElementById("title2").textContent = data[cardName]["title"]
	});
}