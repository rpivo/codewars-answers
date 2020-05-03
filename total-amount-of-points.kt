fun points(games: List<String>): Int {
    var total = 0
    for (game in games) {
        val x = game.first().toInt()
        val y = game.last().toInt()
        if (x > y) {
            total += 3
        } else if (x == y) {
            total += 1
        } 
    }
    return total
}