var sudoku = sudoku || {};

/**
 * Sudoku solver. Solves sudoku puzzles
 * recursively using brute-force backtracking.
 *
 * The given puzzle should be an array of integer values
 * where the '0' value represents an unsolved cell in the
 * puzzel. The returned puzzel will be in the same format
 *
 * @param  {Array}   puzzle The partially solved puzzel
 * @param  {Integer} index  The current cell to solve
 * @return {Array}          The solved puzzel, or false if
 *                          the puzzel is unable to be solved
 */
sudoku.solve = function(puzzle, index)
{
	// Start from cell 0 of the puzzle
	index = index || 0;

	// Make sure this cell hasn't already been given to us
	while (puzzle[index] != 0 && puzzle[index] !== undefined)
		++index;

	// Return the puzzel after we solve it
	if (index > 80)
		return puzzle;

	// Figure out what numbers this cell cannot be
	var invalidValues = [];

	// Add invalid values in the column, row, and square
	// These are the constraints for backtracking
	for (var i = 0; i < 9; ++i)
	{
		// Add values from this column
		invalidValues[puzzle[(index % 9) + (i * 9)]] = true;

		// Add values from this row
		invalidValues[puzzle[(Math.floor(index / 9) * 9) + i]] = true;

		// Add values from the subsquare of the problem
		invalidValues[puzzle[index - ((Math.floor(index / 9) % 3) * 9) -
			(index % 3) + (Math.floor(i / 3) * 9) + (i % 3)]] = true;
	}

	// Try the values 1-9 for this square
	for (var value = 1; value < 10; ++value)
	{
		// Make sure we can put this value in the square
		if (invalidValues[value] !== true)
		{
			// Set the value for this cell
			puzzle[index] = value;

			// Solve the next cell in the puzzel
			var newPuzzle = sudoku.solve(puzzle, index + 1);

			// If we solved the puzzle then return it
			if (newPuzzle !== false)
				return newPuzzle;

			// If we had trouble solving the next cell then reset this cell and
			// let the loop iterate so we can try with the next value for the cell
			puzzle[index] = 0;
		}
	}

	// Unable to solve the puzzel from this cell
	return false;
}