module.exports = function createDreamTeam(arr) {

  if (!Array.isArray(arr)) {
    return false;
  }

  let filtered = arr.filter(element => typeof element === 'string');
  let arrLower = filtered.map(element => element.toUpperCase().trim());
  let sortedArr = arrLower.sort();
  let result = [];

  for (let i = 0; i < sortedArr.length; i++) {
    result.push(sortedArr[i][0].toUpperCase());
  }
  return result.join('');

}