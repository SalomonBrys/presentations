package pres.salomonbrys.github.com.kodein_demo_dice

import android.app.Application
import pres.salomonbrys.github.com.kodein_demo_dice.business.LuckProcessor
import pres.salomonbrys.github.com.kodein_demo_dice.business.impl.LuckProcessorImpl
import pres.salomonbrys.github.com.kodein_demo_dice.utils.MovingAverageCalculator

class DiceApplication : Application() {

    val luckProcessor: LuckProcessor = LuckProcessorImpl(MovingAverageCalculator())

}
