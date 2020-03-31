fun expressionsMatter(a : Int, b : Int, c : Int) : Int {
  val first = a * (b + c)
  val second = a * b * c
  val third = a + b * c
  val fourth = (a + b) * c
  val fifth = a + b + c
  return arrayOf(first, second, third, fourth, fifth).max()!!
}