package pres.salomonbrys.github.com.kodein_demo_dice.business.impl

import pres.salomonbrys.github.com.kodein_demo_dice.business.Dice
import java.util.*

class DiceImpl(override val sides: Int, private val random: Random) : Dice {

    override fun roll() = random.nextInt(sides) + 1

}