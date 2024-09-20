let a = 8
let b = 10

// TODO: Swap the values of a and b without changing lines 1 and 2; extra points if you can do it without using a temporary variable

// arguments in a function are not variables right?
function swap(num1, num2) {
  a = num2
  b = num1
}
swap(a, b)

module.exports = { a, b }
