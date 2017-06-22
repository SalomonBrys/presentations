package pres.salomonbrys.github.com.kodein_demo_dice.utils

class MovingAverageCalculator {

    var average = 0
        private set

    var count = 0
        private set

    operator fun plusAssign(value: Int) {
        average = ((average.toDouble() * count.toDouble() + value.toDouble()) / (count.toDouble() + 1.0)).toInt()
        ++count
    }

}
