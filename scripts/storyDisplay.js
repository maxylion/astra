let main = 0;
let subchapter = 0;
let interlude = null;
let interludechar = null;
let interludeindx = null;
function load() {
	updateShit();
}
function updateShit() {
	const root = document.getElementById("dia");
	while(root.firstChild) {
		root.removeChild(root.firstChild);
	}
	if (interlude !== null) {
	}
	else {
		fetch(`../scripts/resources/story/Chapter ${main}-${subchapter}.json`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data)
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
		});
	}
}
function switchMain(mainCh, subCh){
	main = mainCh;
	subchapter = subCh;
	interlude = null;
	interludechar = null;
	interludeindx = null;
	updateShit();
}
function switchInterlude(id, char, indx){
	interlude = id;
	interludechar = char;
	indx = indx;
	main = null;
	subchapter = null;
	updateShit();
}