(() => {

	console.log('boomtown');

	// set up the puzzle pieces and boards

	const thePieces = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

	//get a reference to the drag side
	let piecesBoard = document.querySelector(".puzzle-pieces");
	let puzzleBoard = document.querySelector(".puzzle-board");

	//get a reference to the imgs at the bottom so we can change the board
	let puzzleSelectors = document.querySelectorAll('#buttonHolder img');

	//functtions go in the middle
	function createPuzzlePieces(pictureIndex) {
		//generate images here -> need to make 4, tl tr bl br
		// debugger;
		//loopp through the imagees refs and generate one for each
		thePieces.forEach((piece,index)=> {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="puzzle piece">`;
			piecesBoard.innerHTML += newPuzzlePiece;
		});
	}
	function resetPuzzlePieces(){
		//change the current puzzle, regenerate the pieces
		piecesBoard.innerHTML = "";
		// generate new pieces
		createPuzzlePieces(this.dataset.puzzleref);


	}

	//event handling goes here
	puzzleSelectors.forEach(button=>button.addEventListener('click',resetPuzzlePieces));

	// call this function to set up or generate the pieces on load
	createPuzzlePieces(0);
})();
