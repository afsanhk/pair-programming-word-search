const transpose = function(matrix) {
    const transpose = matrix[0].map((_, columnIndex) => 
    matrix.map((row) => row[columnIndex]),
    )
    return transpose;
};

const wordSearch = (letters, word) => { 
    
    if (letters.length === 0) {
        return `Please enter non-empty word search.`;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    const joined = horizontalJoin.concat(verticalJoin);

    for (l of joined) {
        if (l.includes(word)) return true
    }
    return false
};

module.exports = wordSearch;


  // matrix[0].map - iteralte however many times that there are columns
  // (_, columnIndex) -> _ is the element (which we don't want) column is the index (which we do want)
  // underscore is general practice for a parameter that we do not use
  //
  //columnIndex = 0 -> then row is row[0] -> returns value 1
  // row[1] -> returns 1 -> then looks at next row
  //row[2] -> returns 1 -> then returns 1
  //repeat
  //creates new array of [1,1,1,1]

  //columnIndex = 1
  //cycle repeats -> row [0] returns 2, row[1], returns 2...ect