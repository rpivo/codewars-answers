function swapValues() {
  var args = Array.prototype.slice.call(arguments[0]);
  var temp = args[0];
  arguments[0][0] = args[1];
  arguments[0][1] = temp;
}