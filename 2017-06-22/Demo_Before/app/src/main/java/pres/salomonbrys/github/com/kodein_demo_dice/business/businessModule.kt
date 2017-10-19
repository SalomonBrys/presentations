package pres.salomonbrys.github.com.kodein_demo_dice.business

import com.github.salomonbrys.kodein.*
import pres.salomonbrys.github.com.kodein_demo_dice.business.impl.DiceImpl
import pres.salomonbrys.github.com.kodein_demo_dice.business.impl.LuckProcessorImpl

val businessModule = Kodein.Module {

    bind<LuckProcessor>() with singleton { LuckProcessorImpl(instance()) }

    bind<Dice>() with factory { sides: Int -> DiceImpl(sides, instance(tag = "unsafe")) } // Multiton?

}
