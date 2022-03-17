//pair programming - Nicole MacLean && Saida Mahmudova

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
      return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
      if (l.includes(word)) {
          return true;
      }
  }
  const verticalJoin = matrix(letters).map(ls => ls.join(''));

  for (let l of verticalJoin) {
      if (l.includes(word)) {
          return true;
      }
      return false;
  }
};

const matrix = function (letters) {
  let newArray = [];
  for (let r = 0; r < letters.length; r++) {
      for (let c = 0; c < letters[r].length; c++) {
          if (!newArray[c]) {
              newArray.push([letters[r][c]]);
          } else {
              newArray[c].push(letters[r][c]);
          }
      }
  }
  return newArray;
};
module.exports = wordSearch;