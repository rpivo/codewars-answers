object Kata {
  fun digitize(n:Long):IntArray {
    val string = n.toString()
    var numbers = string.map {
        it.toString().toInt()
    }
    return numbers.asReversed().toIntArray()
  }
}