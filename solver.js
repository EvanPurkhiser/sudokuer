/**
 * Singleton puzzle solver object
 *
 * This object is used to solve sudoku puzzles.
 * The only method exposed will is the solve method
 * which accepts a two dimensional array of sudoku
 * cell values, where empty cells are defined as any
 * cell that contains the value zero.
 */
var solver = function()
{
	var solve = function(unsolvedPuzzle)
	{
		return unsolvedPuzzle;
	};

	return {
		'solve' : solve
	};
}();


// Setup a unsolved puzzle
var puzzle = [];

// puzzle    1  2  3  4  5  6  7  8  9       1  2  3  4  5  6  7  8  9
puzzle[0] = [9, 0, 0, 1, 0, 0, 0, 7, 5]; // [9, 2, 4, 1, 8, 6, 3, 7, 5]
puzzle[1] = [0, 0, 0, 9, 2, 0, 0, 4, 0]; // [7, 6, 5, 9, 2, 3, 8, 4, 1]
puzzle[2] = [3, 1, 8, 0, 0, 0, 2, 0, 0]; // [3, 1, 8, 7, 5, 4, 2, 9, 6]
puzzle[3] = [0, 0, 1, 0, 6, 7, 4, 5, 0]; // [2, 9, 1, 8, 6, 7, 4, 5, 3]
puzzle[4] = [0, 8, 0, 3, 0, 5, 0, 2, 0]; // [4, 8, 6, 3, 9, 5, 1, 2, 7]
puzzle[5] = [0, 3, 7, 4, 1, 0, 9, 0, 0]; // [5, 3, 7, 4, 1, 2, 9, 6, 8]
puzzle[6] = [0, 0, 2, 0, 0, 0, 6, 8, 4]; // [1, 7, 2, 5, 3, 9, 6, 8, 4]
puzzle[7] = [0, 4, 0, 0, 7, 1, 0, 0, 0]; // [8, 4, 9, 6, 7, 1, 5, 3, 2]
puzzle[8] = [6, 5, 0, 0, 0, 8, 0, 0, 9]; // [6, 5, 3, 2, 4, 8, 7, 1, 9]

// Solve the puzzle
console.log(solver.solve(puzzle));