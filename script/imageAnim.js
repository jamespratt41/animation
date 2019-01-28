(() => {

	console.log('boomtown');

	// set up the puzzle pieces and boards

	const theButton = document.querySelector("#buttonHolder img");


	function changeHeadLine(){
		document.querySelector('h1').textContent = "YOO WASSUP!";
		document.querySelector('p').textContent = "Party time";
	}

	theButton.addEventListener('click',changeHeadLine);





})();
