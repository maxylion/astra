let main = 0;
let subchapter = 0;
let interlude = null;

function load() {

}
function updateShit() {

}
function switchAll(mainCh, subCh){
	main = mainCh;
	subchapter = subCh;
	interlude = null;
	updateShit();
}
function switchInterlude(id){
	interlude = id;
}