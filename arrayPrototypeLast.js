Array.prototype.last = function () {
  const length = this.length
  return length ? this.pop() : -1
};

/**
* const arr = [1, 2, 3];
* arr.last(); // 3
*/
