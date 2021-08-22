const sortArray = (arr) => {
    arr.sort(function (a, b) {
    if (a.points < b.points) {
      return 1;
    }
    if (a.points > b.points) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  })
}

module.exports.sortArray = sortArray