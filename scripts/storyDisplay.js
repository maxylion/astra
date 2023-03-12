let main = 0;
let subchapter = 0;
let ininterlude = false;
let interludechar = null;
let interludeindx = null;
let currentdata = null;
function load() {
	fetch(`../scripts/resources/story/Chapter ${main}-${subchapter}.json`)
	.then((res) => res.json())
	.then((data) => {
		updateShit(data);
	});
}
function updateShit(data) {
	const root = document.getElementById("dia");
	while(root.firstChild) {
		root.removeChild(root.firstChild);
	}
	document.getElementById("title").innerHTML = data["title"];
	data["lines"].forEach(element => {
		const k = Object.keys(element)[0];
		const charli = document.createElement("li");
		charli.classList.add("dialogue");
		const charp = document.createElement("p");
		switch (k) {
		case "":
			charp.textContent = k;
			break;
		default:
			charp.textContent = k + ":";
			break;
		}
		charp.classList.add("char");
		charli.appendChild(charp);
		const v = element[k];
		const dialoguep = document.createElement("p");
		dialoguep.textContent = v;
		dialoguep.classList.add("text");
		charli.appendChild(dialoguep);
		root.appendChild(charli);
	});
}
function switchMain(mainCh, subCh){
	main = mainCh;
	subchapter = subCh;
	ininterlude = false;
	interludechar = null;
	interludeindx = null;
	fetch(`../scripts/resources/story/Chapter ${main}-${subchapter}.json`)
	.then((res) => res.json())
	.then((data) => {
		updateShit(data);
	});
}
function switchInterlude(char, indx){
	ininterlude = true;
	interludechar = char;
	interludeindx = indx;
	const path = `../scripts/resources/story/interlude/Intro-${interludechar}-${interludeindx}.json`;
	console.log(path);
	fetch(path)
	.then((res) => res.json())
	.then((data) => {
		updateShit(data);
	});
	main = null;
	subchapter = null;
}