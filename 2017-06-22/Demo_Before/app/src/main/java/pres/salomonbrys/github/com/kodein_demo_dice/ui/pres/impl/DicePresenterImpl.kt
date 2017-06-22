package pres.salomonbrys.github.com.kodein_demo_dice.ui.pres.impl

import pres.salomonbrys.github.com.kodein_demo_dice.business.LuckProcessor
import pres.salomonbrys.github.com.kodein_demo_dice.business.impl.DiceImpl
import pres.salomonbrys.github.com.kodein_demo_dice.ui.pres.DicePresenter
import java.security.SecureRandom

class DicePresenterImpl(private val view: DicePresenter.View, private val luckProcessor: LuckProcessor) : DicePresenter {

    private val dice = DiceImpl(view.sides, SecureRandom())

    override fun roll() {
        val roll = dice.roll()
        view.setResult(roll)
        luckProcessor.add(roll.toFloat() >= ((dice.sides.toFloat() + 1f) / 2f))
    }


}
