
function load(){
	fetch("./scripts/resources/texts.json")
	.then((res) => res.json())
	.then((data) => {
		let cues = data["textcues"];
		let texts = data["mechanics"];
		let items = document.getElementsByClassName("panel");
	})
}