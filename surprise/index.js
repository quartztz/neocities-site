var reader;

function checkFileApi() {
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		reader = new FileReader();
		return true;
	} else {
		alert("cannot open files!")
		return false;
	}
}

function readText(filePath) {
	var text = "";

	if (filePath.files && filePath.files[0]) {
		reader.onload = function (e) {
			text = e.target.result;
			console.log(text);
			show(filePath.files[0].content);
		}
	}
}

show = function (txt) {
	var el = document.querySelector(".counter");
	el.innerHTML = txt;
}

readText("./index.txt")